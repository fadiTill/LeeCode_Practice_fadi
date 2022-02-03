
async function getPlanets() {
	const res = await axios.get('https://swapi.co/api/planets/');
	console.log(res.data); //only runs once the previous line is complete (the axios promise is resolved)
}


async function getPlanets() {
	try {
		const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
		console.log(res.data);
	} catch (e) {
		console.log('IN CATCH!', e);
	}
}
getPlanets();