import File from 'fs'
import Request from 'request'
import Config from '../../../../../../database/models/admin/settings'
export default class Updates
{

  constructor (http)
  {
    http.get('/admin/updates', Updates.check)
  }

  static check (req, res)
  {
    Request({ url : 'https://raw.githubusercontent.com/chrismpettyjohn/xhabbo_v/master/updates.json', json : true }, ((e, r, b) => {
      Config.compare(b.version)
        .then (c => {
          res.render('session/user/admin/home/updates', {
            status : c
          })
        })
        .catch (e => {

        })
    }))
  }

}
