function solve(input) {
  let damageDone = 0;
  let killCount = 0;
  let suiciders = input.pop().split(" ");

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map((x) => Number(x));
  }

  for (let suicider of suiciders) {
    let currentBombCoords = suicider.split(",");

    let row = Number(currentBombCoords[0]);
    let column = Number(currentBombCoords[1]);

    if (input[row][column] === 0) continue;

    damageDone += input[row][column];
    killCount++;

    if (row - 1 >= 0 && column - 1 >= 0) {
      input[row - 1][column - 1] -= input[row][column];
      if (input[row - 1][column - 1] < 0) input[row - 1][column - 1] = 0;
    }
    if (row - 1 >= 0) {
      input[row - 1][column] -= input[row][column];
      if (input[row - 1][column] < 0) input[row - 1][column] = 0;
    }
    if (row - 1 >= 0 && column + 1 < input[0].length) {
      input[row - 1][column + 1] -= input[row][column];
      if (input[row - 1][column + 1] < 0) input[row - 1][column + 1] = 0;
    }
    if (column - 1 >= 0) {
      input[row][column - 1] -= input[row][column];
      if (input[row][column - 1] < 0) input[row][column - 1] = 0;
    }
    if (column + 1 < input[0].length) {
      input[row][column + 1] -= input[row][column];
      if (input[row][column + 1] < 0) input[row][column + 1] = 0;
    }
    if (row < input.length && column - 1 >= 0) {
      input[row + 1][column - 1] -= input[row][column];
      if (input[row + 1][column - 1] < 0) input[row + 1][column - 1] = 0;
    }
    if (row < input.length) {
      input[row + 1][column] -= input[row][column];
      if (input[row + 1][column] < 0) input[row + 1][column] = 0;
    }
    if (row < input.length && column + 1 < input[0].length) {
      input[row + 1][column + 1] -= input[row][column];
      if (input[row + 1][column + 1] < 0) input[row + 1][column + 1] = 0;
    }

    input[row][column] = 0;
  }

  input.forEach((element) => {
    element.forEach((elem) => {
      if (elem != 0) {
        damageDone += elem;
        elem = 0;
        killCount++;
      }
    });
  });

  console.log(damageDone);
  console.log(killCount);
}

solve(["7 10 35 20", "11 18 32 10", "14 15 10 10", "10 10 21 10", "2,2 2,1"]);

solve(["10 10 10", "10 10 10", "10 10 10", "0,0"]);
