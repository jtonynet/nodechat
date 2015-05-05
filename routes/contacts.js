module.exports = function(app) {
	var authenticate  = require('./../middleware/authenticate'), 
	         contacts = app.controllers.contacts;

	app.get('/contatos', authenticate, contacts.index);
	app.get('/contatos/:id', authenticate, contacts.show);
	app.get('/contatos/:id/editar', authenticate, contacts.edit);

	app.post('/contatos', authenticate, contacts.create);
	app.put('/contatos/:id', authenticate, contacts.update);
	app.del('/contatos/:id', authenticate, contacts.destroy);	
}