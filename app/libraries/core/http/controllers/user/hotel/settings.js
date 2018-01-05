import Error from '../../../../modules/error'
import Config from '../../../../database/models/hotel/settings'

export default class Settings
{

  constructor (http)
  {
    http.get('/hotel/settings', Settings.view)
    http.post('/hotel/settings', Settings.update)
  }

  static view (req, res)
  {
    Config.retrieve()
      .then (c => {
        res.render('session/user/hotel/settings', {
          config : c
        })
      })
      .catch (e => {
        new Error('Hotel - Settings', e, req, res, 'normal')
      })
  }

  static update (req, res)
  {
    Config.update(req.body)
      .then (c => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('Hotel - Settings', e, req, res, 'normal')
      })
    }

}
