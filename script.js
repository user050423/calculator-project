/*Your calculator is going to contain functions for all of the basic math operators 
you typically find on calculators, so start by creating functions for the following items
and testing them in your browser’s console:
add
subtract
multiply
divide*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) { return 'cannot divide by zero'}
    return a / b;
}

/*A calculator operation will consist of a number, an operator, and another number. 
For example, 3 + 5. Create three variables, one for each part of the operation. 
You’ll use these variables to update your display later.*/
let num1;
let operator;
let num2;

/* Create a new function operate that takes an operator and two numbers 
and then calls one of the above functions on the numbers.*/
function operate(num1, operator, num2){
    let result;

    switch (operator) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = "error";
    }
    return result;
}

console.log(operate(10, 'add', 5));

/*Create a basic HTML calculator with buttons for each digit and operator (including =).
Don’t worry about making them functional just yet.
There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
Add a “clear” button.*/
const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '=']