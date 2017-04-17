
import Moment from 'moment'
import Dump from 'mysqldump'
import express from 'express'
import body_parser from 'body-parser'
import Config from '../../../conf/database'
import Backup from '../../../database/models/admin/backups'
import Settings from '../../../database/models/admin/settings'

class Backups
{

  constructor ()
  {
    const Website = express()
    Website.use(body_parser.urlencoded({extended:true}))
    Website.use(body_parser.json())
    Website.post('/', Backups.prepare)
    Website.get('/', Backups.tell)
    Website.get('/do', Backups.quick)

    Settings.where('id', 1).fetch()
      .then (s => {
        Website.listen(s.toJSON().backups_port, '0.0.0.0')
      })
      .catch (e => {
        new Error('normal', e)
      })
  }

  static prepare (request, result)
  {
    console.log('HEY')
    Backups.do(request.body.title, request.body.content)
    result.send('In transit')
  }

  static tell (request, result)
  {
    result.send('Backup server is running')
  }

  static do (title, content)
  {
    new Backup({ title : title, content : content, created_at : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss") }).save()
      .then (b => {
        b = b.toJSON()
        Dump({ host : Config.connection.host, user : Config.connection.user, password : Config.connection.password, database : Config.connection.database, dest : `../../../app/database/models/${b.id}_${b.title}.sql` }, (e => {
          if (e)
          {
            console.log(e)
            new Error('normal', e)
          }
        }))
      })
      .catch (e => {
        new Error('normal', e)
      })
  }

  static quick (request, result)
  {
    result.send('Backup in progress')
    new Backup({ title : 'Quick Backup', content : 'Automatic backup system', created_at : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss") }).save()
      .then (b => {
        b = b.toJSON()
        Dump({ host : Config.connection.host, user : Config.connection.user, password : Config.connection.password, database : Config.connection.database, dest : `../../../app/database/models/${b.id}_${b.title}.sql` }, (e => {
          if (e)
          {
            new Error('normal', e)
          }
        }))
      })
      .catch (e => {
        new Error('normal', e)
      })
  }

}

module.exports = Backups
