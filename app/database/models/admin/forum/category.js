
import Posts from './posts'
import Database from  '../../../server'

class Category extends Database.Model
{

    get tableName ()
    {
        return 'admin_forum_categories'
    }

    latest ()
    {
        return this.hasMany(Posts, 'category_id').query((qb) => { qb.where('parent_id', null).limit(4) })
    }


}

export default Category
