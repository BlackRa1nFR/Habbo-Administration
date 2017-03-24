'use strict';

import Error from '../../../../../libraries/error';
import Posts from '../../../../../database/models/admin/forum/posts';

class Post
{

    constructor (Website)
    {
        Website.get('/admin/forums/post/:id', Post.view);
    }

    static view (request, result)
    {
        Posts.forge().where('id', request.params.id).fetch()
            .then ((results) => {
                results = results.toJSON();
                result.render('user/admin/forums/post', {
                    page    : `Viewing Post ${results.title}`,
                    post    : results
                })
            })
            .catch ((error) => {
                new Error('normal', error);
                result.render('errors/500');
            });
    }

}
module.exports = Post
