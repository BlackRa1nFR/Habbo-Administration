import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/admin/users/user'

export default class Locked
{

	constructor (http)
	{
		http.get('/admin/accounts/locked', Locked.get)
		http.post('/admin/account/locked/create', Locked.add)
	}

	static get (req, res)
	{
		Users.where('status', 'locked').fetchAll()
			.then (u => {
				res.render('session/user/admin/accounts/users/locked', {
					accounts : u.toJSON()
				})
			})
			.catch (e => {
				new Error('Admin - Locked Users',e, req, res, 'normal')
			})
	}

	static add (req, res)
	{
		res.send('fuck off mate, im tired')
	}

}
