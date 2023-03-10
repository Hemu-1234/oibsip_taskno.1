let input = '';

function appendNumber(number) {
  input += number;
  document.getElementById('result').value = input;
}

function clearInput() {
  input = '';
  document.getElementById('result').value = '';
}

function operate(operator) {
  input += operator;
  document.getElementById('result').value = input;
}

function calculate() {
  try {
    input = eval(input);
    document.getElementById('result').value = input;
  } catch (e) {
    alert('Error');
  }
}


