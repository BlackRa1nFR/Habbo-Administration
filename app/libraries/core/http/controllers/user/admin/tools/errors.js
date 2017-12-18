import Error from '../../../../../modules/error'
import Logs from '../../../../../database/models/admin/errors'

export default class Errors
{

  constructor (http)
  {
    http.get('/admin/errors', Errors.list)
    http.get('/admin/errors/view/:id', Errors.get)
    http.get('/admin/errors/delete/:id', Errors.delete)
  }

  static list (req, res)
  {


    Logs.fetchAll({ withRelated : ['user'] })
      .then (logs => {

        let fatal  = []
        let normal = []
        logs.toJSON().forEach(l => {
          if (l.type == 'fatal') fatal.push(l)
          if (l.type == 'normal') normal.push(l)
        })

        res.render('session/user/admin/tools/errors/list', {
          fatal : fatal,
          normal : normal
        })

      })
      .catch (e => {
        new Error('Admin - Viewing Error Logs',e, req, res, 'normal')
      })
  }

  static get (req, res)
  {
    Logs.where('id', req.params.id).fetch({ withRelated : ['user'] })
      .then (log => {

        if (log)
        {
          res.render('session/user/admin/tools/errors/view', {
            log : log.toJSON()
          })
        }
        else
        {
          res.redirect('back')
        }

      })
      .catch (e => {
        new Error('Admin - Reading Error Log ',e, req, res, 'normal')
      })
  }

  static delete (req, res)
  {
    Logs.where('id', req.params.id).destroy()
      .then (s => {
        res.redirect('/admin/errors')
      })
      .catch (e => {
        new Error('Admin - Deleting Error Log',e, req, res, 'normal')
      })
  }

}
