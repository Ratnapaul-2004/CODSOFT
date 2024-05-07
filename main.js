let expression = '';

function appendNumber(number) {
  expression += number;
  document.getElementById('display').value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('display').value = result;
  } catch (error) {
    expression = '';
    document.getElementById('display').value = 'Error';
  }
}
