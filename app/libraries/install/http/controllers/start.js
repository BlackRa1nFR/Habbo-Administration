class Start
{

    constructor (Website)
    {
        Website.get('/start', Start.view)
    }

    static view (request, result)
    {
        result.render('start')
    }

}
module.exports = Start
