let numOne = +prompt("Введите первое число")
let sign = prompt("+,  -,  *,  /")
let numTwo = +prompt("Введите второе число")
switch (sign) {
    case '+':
        console.log("Результат:" + (numOne + numTwo)); 
      break;
    case '-':
        console.log("Результат:" + (numOne - numTwo)); 
      break;
    case '*':
        console.log("Результат:" + (numOne * numTwo)); 
      break;
    case '/':
        console.log("Результат:" + (numOne / numTwo)); 
      break;
  }