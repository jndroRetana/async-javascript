function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

//sum tiene como función ser el callback de la función calc

console.log(calc(2, 8, sum));

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

//printDate tiene como función ser el callback de la función date

date(printDate);
