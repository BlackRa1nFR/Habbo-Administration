
import Error from '../../../../../libraries/error'
import Posts from '../../../../../database/models/admin/forum/posts'

class Post
{

    constructor (Website)
    {
        Website.get('/admin/forums/post/:id', Post.view)
        Website.post('/admin/forums.post/actions/reply', Post.reply)
        Website.get('/admin/forums/post/actions/like/:id', Post.like)
    }

    static view (request, result)
    {
        Posts.forge().where('id', request.params.id).fetch({ withRelated : ['author', 'author.group', 'author.habbo', 'replies', 'replies.author', 'replies.author.group', 'replies.author.habbo'] })
            .then ((results) => {
                results = results.toJSON()
                result.render('user/admin/forums/post', {
                    page    : `Viewing Post ${results.title}`,
                    post    : results
                })
            })
            .catch ((error) => {
                new Error('normal', error)
                result.render('errors/500')
            })
    }

    static reply (request, result)
    {

    }

    static like (request, result)
    {
        new Likes({ user_id : request.user.user.id, post_id : post.body.id }).save()
          .then ((results) => {
            request.flash('success', 'You have liked this post!')
            result.redirect('back')
          })
          .catch ((error) => {
            new Error('normal', error)
            result.render('errors/500')
          })
    }

}
module.exports = Post
