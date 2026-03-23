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
const buttonsArray = ['AC', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '.', 0, '='];
const operators = ['+', '-', '*', '/', '%'];
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
    } else if (buttonsArray[i] === '=' || buttonsArray[i] === 'AC'){
        button.classList.add('button', 'pinkButton')
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
showNumbers.textContent = "";
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
        if (!operator) {
            num1 += e.target.textContent;
            console.log(num1)
            showNumbers.textContent = num1;
        } else {
            num2 += e.target.textContent;
            showNumbers.textContent = num2;
            console.log(num2);
        }
    })
})

const operateButton = document.getElementById('=');
operateButton.classList.add('operate')
operateButton.addEventListener('click', () => {
    if (!num1 || !operator || !num2) {
        return;
    }
    const result = operate(num1, operator, num2);
    showNumbers.textContent = result;
    console.log(result);
    num1 = result;
    num2 = '';
    operator = '';
})

//create seperate eventlistener for digits and operators and del and ac 
const allClear = document.getElementById('AC');
allClear.addEventListener('click', () => {
    num1 = '';
    operator = '';
    num2 = '';
    showNumbers.textContent = '';
});

const deleteDigit = document.getElementById('DEL');
deleteDigit.addEventListener('click', () => {
    if (!operator) {
        num1 = num1.slice(0, -1);
        console.log(num1)
        showNumbers.textContent = num1;
    } else if (operator) {
        num2 = num2.slice(0, -1);
        showNumbers.textContent = num2;
        if (num2.length < 0) {
            showNumbers.textContent = 0;
        }
    }
})

const decimalButton = document.getElementById('.');
decimalButton.addEventListener('click', (e) => {
    decimalPoint = e.target.textContent;
    if (!operator) {
        num1 += decimalPoint;
        console.log(num1)
        showNumbers.textContent = num1;
    } else {
        num2 += decimalPoint;
        showNumbers.textContent = num2;
        console.log(num2);
    }
})