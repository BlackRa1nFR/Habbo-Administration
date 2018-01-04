import Error from '../../../../../modules/error'
import Errors from '../../../../../database/models/cms/errors'
import Settings from '../../../../../database/models/cms/settings'

export default class Config
{

  constructor (http)
  {
    http.get('/cms/settings/findretros', Config.get)
    http.post('/cms/settings/findretros', Config.update)
  }

  static get (req, res)
  {
    Settings.retrieve()
      .then (s => {
        res.render('session/user/cms/settings/findretros', {
          config : s
        })
      })
      .catch (e => {
        new Error('CMS - Findretros Settings', e, req, res, 'normal')
      })
  }

  static update (req, res)
  {
    Settings.update(req.body)
      .then (s => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('CMS - Findretros Settings', e, req, res, 'normal')
      })
  }

}
