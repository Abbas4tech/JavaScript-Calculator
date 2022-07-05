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

const evaluator = (exp) => new Function("return " + exp)();

const result = () => {
  operationIsDone = true;
  display.value = evaluator(display.value).toFixed(2);
};

buttons
  .map((e) => ({
    value: e,
    onClick: () =>
      e === "Back" ? back() : e === "=" ? result() : clickHandler(e),
  }))
  .forEach(({ value, onClick }) => {
    const buttonElem = document.createElement("button");
    buttonElem.textContent = value;
    root.append(buttonElem);
    buttonElem.addEventListener("click", onClick);
  });
