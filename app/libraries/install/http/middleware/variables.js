
class Variables
{

    constructor (Website)
    {
        Website.use(Variables.apply)
    }

    static apply (request, result, next)
    {
        result.locals.success  = request.flash('success')
        result.locals.error    = request.flash('error')
        next()
    }
}
module.exports = Variables
