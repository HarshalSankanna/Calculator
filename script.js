const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const zeroBtn = document.querySelector(".zero");
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
let b = 0;
let operator;
let isA = true;
let isB = false;
let displayValue = "" + a + operator + b;

// console.log(operate(5, 2, "-"));

oneBtn.addEventListener("click", () => {
  updateDisplay(1);
});

twoBtn.addEventListener("click", () => {
  updateDisplay(2);
});

threeBtn.addEventListener("click", () => {
  updateDisplay(3);
});

fourBtn.addEventListener("click", () => {
  updateDisplay(4);
});

fiveBtn.addEventListener("click", () => {
  updateDisplay(5);
});

sixBtn.addEventListener("click", () => {
  updateDisplay(6);
});

sevenBtn.addEventListener("click", () => {
  updateDisplay(7);
});

eightBtn.addEventListener("click", () => {
  updateDisplay(8);
});

nineBtn.addEventListener("click", () => {
  updateDisplay(9);
});

zeroBtn.addEventListener("click", () => {
  updateDisplay(0);
});

decimalBtn.addEventListener("click", () => {
  updateDisplay(".");
});

deleteBtn.addEventListener("click", () => {
  if (isA === true && a.toString().length > 1) {
    a = a.toString().slice(0, -1);
    display.textContent = a;
  } else if (isB === true && b.toString().length > 1) {
    b = b.toString().slice(0, -1);
    display.textContent = b;
  }
});

clearBtn.addEventListener("click", () => {
  display.textContent = "0";
  a = 0;
  b = 0;
});

function updateDisplay(data) {
  if (isA === true && a === 0) {
    a = data;
    display.textContent = a;
  } else if (isB === true && b === 0) {
    b = data;
    display.textContent = b;
  } else if (isA === true) {
    a = "" + a + data;
    display.textContent = a;
  } else {
    b = "" + b + data;
    display.textContent = b;
  }
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

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
  return a / b;
}
