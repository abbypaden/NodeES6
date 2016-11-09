let express = require('express');
let app = express();
const port = Number(process.env.PORT || 3000);
var idx = {index: 0 }
var str = { str1: "Hello", str2: "World" };
var num = { num1: 4, num2: 5 };


var myArray = Object.assign(idx, str, num);     

app.get('/numbers', (req, res) => {
	res.json(myArray);
});

app.post('/numbers', (req, res) => {
	res.send(myArray);
});

app.listen(port, () => {
	console.log("Listening on port 3000...");
	console.log(idx.str1);
	console.log(idx.num2);
});

// comment for whatever