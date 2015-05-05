module.exports = function (app) {
	var ChatController = {
		index: function (req, res) {
			var result = {email: req.params.email,
			              user: req.session.user};

			res.render('chat/index', result);
		}
	};

	return ChatController;
};