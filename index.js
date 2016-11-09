var express = require('express');
var app = express();
var myArray = [1,2,3,4,5,6,7,8,9,0];

app.get('/numbers', function (req, res) {
	res.json(myArray);
})

app.listen(3000, function() {
	console.log("Listening on port 3000...");
})