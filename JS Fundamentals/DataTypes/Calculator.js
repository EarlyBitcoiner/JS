function solve(num, op, num2) {
  let sum = 0;

  if (op == "-") {
    sum = num - num2;
  } else if (op == "+") {
    sum = num + num2;
  } else if (op == "/") {
    sum = num / num2;
  } else {
    sum = num * num2;
  }

  console.log(sum.toFixed(2));
}

solve(21.2, "*", 3);
