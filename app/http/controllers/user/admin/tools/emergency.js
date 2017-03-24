'use strict';



class Emergency
{

    constructor (Website)
    {
        Website.get('/admin/tools/emergency', Emergency.view);
    }

    static view (request, result)
    {
        result.render('user/admin/tools/emergency', {
            page    : 'Emergency Tools'
        });
    }


}
module.exports = Emergency;
