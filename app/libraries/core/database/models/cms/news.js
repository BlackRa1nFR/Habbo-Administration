import User from '../hotel/users/user'
import Database from '../../system'

export default class News extends Database.Model {
  get tableName () {
    return 'cms_news'
  }

  author () {
    return this.belongsTo(User, 'author')
  }

  toJSON () {
    const values = Database.Model.prototype.toJSON.apply(this)
    return values
  }
}
