var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');
var dbcon = require('./routes/db');
var watch = require('./routes/watch');

//var WebSocketServer = require('ws').Server;
//var html = require('./html');
var indexy = require('./routes/index');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
var server = http.createServer(app);
var io = require('socket.io').listen(server,{log:false});
/******for heroku only*****/
//Set the sockets.io configuration.
//THIS IS NECESSARY ONLY FOR HEROKU!
io.configure(function() {
  io.set('transports', ['xhr-polling']);
  io.set('polling duration', 10);
});
 
//If the client just connected, give them fresh data!
//If the client just connected, give them fresh data!
io.sockets.on('connection', function(socket) { 
	console.log('socket connected');
    socket.emit('data', "hello");
});
/******end here************/
//app.set('views', __dirname + '/views');
//app.set('html',__dirname+'/html');
//app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.session({ secret: "very secret" }));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.get('/', indexy.index);
//app.get('/menucategory', dbcon.getMenuCategory);
//app.get('/menucategory/:catid', dbcon.getMenuList);
app.get('/alldata', dbcon.getAllData);
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
 //var wss = new WebSocketServer({server: server});
console.log('websocket server created');
app.post('/edit',function(req, res){
	 //var name = req.body.userId, color = req.body.cardId;
	 //console.log(name +';'+color);
	 io.sockets.emit('orders', req.body);
	
	 res.send('done');
	 //wss.on('connection', function(ws) {
    
	//ws.send(JSON.stringify(new Date()),function(){

	//})
    //console.log('websocket connection open');

   /* ws.on('close', function() {
        console.log('websocket connection close');
        
    });*/
//});

})
app.get('/watch', watch.index)

