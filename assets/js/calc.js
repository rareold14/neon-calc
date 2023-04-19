const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumulativeCalculation

function calc(button) {
  const value = button.textContent
  if (value === "C") {
    calculation = []
    screenDisplay.textContent = "0"
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalculation)
  } else {
    calculation.push(value)
    accumulativeCalculation = calculation.join('')
    screenDisplay.textContent = accumulativeCalculation
  }

}

buttons.forEach(button => button.addEventListener('click', () => calc(button)))
