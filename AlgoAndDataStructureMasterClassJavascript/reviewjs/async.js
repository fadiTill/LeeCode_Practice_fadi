
async function greet() {
	return 'HELLO!!!'; 
}
greet().then((val) => {
	console.log('PROMISE RESOLVED WITH: ', val);
});

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers!';
	}
	return x + y;
}


add(6, 7)
	.then((val) => {
		console.log('PROMISE RESOLVED WITH: ', val);
	})
	.catch((err) => {
		console.log('PROMISE REJECTED WITH: ', err);
	});