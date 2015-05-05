var express      = require('express'),
    app          = express(),
    load         = require('express-load'),
    error        = require('./middleware/error'),
    server       = require('http').createServer(app),
    io           = require('socket.io').listen(server);


app.engine('ejs', require('ejs').renderFile);
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(express.cookieParser('nodebook'));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(__dirname+'/public'));

app.use(error.notFound);
app.use(error.serverError);

load('models')
	.then('controllers')
	.then('routes')
	.into(app);
load('sockets')
	.into(io);
	
server.listen(3000, function() {
	console.log('Ntalk no ar');
});