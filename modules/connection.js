var mysql = require(`mysql`);
var connection = mysql.createConnetion({
	host : `localhost`,
	user : `root`,
	password : ``,
	database : ``
})
connection.connect(function (err){
	if(err){
		var error = {
			status : 0,
			message : "Database not working"
		}
		res.send(eror)
	} else {
		console.log("Database is WOrking ")
	}
});
module.exports = connection