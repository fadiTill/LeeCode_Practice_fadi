// fetch('https://swapi.co/api/planetsuy21/')
// 	.then((response) => {
// 		if (!response.ok)
// 			throw new Error(`Status Code Error: ${response.status}`);

// 		response.json().then((data) => {
// 			for (let planet of data.results) {
// 				console.log(planet.name);
// 			}
// 		});
// 	})
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});






	// fetch('https://swapi.co/api/planets/')
	// .then((response) => {
	// 	if (!response.ok)
	// 		throw new Error(`Status Code Error: ${response.status}`);

	// 	return response.json();
	// })
	// .then((data) => {
	// 	console.log('FETCHED ALL PLANETS (first 10)');
	// 	const filmURL = data.results[0].films[0];
	// 	return fetch(filmURL);
	// })
	// .then((response) => {
	// 	if (!response.ok)
	// 		throw new Error(`Status Code Error: ${response.status}`);

	// 	return response.json();
	// })
	// .then((data) => {
	// 	console.log('FETCHED FIRST FILM, based off of first planet');
	// 	console.log(data.title);
	// })
	// .catch((err) => {
	// 	console.log('SOMETHING WENT WRONG WITH FETCH!');
	// 	console.log(err);
	// });


	const checkStatusAndParse = (response) => {
		if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
	
		return response.json();
	};
	
	const printPlanets = (data) => {
		console.log('Loaded 10 more planets...');
		for (let planet of data.results) {
			console.log(planet.name);
		}
		return Promise.resolve(data.next);
	};
	
	const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
		return fetch(url);
	};
	
	fetchNextPlanets()
		.then(checkStatusAndParse)
		.then(printPlanets)
		.then(fetchNextPlanets)
		.then(checkStatusAndParse)
		.then(printPlanets)
		.then(fetchNextPlanets)
		.then(checkStatusAndParse)
		.then(printPlanets)
		.catch((err) => {
			console.log('SOMETHING WENT WRONG WITH FETCH!');
			console.log(err);
		});