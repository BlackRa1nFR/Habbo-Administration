import Errors from '../database/models/admin/errors'
export default class Error
{

  constructor (title, content, request, result, type)
  {

    Errors.forge({
      title : title,
      content : `${content}`,
      user : request.session.auth.user,
      url_accessed : request.path,
      type : type, 
    }).save()


    if (type === 'fatal') errorMode = true
    result.render('common/errors/fatal')
  }

}
