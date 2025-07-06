const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Ignore the equals and clear buttons here
    if (button.id === 'clear' || button.id === 'equals') return;

    currentInput += value;
    display.value = currentInput;
  });
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

equalsBtn.addEventListener('click', () => {
  try {
    // Evaluate the expression safely
    // Replace × and ÷ for eval function if needed (we use * and / in data-value)
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
});
