
import SQL from 'node-mysql-importer'
import Config from '../../../../conf/database'

class Queries
{

    constructor (Website)
    {
        Website.get('/install/queries', Queries.view)
        Website.get('/install/queries/run', Queries.run)
    }

    static view (request, result)
    {
        result.render('queries')
    }

    static run (request, result)
    {
        SQL.config({
            host : Config.connection.host,
            user : Config.connection.user,
            password : Config.connection.password,
            database : Config.connection.database
        })

        SQL.importSQL(home + '/app/libraries/install/database/xhabbo.sql')
            .then (() => {
                result.redirect('/install/settings')
            })
            .catch ((err) => {
                console.log(err)
                result.send('Something went wrong')
            })
    }

}
module.exports = Queries
