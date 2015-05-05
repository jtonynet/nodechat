module.exports = function (app) {
	var ChatController = {
		index: function (req, res) {
			var appDomain = process.env.PORT ? 'https://nodechat-jtonynet.c9.io:' : 'http://localhost:3000';
			
			var result = {email: req.params.email,
			              user: req.session.user,
						  appdomain: appDomain
			};

			res.render('chat/index', result);
		}
	};

	return ChatController;
};