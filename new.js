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
}
];

let b = a.map((item) => {
	return Object.assign(item, { twice: (item.id * 2) });
});    

let c= a.filter((item) => {
	return (item.name === 'Cleveland');
});

console.log("before: ", JSON.stringify(a, null, 4));
console.log("after: ", JSON.stringify(b, null, 4));
console.log("Avons: ", JSON.stringify(c, null, 4));