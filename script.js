const numberBtns = document.querySelectorAll(".number");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const moduloBtn = document.querySelector(".modulo");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const signChangeBtn = document.querySelector(".sign-change");
const decimalBtn = document.querySelector(".decimal");
const equalBtn = document.querySelector(".equal");
const display = document.querySelector(".display");
let a = 0;

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    let data = numberBtn.textContent;
    updateDisplay(data);
  });
});

decimalBtn.addEventListener("click", () => {
  if (!a.includes(".")) updateDisplay(".");
  else reutrn;
});

addBtn.addEventListener("click", () => {
  updateDisplay("+");
});

subtractBtn.addEventListener("click", () => {
  updateDisplay("-");
});

multiplyBtn.addEventListener("click", () => {
  updateDisplay("*");
});

divideBtn.addEventListener("click", () => {
  updateDisplay("÷");
});

moduloBtn.addEventListener("click", () => {
  updateDisplay("%");
});

signChangeBtn.addEventListener("click", () => {});

equalBtn.addEventListener("click", calculate);

deleteBtn.addEventListener("click", () => {
  if (a.toString().length > 1) {
    a = a.toString().slice(0, -1);
    display.textContent = a;
  }
});

clearBtn.addEventListener("click", () => {
  display.textContent = "";
  a = 0;
  b = 0;
});

function calculate() {
  try {
    const result = operate(display.textContent);
    display.textContent = result.toString();
    a = result.toString();
  } catch (error) {
    display.textContent = "Error";
  }
}

function updateDisplay(data) {
  if (a === 0) {
    a = data;
    display.textContent = a;
  } else {
    a = "" + a + data;
    display.textContent = a;
  }
}

function operate(expression) {
  const numbers = expression.split(/[-+*÷%]/);
  const operator = expression.match(/[^\d.]/);
  if (numbers.length !== 2 || !operator) {
    throw new Error("Invalid input");
  }

  const a = parseFloat(numbers[0]);
  const b = parseFloat(numbers[1]);

  switch (operator[0]) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "÷":
      return divide(a, b);

    case "%":
      return modulo(a, b);

    default:
      break;
  }
}

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
  if (b === 0) {
    return "ERROR";
  } else return a / b;
}

function modulo(a, b) {
  return a % b;
}
