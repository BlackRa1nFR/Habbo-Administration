
import Moment from 'moment'
import User from '../users/user'
import Database from  '../../../server'

class Posts extends Database.Model
{

    get tableName ()
    {
        return 'admin_forum_posts'
    }

    author ()
    {
      return this.belongsTo(User, 'user_id')
    }

    replies ()
    {
      return this.hasMany(Posts, 'parent_id')
    }


    toJSON ()
    {
      let values = Database.Model.prototype.toJSON.apply(this)
      values.created_at_fromNow = Moment(values.created_at).fromNow()
      return values
    }



}

export default Posts
