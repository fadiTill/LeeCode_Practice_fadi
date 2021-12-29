const firstP =  document.querySelector('p');
console.log(firstP)
const newHi = document.createElement('li')
console.log(newHi)
newHi.innerText += 'hi'
 firstP.prepend(newHi)

 const buttonTest = document.querySelector('#clicker')
 
//  buttonTest.onClick = alert('hi')

buttonTest.onclick = function(){
    console.log('yay' )
}

buttonTest.ondblclick = function(){
    console.log("clicked me Twice ")
}



const btn = document.querySelector('button')

btn.addEventListener('click',function(){
    alert("cliked button 1 ")
})

btn.addEventListener('click', function(){
    console.log('second Event')
})

btn.addEventListener('mouseover', function(){
    btn.innerText = "changed"
})

btn.addEventListener('mouseout', function(){
    btn.innerText = 'click button 1'
})

window.addEventListener('scroll', function(){
    console.log('scrolled')
})