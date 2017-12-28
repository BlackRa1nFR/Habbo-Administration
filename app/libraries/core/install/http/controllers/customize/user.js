import File from 'fs'
import Users from '../../../../database/models/admin/users/user'
export default class User {
  constructor (http) {
    http.get('/user/setup', User.render)
    http.post('/user/setup', User.save)
  }

  static render (req, res) {
    res.render('customize/user')
  }

  static save (req, res) {
    Users.forge({username: req.body.user, password: req.body.pass}).save()
      .then(r => {
        File.writeFile(`${homeDirectory}/app/config/install.json`, JSON.stringify('{}'), e => {
          res.render('complete')
          process.exit()
        })
      })
      .catch(e => {
        res.render('errors/user-failed')
      })
  }
}
