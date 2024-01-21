
        
let n= document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
currentInput += number;
n.value = currentInput;
}

function appendOperator(operator) {
currentInput += ` ${operator} `;
n.value = currentInput;
}

function clearDisplay() {
currentInput = '';
n.value = '';
}

function calculateResult() {
try {
n.value = eval(currentInput);
} catch (error) {
n.value = 'Error';
}
currentInput = '';
}
