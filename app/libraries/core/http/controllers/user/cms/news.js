import Error from '../../../../modules/error'
import News from '../../../../database/models/cms/news'

export default class Article
{

  constructor (http)
  {
    http.get('/cms/news', Article.get)
    http.get('/cms/news/create', Article.getCreate)
    http.post('/cms/news/create', Article.create)
    http.get('/cms/news/edit/:id', Article.view)
    http.post('/cms/news/edit/:id', Article.update)
    http.get('/cms/news/delete/:id', Article.delete)
  }

  static get (req, res)
  {
    News.retrieve()
      .then (n => {
        res.render('session/user/cms/news/table', {
          news : n
        })
      })
      .catch (e => {
        new Error('Hotel - News Viewing', e, req, res, 'normal')
      })
  }

  static getCreate (req, res)
  {
    res.render('session/user/cms/news/create')
  }

  static view (req, res)
  {
    News.retrieve(req.params.id)
      .then (n => {
        if (n)
        {
          res.render('session/user/cms/news/edit', {
            article : n
          })
        }
        else
        {
          req.flash('error', 'That article does not exist')
          res.redirect('/cms/news')
        }
      })
      .catch (e => {
        new Error('Hotel - News Viewing', e, req, res, 'normal')
      })
  }

  static create (req, res)
  {
    News.create(req.body)
      .then (n => {
        res.redirect(`/cms/news/edit/${n}`)
      })
      .catch (e => {
        new Error('Hotel - News Creating', e, req, res, 'normal')
      })
  }

  static update (req, res)
  {
    News.update(req.body)
      .then (n => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('Hotel - News Updating', e, req, res, 'normal')
      })
  }

  static delete (req, res)
  {
    News.delete(req.params.id)
      .then (n => {
        res.redirect('/cms/news')
      })
      .catch (e => {
        new Error('Hotel - News Viewing', e, req, res, 'normal')
      })
  }

}
