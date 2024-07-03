// script.js
let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteCharacter() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendCharacter(character) {
    if (currentInput === '0' && character !== '.') {
        currentInput = character;
    } else {
        currentInput += character;
    }
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
