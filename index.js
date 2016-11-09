let express = require('express');
let app = express();
let router = express.Router();
const port = Number(process.env.PORT || 3000);

let a = [
	{
		id: 1,
		name: "Indianapolis"
	},
	{
		id: 2,
		name: "Bloomington"
	},
	{
		id: 3,
		name: "Cleveland"
	},
	{
		id: 4,
		name: "New York"
	}
];

let b = a.map((item) => {
	return Object.assign(item, { twice: (item.id * 2) });
});    

app.get('/numbers', (req, res) => {
	res.json(a);
});

app.get('/data', (req, res) => {
	res.json(document.cookie("This is a cookie!"));
});

router.get('/data', (req, res, next) => {
	if (req.params.cookie === "This is a cookie!") {
		res.render('cookie found');
	}
});

app.listen(port, router => {
	console.log('listening...');
});

app.use('/data', router);
