function solve(input) {
  let str = "";

  for (const elem of input) {
    if (str.includes(elem)) {
      continue;
    } else {
      str += elem + " ";
    }
  }

  console.log(str);
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
