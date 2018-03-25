var express = require(`express`);
var path = require(`path`);
var bodyParser = require(`body-parser`);
var app = express();
var port = process.env.port || 3004;

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'view')));

app.listen(port, function(){
	console.log("SERVER IS RUNNING ON PORT "+port);
});