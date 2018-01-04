import Async from 'async'
import Articles from './news'
import Moment from 'moment'
import Database from '../../system'

export default class Category extends Database.Model
{

  get tableName ()
  {
    return 'cms_categories'
  }

  articles ()
  {
    return this.hasMany(Articles, 'category')
  }

  static retrieve (id)
  {
    return new Promise ((r, e) => {
      if (id)
      {
        Category.where('id', id).fetch({ withRelated : ['articles'] })
          .then (c => {
            r(c.toJSON())
          })
          .catch (er => {
            e(er)
          })
      }
      else
      {
        Category.fetchAll({ withRelated : ['articles'] })
          .then (c => {
            r(c.toJSON())
          })
          .catch (er => {
            e(er)
          })
      }
    })
  }

  static retrieveOrCreate (title)
  {
    return new Promise ((r, e) => {
      Category.where('title', title).fetch()
        .then (c => {
          if (c)
          {
            r(c.toJSON())
          }
          else
          {
            Async.waterfall([
              // Create
              function (cb)
              {
                new Category({ title: title }).save()
                  .then (c => {
                    cb(null)
                  })
                  .catch (er => {
                    cb(er)
                  })
              },
              // Fetch With ID
              function (cb)
              {
                Category.where('title', title).fetch()
                  .then (c => {
                    cb(null, c.toJSON())
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
                console.log(errors)
                e(errors)
              }
            }))
          }
        })
    })
  }

  static create (data)
  {
    return new Promise ((r ,e ) => {
      new Category(data).save()
        .then (g => {
          r(g.toJSON())
        })
        .catch (er => {
          e(er)
        })
    })
  }

  static update (data)
  {
    return new Promise ((r, e) => {
      new Category(data).save()
      .then (g => {
        r()
      })
      .catch (er => {
        e(er)
      })
    })
  }

  static delete (id)
  {
    return new Promise ((r, e) => {
      Category.where('id', id).fetch()
        .then (c => {
          if (c)
          {
            Async.parallel([
              // Remove Articles
              function (cb)
              {
                Articles.where('category', id).destroy()
                  .then (a => {
                    cb(null)
                  })
                  .catch (er => {
                    cb(er)
                  })
              },
              // Remove Category
              function (cb)
              {
                Category.where('id', id).destroy()
                  .then (g => {
                    cb(null)
                  })
                  .catch (er => {
                    cb(er)
                  })
              }
            ], ((errors, results) => {
              if (!errors)
              {
                r()
              }
              else
              {
                e(errors)
              }
            }))
          }
          else
          {
            r()
          }
        })
        .catch (er => {
          e(er)
        })
    })
  }


}
