import Error from '../../../../modules/error'
import Categories from '../../../../database/models/cms/category'

export default class Category
{

  constructor (http)
  {
    http.get('/cms/category', Category.table)
    http.get('/cms/category/create', Category.getCreate)
    http.post('/cms/category/create', Category.create)
    http.get('/cms/category/edit/:id', Category.view)
    http.post('/cms/category/edit/:id', Category.update)
    http.get('/cms/category/delete/:id', Category.delete)
  }


  static table (req, res)
  {
    Categories.retrieve()
      .then (c => {
        res.render('session/user/cms/category/table', {
          categories : c
        })
      })
      .catch (e => {
        new Error('Hotel - News Categories', e, req, res, 'normal')
      })
  }

  static getCreate (req, res)
  {
    res.render('session/user/cms/category/create')
  }

  static create (req, res)
  {
    Categories.create(req.body)
      .then (c => {
        res.redirect(`/cms/category/edit/${c.id}`)
      })
      .catch (e => {
        new Error('Hotel - News Categories', e, req, res, 'normal')
      })
  }

  static view (req, res)
  {
    Categories.retrieve(req.params.id)
      .then (c => {
        if (c)
        {
          res.render('session/user/cms/category/edit', {
            category : c
          })
        }
        else
        {
          req.flash('error', 'That category does not exist')
          res.redirect('/cms/category')
        }
      })
  }

  static update (req, res)
  {
    Categories.update(req.body)
      .then (c => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('Hotel - News Categories', e, req, res, 'normal')
      })
  }

  static delete (req, res)
  {
    if (req.params.id != 1)
    {
      Categories.delete(req.params.id)
        .then (c => {
          res.redirect('/cms/category')
        })
        .catch (e => {
          new Error('Hotel - News Categories', e, req, res, 'normal')
        })
    }
    else
    {
      req.flash('error', 'You cannot delete the first category!')
      res.redirect('/cms/category')
    }
  }

}
