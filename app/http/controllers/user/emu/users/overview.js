class Overview
{

  constructor (Website)
  {
    Website.get('/emu/users/overview', Overview.get)
  }

  static get (request, result)
  {
    result.render('user/emu/users/overview', {
      page : 'User Overview'
    })
  }

}
module.exports = Overview
