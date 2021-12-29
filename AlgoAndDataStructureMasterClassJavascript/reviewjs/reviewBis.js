// if(2 !== 1){
//     console.log('IT IS TRUE')
// }


// let rating = 0;
// if(rating === 3 ) {
//     console.log('you are are super start')

// }
// else if (rating === 2 ){
//     console.log("meet expectation")
// }

// else if (rating === 1 ){
//     console.log('Needs improvement');
// }

// else {
//   console.log('invalide')  
// }


// let highScore = 1430;
// let userScore = 1200;

// if(userScore >= highScore){
//     console.log(`congrats  your ${userScore}`);
//     highScore = userScore;
// }
// else{
//    console.log(
//        `your score ${userScore} did not bit ${highScore}`
//        ) 
// }

// let password = 'hellofadi';

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1) {
//         console.log('valid')
//     }
//     else {
//         console.log('Password is long but cannot contain spaces');
//     }
// }

// else {
//     console.log('password must be longer!');
// }

// let password ="chickenGal";

// if(password.length >= 8 && password.indexOf('') === -1){
//     console.log("Valid")
// } else {
//     console.log("invalid")
// }

// let num = 11;

// if(num >= 1 && num < 10){
//     console.log(`Number`)
// }
// else{
//     console.log(`please guess number between 1 and 10`)
// }

// let colors = ['RED', 'ORANGE','BLUE'];

// let  animals  = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// let swimmers = animals.slice(0,3)
// // console.log(swimmers)


// const examScores = [98, 77,84,91,57,66];

// for(let i = 0; i <= examScores.length; i++)
// // 

// let subreddits = ['a','b','c','d']

// for(let sub of  subreddits){
//     console.log(sub)

// }


// const movieReviews = {
//     Arrival : 9.5,
//     Alien   : 9,
// 'In Bruges' : 8,
//     Amadeus : 10,
// };


// for(let movie  of Object.keys(movieReviews)) {
//     console.log(movie);
// }

//  for(let movie  of Object.keys(movieReviews)) {
//          console.log( movieReviews[movie]);
//      }
    

// function isValidPassword(password, username){
//     if (password.length <= 8 ||password.indexOf('') !== -1 ||password.indexOf(username) !== -1){
//         return false 
//     }


//     return true 

// }


// function averageValue(arrayNum){
//     let average = 0;
//     for(let num of arrayNum){
//         average += num;
//         average /= arrayNum.length;
//     }
//     return average; 

// }

//Version using indexOf
// function isPangram(sentence) {
// 	let lowerCased = sentence.toLowerCase();
// 	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
// 		if (lowerCased.indexOf(char) === -1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function add(x,y){
//     return x+y;
// }

// const sum = function (x,y){
//     return x + Y;

// }

// const product =  function multiply (x, y){
//     return x * y;
// }

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// //Map creates a new array by calling your callback function with each element in the original array.
// const doubles = numbers.map(function (num) {
//   return num * 2; //Need to return the value!
// });
// //[40, 42, 44, 46, 48, 50, 52, 54]

// const numDetail = numbers.map(function (n) {
//   return {
//     value: n,
//     isEven: n % 2 === 0
//   }
// })

// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split('').join('.');
// })
// //["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]


// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]

// const titles = books.map(function (b) {
//   return b.title;
// })
// //["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]


// const feline = {
//   legs: 4,
//   family: 'felinae',
// }

// const lion = {
//   ...feline,
//   genus: 'panthera',
// };

// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++){
//     total +=arguments[i];
//   }
//   return total
// }

// function sumAll(){
//   return arguments.reduce((total, currentVal) => {
//     return total+currentVal;

//   })
// }

// function num (...nums){
// return nums.reduce((total, currentVal)=>{
//   return total + currentVal;
// })
// }
// const multiply = (...num) => (
// num.reduce((val, currentval) =>  val * currentval)

// )

// const data = {
//   first: 'a',
//   second: 'b',
//   third: 'c',
// }
// const first = 'a';
// const  second = 'b';
// const third = 'c';
// const quatre = 'd'

// // function print({first, second, third}){
// //   console.log(`${first} ${second} ${third} `)
// // }

// team = {
//   [ first]:   second,
//   [second]:  third,
//   [third]: quatre
// }
// const add = function(x,y){
//   return x+y
// },

// const math = {
//   add 
// }

// const math = {
  
//   numbers: [1,2,3,4,5],
//   add: function (x,y)
// }


// function makeDeck(){
//   const suits 
// }