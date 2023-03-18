function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("#controls>input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
let numberDiv;

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const markup = [];
  let randomColor;
  for (let i = 0; i < amount; i += 1) {
    randomColor = getRandomHexColor();
    markup[
      i
    ] = `<div style="background-color:${randomColor}; width:${width}px;height:${height}px;"></div>`;
    width += 10;
    height += 10;
  }
  divBoxes.insertAdjacentHTML("afterbegin", markup.join(""));
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
}

const createCollection = () => {
  createBoxes(numberDiv);
};
const destroyCollection = () => {
  destroyBoxes();
};
const inputedValue = () => (numberDiv = inputNumber.value);
inputNumber.addEventListener("input", inputedValue);
createButton.addEventListener("click", createCollection);
destroyButton.addEventListener("click", destroyCollection);
