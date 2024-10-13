// JavaScript for basic calculator
const calculatorScreen = document.querySelector('.calculator-screen');
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the calculator screen
function updateScreen(value) {
  calculatorScreen.value = value;
}

// Event listener for button clicks
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.value;

    // If the button is a number or decimal, append it to the current input
    if (!isNaN(value) || value === '.') {
      currentInput += value;
      updateScreen(currentInput);
    }

    // If the button is an operator
    if (['+', '-', '*', '/'].includes(value)) {
      if (operator && currentInput) {
        calculate();
      }
      previousInput = currentInput;
      operator = value;
      currentInput = '';
    }

    // If the button is the equal sign, perform the calculation
    if (value === '=') {
      calculate();
      operator = null;
    }

    // If the button is the clear button, reset everything
    if (value === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = null;
      updateScreen('');
    }
  });
});

// Function to perform the calculation
function calculate() {
  let result = 0;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(previous) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
  }

  currentInput = result.toString();
  previousInput = '';
  updateScreen(result);
}
