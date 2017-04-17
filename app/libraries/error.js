
import chalk from 'chalk'
import Moment from 'moment'
import Application from '../../application'
import Errors from '../database/models/admin/errors'

class Error
{

    constructor (type, error)
    {
        if (error != null)
        {
          if (typeof error != 'string')
            {
              error.forEach ((err) => {
                Error.draw(err)
                Error.write(err)
              })
            }
            else
            {
              Error.draw(error)
              Error.write(error)
            }
        }
        if (type == 'fatal')
        {
            Application.crash()
        }

    }

    static draw (error)
    {
        console.log(chalk.bold.red('        [ Error ] ' + error ))
    }

    static write (error)
    {
      new Errors({ content : error, created_at : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss") }).save()
        .then (s => {

        })
        .catch (e => {
          Error.draw(error)
        })
    }

}

module.exports = Error
