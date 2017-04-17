
import File from 'fs'
import Hash from 'bcrypt-nodejs'
import Users from '../../../../database/models/admin/users/user'
import Players from '../../../../database/models/emu/users/users'

class User
{

    constructor (Website)
    {
        Website.get('/install/user', User.view)
        Website.post('/install/user', User.run)
    }

    static view (request, result)
    {
        result.render('user')
    }

    static run (request, result)
    {
        Players.forge().where('username', request.body.user_id).fetch()
            .then ((player) => {
                if (player)
                {
                    Users.forge().where('id', 1).fetch()
                        .then ((results) => {
                            results.set('username', request.body.username)
                            results.set('password', Hash.hashSync(request.body.password))
                            results.set('user_id', player.toJSON().id)
                            results.save()

                            File.writeFile(home + '/app/conf/installation.json', '{ "completed" : true }', 'utf8',((err) => {
                                if (err)
                                {
                                    console.log(err)
                                    result.send('Something broke')
                                }
                                else
                                {
                                    result.send('Server is going to restart.')
                                    process.exit('Install finished')
                                }
                            }))

                        })
                        .catch ((error) => {
                            console.log(error)
                            result.send('Something went wrong')
                        })
                  }
                  else
                  {
                      request.flash('error', 'That user does not exist!')
                      result.redirect('back')
                  }
              })
              .catch ((error) => {
                  console.log(error)
                  result.send('Something went wrong')
              })
    }

}
module.exports = User
