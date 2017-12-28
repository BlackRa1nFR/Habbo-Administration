import Users from '../users/user'
import Database from '../../../system'

export default class Subscriptions extends Database.Model {
  get tableName () {
    return 'subscriptions'
  }

  members () {
    return this.hasMany(Users, 'rank_vip')
  }
}
