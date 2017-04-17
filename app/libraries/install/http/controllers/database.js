
import File from 'fs'
import SQL from 'mysql'

class Database
{

    constructor (Website)
    {
        Website.get('/install/database', Database.view)
        Website.post('/install/database/test', Database.test)
    }

    static view (request, result)
    {
        result.render('database')
    }

    static test (request, result)
    {
        const connection = SQL.createConnection({
            host : request.body.host,
            user : request.body.user,
            password : request.body.pass,
            database : request.body.name
        })

        connection.connect()

        connection.query('SELECT 1 + 1 AS solution', ((error, results, fields) => {
            if (error)
            {
                request.flash('error', 'We could not connect to the database')
                result.redirect('back')
            }
            else
            {
                Database.save(request.body.host, request.body.user, request.body.pass, request.body.name)
                request.flash('success', 'The database connection was successful')
                result.redirect('/install/queries')
            }
        }))
    }

    static save (host, user, pass, name)
    {
        const connection = {
            client      : "mysql",
            connection  : {
                host        : host,
                user        : user,
                password    : pass,
                database    : name
            },
            pools       : {
                min         : 5,
                max         : 120
            }
        }

        File.writeFile(home + '/app/conf/database.json', JSON.stringify(connection), 'utf8',((err) => {
            if (err)
            {
                console.log(err)
                process.exit()
            }
        }))
    }

}
module.exports = Database
