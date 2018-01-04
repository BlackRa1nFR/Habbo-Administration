import Error from '../../../../../modules/error'
import Errors from '../../../../../database/models/cms/errors'

export default class Website
{

  constructor (http)
  {
    http.get('/cms/errors', Website.get)
    http.get('/cms/errors/view/:id', Website.view)
    http.get('/cms/errors/delete/:id', Website.delete)
  }

  static get (req, res)
  {
    Errors.retrieve()
      .then (e => {
        res.render('session/user/cms/settings/errors/list', {
          errors : e
        })
      })
      .catch (e => {
        new Error('CMS - Error viewing', e, req, res, 'normal')
      })
  }

  static view (req, res)
  {
    Errors.retrieve(req.params.id)
      .then (e => {
        if (e)
        {
          res.render('session/user/cms/settings/errors/view', {
            log :e
          })
        }
        else
        {
          req.flash('error', 'That error code does not exist')
          res.redirect('/cms/errors')
        }
      })
      .catch (e => {
        new Error('CMS - Error viewing', e, req, res, 'normal')
      })
  }

  static delete (req, res)
    {
    Errors.remove(req.params.id)
      .then (s => {
        res.redirect('/cms/errors')
      })
      .catch (e => {
        new Error('CMS - Error viewing', e, req, res, 'normal')
      })
  }

}
