import Async from 'async'
import Moment from 'moment'
import Category from './category'
import Database from '../../system'
import Users from '../hotel/users/user'

export default class News extends Database.Model
{

  get tableName ()
  {
    return 'cms_news'
  }

  author ()
  {
    return this.belongsTo(Users, 'author')
  }

  category ()
  {
    return this.belongsTo(Category)
  }

  toJSON ()
  {
    const values = Database.Model.prototype.toJSON.apply(this)
    values.created_at = Moment(values.created_at).fromNow()
    return values
  }

  static retrieve (id)
  {
    return new Promise ((r, e) => {
      if (id)
      {
        News.where('id', id).fetch({ withRelated : ['author'] })
          .then (n => {
            r(n.toJSON())
          })
          .catch (er => {
            e(er)
          })
      }
      else
      {
        News.fetchAll({ withRelated : ['author'] })
          .then (n => {
            r(n.toJSON())
          })
          .catch (er => {
            cb(er)
          })
      }
    })
  }

  static create (data)
  {
    return new Promise ((r, e) => {
      Async.waterfall([
        // Get Author ID
        function (cb)
        {
          Users.retrieve(data.author, 'username')
            .then (u => {
              if (u)
              {
                data.author = u.id
                cb(null, data)
              }
              else
              {
                data.author = 1
                cb(null, data)
              }
            })
            .catch (e => {
              cb(e)
            })
        },
        // Get Category ID
        function (data, cb)
        {
          Category.retrieveOrCreate(data.category)
            .then (c => {
              data.category = c.id
              cb(null, data)
            })
            .catch (e => {
              cb(e)
            })
        },
        // Create
        function (data, cb)
        {
          data.image = data.image.split('/')[data.image.match(/\//ig).length].replace('.png', '').replace('_thumb', '')
          News.forge().save(data)
            .then (n => {
              cb(null)
            })
            .catch (er => {
              cb(e)
            })
        },
        // Return with ID
        function (cb)
        {
          News.query('orderBy', 'id', 'DESC').fetch()
            .then (n => {
              cb(null, n.toJSON().id)
            })
            .catch (er => {
              cb(e)
            })
        }
      ], ((errors, results) => {
        if (!errors)
        {
          r(results)
        }
        else
        {
          e(errors)
        }
      }))
    })
  }

  static update (data)
  {
    return new Promise ((r, e) => {
      Async.waterfall([
        // Get Author ID
        function (cb)
        {
          if (data.author != undefined)
          {
            Users.retrieve(data.author, 'username')
              .then (u => {
                if (u)
                {
                  data.author = u.id
                  cb(null, data)
                }
                else
                {
                  data.author = 1
                  cb(null, data)
                }
              })
              .catch (e => {
                cb(e)
              })
          }
          else
          {
            cb(null, data)
          }
        },
        // Create
        function (data, cb)
        {
          News.where('id', data.id).fetch()
            .then (n => {
              if (n)
              {
                News.where('id', data.id).save(data, { method : 'update' })
                  .then (n => {
                    cb(null)
                  })
                  .catch (er => {
                    cb(er)
                  })
              }
            })
            .catch (er => {
              cb(er)
            })
        }
      ], ((errors, results) => {
        if (!errors)
        {
          r(results)
        }
        else
        {
          e(errors)
        }
      }))
    })
  }

  static delete (id)
  {
    return new Promise ((r, e) => {
      News.where('id', id).fetch()
        .then (n => {
          if (n)
          {
            News.where('id', id).destroy()
              .then (n => {
                r()
              })
              .catch (er => {
                e(er)
              })
          }
        })
        .catch (er => {
          e(er)
        })
    })
  }

}
