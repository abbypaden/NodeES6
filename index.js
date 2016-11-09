var express = require('express');
var app = express();
var myArray = [1,2,3,4,5,6,7,8,9,0];

app.get('/', function (req, res) {
	res.send('Hello world!');
})

app.listen(3000, function() {
	var x;
	var arrayOut;
	for (x in myArray){
		arrayOut += myArray[x];		
		console.log(x);
	}
	console.log("myArray values heard on port 3000!");
	
})