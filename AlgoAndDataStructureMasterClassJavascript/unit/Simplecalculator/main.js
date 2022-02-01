function calculate(inputValue){

// alert(inputValue);
const expression = /\+|\-|\*|\//;
const numbers = inputValue.split(expression);

const numberA = parseInt(numbers[0])
const numberB = parseInt(numbers[1])

const operation = inputValue.match(expression);
// debugger


const calculator = new Calculator();
calculator.add(numberA);


let result;
switch(operation[0]){
    case'+':
    result = calculator.add(numberB);
    break;
    case '-':
    break;
    case'*':
    break;
    case '/':
    break;
}
debugger
}