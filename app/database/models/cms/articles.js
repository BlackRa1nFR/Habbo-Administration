import Moment from 'moment'
import Database from  '../../server'
import User from '../emu/users/users'

class Articles extends Database.Model
{

    get tableName ()
    {
        return 'cms_news'
    }

    author ()
    {
      return this.belongsTo(User, 'author')
    }

    toJSON ()
    {
      const values            = Database.Model.prototype.toJSON.apply(this);
      values.created_at       = Moment(values.created_at).format("MMMM DD, YYYY");
      return values;
    }
}

export default Articles
