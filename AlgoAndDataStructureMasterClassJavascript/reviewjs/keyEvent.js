const input = document.querySelector('#nickname');

input.addEventListener('keydown', function(e){
console.log('keydown')
});


input.addEventListener('keyup', function(e){
console.log('keyup')
});

input.addEventListener('keypress',function(e){
  console.log('key press')  
});