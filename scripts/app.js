const root = document.getElementById("root");
const display = document.createElement("input");
display.readOnly = true;
root.append(display);
let operationIsDone = false;

const buttons = [
  {
    value: "0",
    onClick: () => clickHandler("0"),
  },
  {
    value: "1",
    onClick: () => clickHandler("1"),
  },
  {
    value: "2",
    onClick: () => clickHandler("2"),
  },
  {
    value: "3",
    onClick: () => clickHandler("3"),
  },
  {
    value: "4",
    onClick: () => clickHandler("4"),
  },
  {
    value: "5",
    onClick: () => clickHandler("5"),
  },
  {
    value: "6",
    onClick: () => clickHandler("6"),
  },
  {
    value: "7",
    onClick: () => clickHandler("7"),
  },
  {
    value: "8",
    onClick: () => clickHandler("8"),
  },
  {
    value: "9",
    onClick: () => clickHandler("9"),
  },
  {
    value: "+",
    onClick: () => clickHandler("+"),
  },
  {
    value: "-",
    onClick: () => clickHandler("-"),
  },
  {
    value: "*",
    onClick: () => clickHandler("*"),
  },
  {
    value: "/",
    onClick: () => clickHandler("/"),
  },
  {
    value: ".",
    onClick: () => clickHandler("."),
  },
  {
    value: "=",
    onClick: () => result(),
  },
  {
    value: "Back",
    onClick: () => back(),
  },
];

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
  buttonsArray.map(({ value, onClick }) => {
    const buttonElem = document.createElement("button");
    buttonElem.textContent = value;
    root.append(buttonElem);
    buttonElem.addEventListener("click", onClick);
  });
};

renderer(buttons);
