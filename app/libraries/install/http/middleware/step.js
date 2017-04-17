
class Step
{

    constructor (Website)
    {
        //Website.use(Step.apply)
    }



    static apply (request, result, next)
    {

        if (request.session.step == request.path)
        {
            result.send('yay')
        }
        else
        {
            result.send(request.session.step)
        }

    }


}
module.exports = Step
