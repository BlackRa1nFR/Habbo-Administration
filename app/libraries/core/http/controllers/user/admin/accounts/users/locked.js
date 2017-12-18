import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/admin/users/user'

export default class Locked
{

	constructor (http)
	{
		http.get('/admin/accounts/locked', Locked.get)
		http.post('/admin/accounts/locked', Locked.add)
	}

	static get (req, res)
	{
		Users.where('status', 'account_locked').fetchAll({ withRelated : ['group'] })
			.then (u => {
				res.render('session/user/admin/accounts/users/locked', {
					accounts : u.toJSON()
				})
			})
			.catch (e => {
				new Error('Admin - Viewing Locked Users',e, req, res, 'normal')
			})
	}

	static add (req, res)
	{
		Users.where('username', req.body.username).save({ status : 'account_locked' }, { method : 'update' })
			.then (u => {
				res.redirect('back')
			})
			.catch (e => {
				new Error('Admin - Add Locked User',e, req, res, 'normal')
			})
	}

}
