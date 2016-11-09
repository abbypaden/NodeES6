let express = require('express');
let app = express();

var idx = {index: 0 }
var str = { str1: "Hello", str2: "World" };
var num = { num1: 98, num2: 13 };

// comment to force push
var myArray = Object.assign(idx, str, num);     

app.get('/numbers', (req, res) => {
	res.json(myArray);
});

app.listen(3000, () => {
	console.log("Listening on port 3000...");
	console.log(idx.str1);
	console.log(idx.num2);
});