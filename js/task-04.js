const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterLog = document.querySelector("#value");
let counterValue = 0;

const decrementCounter = () => {
  counterValue -= 1;
  counterLog.textContent = counterValue;
};
const incrementCounter = () => {
  counterValue += 1;
  counterLog.textContent = counterValue;
};
decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);
