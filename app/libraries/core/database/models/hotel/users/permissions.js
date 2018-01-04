import User from './ranks/user'
import Mod from './ranks/moderator'
import Dev from './ranks/developer'
import Async from 'async'
import Users from './user'
import Database from '../../../system'

export default class Groups extends Database.Model
{

  get tableName ()
  {
    return 'permissions'
  }

  members ()
  {
    return this.hasMany(Users, 'rank')
  }


  static retrieve(id)
  {
    return new Promise ((r, e) => {
      if (id)
      {
        if (id == 1)
        {
          Groups.where('id', id).fetch({ columns : ['id', 'rank_name', 'staff', 'hidden', 'badge_code', 'prefix', 'prefix_color', 'permission']})
          .then (g => {
            r(g.toJSON())
          })
          .catch (er => {
            e(er)
          })
        }
        else
        {
          Groups.where('id', id).fetch({ columns : ['id', 'rank_name', 'staff', 'hidden', 'badge_code', 'prefix', 'prefix_color', 'permission'], withRelated : ['members'] })
          .then (g => {
            r(g.toJSON())
          })
          .catch (er => {
            e(er)
          })
        }
      }
      else
      {
        Groups.fetchAll({ columns : ['id', 'rank_name', 'staff', 'hidden', 'badge_code'], withRelated : ['members'] })
          .then (g => {
            r(g.toJSON())
          })
          .catch (er => {
            r(er)
          })
      }
    })
  }

  static create (data)
  {
    return new Promise ((r, e) => {
      Async.waterfall([
        // Create
        function (cb)
        {
          Groups.forge().save(data)
            .then (g => {
              cb(null)
            })
            .catch (er => {
              cb(er)
            })
        },
        // Get ID
        function (cb)
        {
          Groups.query('orderBy', 'id', 'DESC').fetch()
            .then (g => {
              cb(null, g.toJSON().id)
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

  static update (data)
  {
    return new Promise ((r, e) => {
      Groups.where('id', data.id).fetch()
        .then (g => {
          if (g)
          {
            if (data.permission)
            {
              switch (data.permission)
              {
                case 'user':
                  new Groups(data).save(User)
                  .then (g => {
                    r()
                  })
                  .catch (er => {
                    e(er)
                  })
                break;
                case 'moderator':
                  new Groups(data).save(Mod)
                  .then (g => {
                    r()
                  })
                  .catch (er => {
                    e(er)
                  })
                break;
                case 'developer':
                  new Groups(data).save(Dev)
                  .then (g => {
                    r()
                  })
                  .catch (er => {
                    e(er)
                  })
                break;
              }
            }
            else
            {
              new Groups(data).save()
              .then (g => {
                r()
              })
              .catch (er => {
                e(er)
              })
            }
          }
          else
          {
            r(null)
          }
        })
    })
  }

  static delete (id)
  {
    return new Promise ((r, e) => {
      Groups.where('id', id).fetch()
        .then (g => {
          if (g)
          {
            Async.series([
              // Delete Group
              function (cb)
              {
                Groups.where('id', id).destroy()
                  .then (g => {
                    cb(null)
                  })
                  .catch (er => {
                    cb(er)
                  })
              },
              // Remove Members
              function (cb)
              {
                Users.where('rank', id).fetch()
                  .then (u => {
                    if (u)
                    {
                      Users.where('rank', id).save({ rank : 1}, { method : 'updatee'})
                        .then (u => {
                          cb(null)
                        })
                        .catch (er => {
                          cb(er)
                        })
                      }
                      else
                      {
                        cb(null)
                      }
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

  static manageTeam (username, action, id)
  {
    return new Promise ((r, e) => {
      switch (action)
      {
        case 'add':
          Users.where('username', username).save({ rank : id }, { method : 'update' })
            .then (u => {
              r()
            })
            .catch (er => {
              e(er)
            })
        break;
        case 'remove':
          Users.where('username', username).save({ rank : 1 }, { method : 'update' })
            .then (u => {
              r()
            })
            .catch (er => {
              e(er)
            })
        break;
      }
    })
  }


}
