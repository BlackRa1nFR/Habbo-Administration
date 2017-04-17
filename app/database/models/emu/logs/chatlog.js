import Database from '../../../server'

class Chatlog extends Database.Model
{

  get tableName ()
  {
    return 'chatlogs'
  }

}
export default Chatlog
