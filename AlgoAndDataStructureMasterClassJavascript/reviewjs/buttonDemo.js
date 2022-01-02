// const btn = document.querySelector('button')

// btn.addEventListener('mouseover', function() {
//     console.log('moused over');
//     btn.style.left ="200px";
// })

const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	console.log('MOUSED OVER ME!');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
	// btn.style.left ="200px";
});

btn.addEventListener('click', function() {
	btn.innerText = 'YOU GOT ME!';
	// document.body.style.backgroundColor = 'green';
	btn.style.color = 'green';
});