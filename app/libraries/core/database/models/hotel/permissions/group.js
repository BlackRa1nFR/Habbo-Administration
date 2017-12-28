import Users from '../users/user'
import Database from '../../../system'

export default class Groups extends Database.Model {
  get tableName () {
    return 'permissions_groups'
  }

  members () {
    return this.hasMany(Users, 'rank')
  }
}
