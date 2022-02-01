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

const addItemInput = document.querySelector("#addItem")
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    // console.log(e)
    if(e.key === 'Enter'){
    //   console.log(this.value)

    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;

    }
   
})