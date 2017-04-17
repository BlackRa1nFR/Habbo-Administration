import Database from  '../../../server'

class Badges extends Database.Model
{

  get tableName ()
  {
    return 'user_badges'
  }


}
export default Badges
