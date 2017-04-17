class Todo
{

  constructor (Website)
  {
    Website.get('/todo', Todo.get)
  }

  static get (request, result)
  {
    result.render('user/admin/home/todo', {
      page : 'Development Tasks'
    })
  }

}
module.exports = Todo
