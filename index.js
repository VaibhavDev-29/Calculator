let expersion = "";

function updateDisplay(value) {
  const display = document.getElementById("outputbox");
  display.innerText = value;

  // auto scroll to right if content overflows
  display.scrollLeft = display.scrollWidth;
}

function toggleSign(plus, minu) {
  if (Number(firstNum) > 0) {
    firstNum = `${minu} ${firstNum}`;
    console.log(typeof firstNum);
    updateDisplay(firstNum);
  } else {
    firstNum = `${plus} ${firstNum}`;
    console.log(firstNum);
  }
}

function enterNumber(num) {
  expersion += num;
  updateDisplay(expersion);
}

function setOperator(op) {
  expersion += op;
  updateDisplay(expersion);
}

function calulate() {
  try {
    let result = eval(expersion);
    updateDisplay(result);
    expersion = result.toString();
  } catch (e) {
    updateDisplay("Error");
    expersion = "";
  }

  firstNum = result.toString();
  secondNum = "";
  operator = "";
  isSecond = false;
}

function clearDisplay() {
  expersion = "";
  updateDisplay(0);
}

function backSpace() {
  expersion = expersion.slice(0, -1);
  updateDisplay(expersion);
}

updateDisplay(0);

const exp = "2+3-5*4*3/2";
// console.log(eval(exp));
