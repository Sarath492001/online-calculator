let result = document.getElementById('result');
let historyList = document.getElementById('history-list');
let calculationHistory = [];

function appendCharacter(char) {
  result.value += char;
}

function clearResult() {
  result.value = '';
}

function deleteCharacter() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;
  let answer;

  try {
      expression = expression.replace(/\^/g, '**');
      answer = eval(expression);
      
      let calculation = `${expression} = ${answer}`;
    calculationHistory.push(calculation);
    if (calculationHistory.length > 10) {
      calculationHistory.shift();
    }
    updateHistoryList();
  } catch (error) {
    answer = 'Error';
  }
  result.value = answer;
}
function updateHistoryList() {
  historyList.innerHTML = '';
  calculationHistory.forEach((calculation) => {
    let listItem = document.createElement('li');
    listItem.textContent = calculation;
    historyList.appendChild(listItem);
  });
}
