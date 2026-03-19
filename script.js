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
let num1 = '';
let operator; 
let num2 = '';

/* Create a new function operate that takes an operator and two numbers 
and then calls one of the above functions on the numbers.*/
function operate(num1, operator, num2){
    let result;
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "error";
    }
    return result;
}

/*Create a basic HTML calculator with buttons for each digit and operator (including =).
Don’t worry about making them functional just yet.
There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
Add a “clear” button.*/
const buttonsArray = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '.', 0, '='];
const operators = ['+', '-', '*', '/', '%', '='];
const digits = buttonsArray.filter(button => Number.isFinite(button));


const displayButtons = document.querySelector('.buttons');

for (let i = 0; i < buttonsArray.length; i++) {
    const button = document.createElement('button');
    button.id = buttonsArray[i];
    button.textContent = buttonsArray[i];

    if (digits.includes(buttonsArray[i])) {
        button.classList.add('button', 'digits');
    } else if (operators.includes(buttonsArray[i])){
        button.classList.add('button', 'operators')
    } else {
        button.classList.add('button')
    }
    
    displayButtons.appendChild(button);
}

/*Create the functions that update one of your number variables when the calculator’s 
digit buttons are clicked. Your calculator’s display should also update to reflect 
the value of that number variable.*/

const displayDiv = document.querySelector('.display');
const showNumbers = document.createElement('p');
showNumbers.id = 'showNumbers';
showNumbers.textContent = "Hello World";
displayDiv.appendChild(showNumbers);

const operatorButtons = document.querySelectorAll('.operators');
 operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
    operator = e.target.textContent;
    console.log(operator)
    });
});

const digitButtons = document.querySelectorAll('.digits');
    digitButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            num1 += e.target.textContent;
            console.log(num1)
        })
    })

//create a while looop inside a function that checks if the button being pressed 
//has a class of digits, store element with class digits in a variable

//create seperate eventlistener for digits and operators and del and ac 
