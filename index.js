let express = require('express');
let app = express();
let myArray = [1,2,3,4,5,6,7,8,9,0];

app.get('/numbers', (req, res) => {
	res.json(myArray);
});

app.listen(3000, () => {
	console.log("Listening on port 3000...");
});