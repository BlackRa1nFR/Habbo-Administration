
import Moment from 'moment'
import Articles from '../../../../database/models/cms/articles'
import Users from '../../../../database/models/emu/users/users'

class News
{

  constructor (Website)
  {
    Website.get('/hotel/news', News.list)
    Website.get('/hotel/news/create', News.create_view)
    Website.post('/hotel/news/create', News.create)
    Website.get('/hotel/news/:id', News.read)
    Website.post('/hotel/news/update', News.update)
    Website.get('/hotel/news/delete/:id', News.delete)
  }

  static list (request, result)
  {
    Articles.query(qb => { qb.orderBy('id', 'DESC').limit(18) }).fetchAll({ withRelated : ['author'] })
      .then (articles => {
        result.render('user/cms/news/list', {
          page     : 'News Articles',
          articles : articles.toJSON()
        })
      })
  }

  static create_view (request, result)
  {
    result.render('user/cms/news/create', {
      page : 'News Creator'
    })
  }

  static create (request, result)
  {
    new Articles({ title : request.body.title, image : request.body.image, content : request.body.content, author : request.user.user.user_id, created_at : Moment().format('YYYY-MM-DD HH:mm:ss') }).save()
      .then (article => {
        request.flash('success', `${request.body.title} has been created`)
        result.redirect(`/hotel/news/${article.toJSON().id}`)
      })
      .catch (error => {
        result.render('errors/500')
      })
  }

  static read (request, result)
  {
    Articles.where('id', request.params.id).fetch({ withRelated : ['author', 'author.rank', 'author.articles'] })
      .then (article => {
        article = article.toJSON()
        result.render('user/cms/news/view', {
          page    : `Viewing ${article.title}`,
          article : article
        })
      })
  }

  static update (request, result)
  {
    Articles.where('id', request.body.id).fetch()
      .then (article => {
        if (article)
        {
          article.set('title', request.body.title)
          article.set('image', request.body.image)
          article.set('content', request.body.content)
          article.save()
          request.flash('success', `${request.body.title} has been updated`)
          result.redirect('back')
        }
        else
        {
          request.flash('error', 'That article does not exist')
          result.redirect('hotel/news')
        }
      })
      .catch (error => {
        result.render('errors/500')
      })
  }

  static delete (request, result)
  {
    Articles.where('id', request.params.id).fetch()
      .then (article => {
        if (article)
        {
          Articles.where('id', request.params.id).destroy()
          request.flash('success', 'The article has been deleted')
          result.redirect('/hotel/news')
        }
        else
        {
          request.flash('error', 'That article does not exist')
          result.redirect('/hotel/news')
        }
      })
  }

}
module.exports = News
