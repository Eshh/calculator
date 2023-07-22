const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  let v = calculatorDisplay.textContent;
  console.log(v);
  calculatorDisplay.textContent =
    v == "0." ? "0." + number : v == 0 ? number : v + number;
}

function addDecimal() {
  let v = calculatorDisplay.textContent;
  if (!v.includes(".")) {
    calculatorDisplay.textContent = v + ".";
  }
}

inputBtns.forEach((each) => {
  if (each.classList.length == 0) {
    each.addEventListener("click", () => sendNumberValue(each.value));
  } else if (each.classList.contains("operator")) {
    each.addEventListener("click", () => sendNumberValue(each.value));
  } else if (each.classList.contains("decimal")) {
    each.addEventListener("click", () => addDecimal());
  }
});

function resetAll() {
  calculatorDisplay.textContent = 0;
}
clearBtn.addEventListener("click", resetAll);
