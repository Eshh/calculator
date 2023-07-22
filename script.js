const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

function sendNumberValue(number) {
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    let v = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      v == "0." ? "0." + number : v == 0 ? number : v + number;
  }
}

function addDecimal() {
  if (awaitingNextValue) return;
  let v = calculatorDisplay.textContent;
  if (!v.includes(".")) {
    calculatorDisplay.textContent = v + ".";
  }
}
calculate = {
  "/": (f, s) => f / s,
  "+": (f, s) => f + s,
  "-": (f, s) => f - s,
  "*": (f, s) => f * s,
  "=": (f, s) => s,
};
function useOperator(op) {
  const n = +calculatorDisplay.textContent;
  if (operatorValue && awaitingNextValue) {
    operatorValue = op;
    return;
  }
  if (!firstValue) {
    firstValue = n;
  } else {
    const calculation = calculate[operatorValue](firstValue, n);
    firstValue = calculation;
    calculatorDisplay.textContent = calculation;
  }
  awaitingNextValue = true;
  operatorValue = op;
}

inputBtns.forEach((each) => {
  if (each.classList.length == 0) {
    each.addEventListener("click", () => sendNumberValue(each.value));
  } else if (each.classList.contains("operator")) {
    each.addEventListener("click", () => useOperator(each.value));
  } else if (each.classList.contains("decimal")) {
    each.addEventListener("click", () => addDecimal());
  }
});

function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calculatorDisplay.textContent = 0;
}
clearBtn.addEventListener("click", resetAll);
