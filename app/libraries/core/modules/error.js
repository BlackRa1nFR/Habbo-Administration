import Moment from 'moment'
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
      created_at : Moment().format("YYYY-MM-DD HH:mm:ss")
    }).save()


    if (type === 'fatal') errorMode = true
    result.render('common/errors/fatal')
  }

  static toss (req, res)
  {
    res.render('common/errors/404')
  }

}
