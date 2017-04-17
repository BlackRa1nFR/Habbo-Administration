
class Crash
{

    constructor (Website)
    {
        Website.use(Crash.apply)
    }



    static apply (request, result, next)
    {
        if (crash)
        {
            result.render('errors/4')
        }
        else
        {
            next()
        }

    }

}
module.exports = Crash
