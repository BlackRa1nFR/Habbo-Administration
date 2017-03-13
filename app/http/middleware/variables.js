'use strict';

class Variables
{

    constructor (Website)
    {
        Website.use(this.apply);
    }

    apply (request, result, next)
    {
        result.locals.success = null;
        result.locals.error   = null;
        next();
    }
}
module.exports = Variables;