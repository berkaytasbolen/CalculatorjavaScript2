const prompt = require("prompt-sync")({ sigint: true });

let sum = 0; 
let operationTypes = ["*", "-", "/", "+"]; 
let value = "";
let secondValue = "";
let isFinished = false;
let firstOperation = "";
let operation = "";

const askForOperation = () => {
  const val = prompt("Please enter a operation : ");
  if (operationTypes.includes(val)) {
    return val;
  } else {
    console.log("Please enter a correct operation!");
    return askForOperation();
  }
};

const getFirstValue = () => {
  const val = prompt("Please enter first value : ");
  if (operationTypes.includes(val)) {
    firstOperation = val;
    isFinished = true;
    return;
  }
  if (isNaN(parseInt(val))) {
    console.log("Please enter correct Value!");
    return getFirstValue();
  }
  value += val;
};

const getSecondValue = () => {
  const val = prompt("Please enter second value : ");
  if (operationTypes.concat("=").includes(val)) {
    sum = eval(`${value} ${firstOperation} ${secondValue}`);

    isFinished = true;
    value = "";
    operation = val;
    return;
  }
  if (isNaN(parseInt(val))) {
    console.log("Please enter correct Value!");
    return getSecondValue();
  }
  secondValue += val;
};

const getValues = () => {
  const val = prompt("Please enter new value : ");
  if (operationTypes.concat("=").includes(val)) {
    if (operation !== "=") {
      sum = eval(`${sum} ${operation} ${value}`);
      value = "";
    }
    operation = val;

    return;
  }
  if (isNaN(parseInt(val))) {
    console.log("Please enter correct Value!");
    return getValues();
  }
  value += val;
};

while (!isFinished) {
  getFirstValue();
}

isFinished = false;

while (!isFinished) {
  getSecondValue();
}

while (operation !== "=") {
  getValues();
}
console.log("Sonucunuz => ", sum);