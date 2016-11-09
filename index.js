let express = require('express');
let app = express();
const port = Number(process.env.PORT || 3000);
var idx = {index: 0 }
var str = { str1: "Hello", str2: "World" };
var num = { num1: 4, num2: 5 };

var myArray = Object.assign(idx.index, idx.str1, idx.num1);     

app.get('/numbers', (req, res) => {
	res.json(myArray);
});

app.post('/numbers', (req, res) => {
	res.send(myArray);
});

app.listen(port => {
	console.log('listening...');
});

// kljf;askdjf;laksdjf;alksdjf;alksdfj;asl