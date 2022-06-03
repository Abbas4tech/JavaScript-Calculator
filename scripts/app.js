import { buttons } from "./data.js";

const root = document.getElementById("root");
const display = document.createElement("input");
display.readOnly = true;
root.append(display);
let operationIsDone = false;

const clickHandler = (value) => {
  if (operationIsDone) {
    display.value = "";
    operationIsDone = false;
  }
  display.value += value;
};

const back = () => {
  if (operationIsDone) {
    display.value = "";
    operationIsDone = false;
  } else display.value = display.value.substring(0, display.value.length - 1);
};

const result = () => {
  operationIsDone = true;
  display.value = eval(display.value).toFixed(2);
};

const renderer = (buttonsArray) => {
  buttonsArray.map((button) => {
    const buttonElem = document.createElement("button");
    buttonElem.innerHTML = button.value;
    root.append(buttonElem);
    buttonElem.addEventListener("click", clickHandler.bind(null, button.value));
  });
  const equateBtn = document.createElement("button");
  equateBtn.innerHTML = "=";
  root.append(equateBtn);
  equateBtn.addEventListener("click", result);
  const backspace = document.createElement("button");
  backspace.innerHTML = "Back";
  root.append(backspace);
  backspace.addEventListener("click", back);
};

renderer(buttons);
