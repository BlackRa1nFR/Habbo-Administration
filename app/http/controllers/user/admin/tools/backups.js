
import Cache from 'memory-cache'
import Request from 'requestify'
import Dump from 'mysqldump'
import Process from 'child_process'
import Config from '../../../../../conf/database'
import Backup from '../../../../../database/models/admin/backups'

class Backups
{

    constructor (Website)
    {
        Website.get('/admin/tools/backups', Backups.view)
        Website.post('/admin/tools/backups', Backups.create)
    }

    static view (request, result)
    {
        result.render('user/admin/tools/backups', {
            page    : 'Database Backups',
            host    : request.get('host')
        })
    }

    static create (request, result)
    {
      const settings = Cache.get('admin_settings')
      Request.post(`${request.get('host')}:${settings.backups_port}`, { title : request.body.title, content : request.body.content })
        .then (r => {
          console.log(r)
          request.flash('success', 'Your database backup is in progress')
          result.redirect('back')
        })
    }

}
module.exports = Backups
