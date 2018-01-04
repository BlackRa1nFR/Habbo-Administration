import Database from '../../../system'

export default class Session extends Database.Model {
  get tableName () {
    return 'xhabbo_sessions'
  }

  static addNew (user, ip) {
    return new Promise((r, e) => {
      this.forge({user: user.id}).save()
          .then(res => {
            res = res.toJSON()
            res = {
              id: res.id,
              user: res.user,
              ip: ip,
              status: 'active',
              data: user
            }
            r(res)
          })
          .catch(er => {
            console.log(er)
            e('Something happened')
          })
    })
  }
}
