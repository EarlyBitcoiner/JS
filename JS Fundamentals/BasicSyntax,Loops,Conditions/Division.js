function func(number) {
  let biggestDivision;
  let num = Number(number);

  if (num % 10 == 0) {
    biggestDivision = 10;
  } else if (num % 7 == 0) {
    biggestDivision = 7;
  } else if (num % 6 == 0) {
    biggestDivision = 6;
  } else if (num % 3 == 0) {
    biggestDivision = 3;
  } else if (num % 2 == 0) {
    biggestDivision = 2;
  }

  if (biggestDivision != undefined) {
    console.log(`The number is devisiable by ${biggestDivision}`);
  } else {
    console.log("Not divisiable!");
  }
}

func(289); // 2 3 6 7 10
