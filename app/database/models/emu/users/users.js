
import Async from 'async'
import Info from './info'
import Stats from './stats'
import Moment from 'moment'
import Badges from './badges'
import Quests from './quests'
import Effects from './effects'
import Visits from './roomvisits'
import Clothing from './clothing'
import Searches from './searches'
import Wardrobe from './wardrobe'
import Favorites from './favorites'
import Group from '../permissions/group'
import Database from  '../../../server'
import Articles from '../../cms/articles'
import Achievements from './achievements'
import Relationships from './relationships'
import Error from '../../../../libraries/error'

class Users extends Database.Model
{

    get tableName ()
    {
        return 'users'
    }

    rank ()
    {
      return this.hasOne(Group, 'id', 'rank')
    }

    duplicates ()
    {
      return this.hasMany(Users, 'ip_last', 'ip_last').query(qb => { qb.where('ip_last', '!=', '127.0.0.1') })
    }

    badges ()
    {
      return this.hasMany(Badges)
    }

    articles ()
    {
      return this.hasMany(Articles, 'author')
    }

    toJSON ()
    {
      const values            = Database.Model.prototype.toJSON.apply(this);
      values.account_created  = Moment.unix(values.account_created).format("MMM D, YYYY");

      if (values.last_online == '0')
      {
        values.last_online    = 'Never';
      }
      else {
        values.last_online     = Moment.unix(values.last_online).format("MMM D, YYYY");
      }
      return values;
    }

    static delete (id, username)
    {
      Async.parallel([
        // Self
        function (callback) {
          Users.where('id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Achievements
        function (callback) {
          Achievements.where('userid', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Badges
        function (callback) {
          Badges.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Clothing
        function (callback) {
          Clothing.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Effects
        function (callback) {
          Effects.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Favorites
        function (callback) {
          Favorites.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Info
        function (callback) {
          Info.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Quests
        function (callback) {
          Quests.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Relationships
        function (callback) {
          Relationships.where('user_id', id).destroy()
            .then (s => {
              Relationships.where('target', id).destroy()
                .then (s => {
                  callback(null)
                })
                .catch (e => {
                  callback(e)
                })
            })
            .catch (e => {
              callback(e)
            })
        },
        // Room Visits
        function (callback) {
          Visits.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Stats
        function (callback) {
          Stats.where('id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Wardrobe
        function (callback) {
          Wardrobe.where('user_id', id).destroy()
            .then (s => {
              callback(null)
            })
            .catch (e => {
              callback(e)
            })
        },
      ], ((errors, results) => {
        if (errors)
        {
          new Error('normal', errors)
        }
      }))
    }


}

export default Users
