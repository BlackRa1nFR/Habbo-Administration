
import HTTP from './http/server'
import Status from '../../conf/installation.json'

class Install
{

    constructor ()
    {
        if (!Status.completed)
        {
            new HTTP
        }
        else
        {
            this.completed = true
        }
    }

}

module.exports = Install
