'use strict';

class Variables
{

    constructor (Website)
    {
        Website.use(this.apply);
    }

    apply (request, result, next)
    {
        result.locals.success = request.flash('success');
        result.locals.error   = request.flash('error');
        next();
    }
}
module.exports = Variables;