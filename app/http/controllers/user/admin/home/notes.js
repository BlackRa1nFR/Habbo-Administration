import Note from '../../../../../database/models/admin/users/notes'

class Notes
{

  constructor (Website)
  {
    Website.get('/notes', Notes.read)
    Website.post('/notes/create', Notes.create)
  }

  static read (request, result)
  {
    result.render('user/admin/home/notes', {
      page  : 'My Notes',
      notes : request.user.user.notes
    })
  }

  static create (request, result)
  {
    new Note({ title : request.body.title, content : request.body.content, user_id : request.user.user.id }).save()
      .then (note => {
        request.flash('success', `${request.body.title} has been added to your notes`)
        result.redirect('back')
      })
  }


}
module.exports = Notes
