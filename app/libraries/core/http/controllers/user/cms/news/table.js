import Error from '../../../../../modules/error'
import News from '../../../../../database/models/cms/news'

export default class Table {
  constructor (http) {
    http.get('/hotel/news', Table.get)
  }

  static get (req, res) {
    News.fetchAll({ withRelated: ['author'] })
      .then(n => {
        res.render('session/user/hotel/news/table', {
          news: n.toJSON()
        })
      })
      .catch(e => {
        new Error('Hotel - News Viewing', errors, req, res, 'normal')
      })
  }
}
