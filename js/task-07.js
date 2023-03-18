const inputSizeControl = document.querySelector("#font-size-control");
const resultText = document.querySelector("#text");
const changeFontsize = (event) => {
  resultText.style.fontSize = `${event.currentTarget.value}px`;
};
inputSizeControl.addEventListener("input", changeFontsize);
