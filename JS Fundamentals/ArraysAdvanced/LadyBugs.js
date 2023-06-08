function solve(input) {
  let fieldLength = input[0]; // the length of the field
  let bugsIndecies = input[1].split(" ").map((x) => Number(x)); // the positons of the bugs in the field
  let field = []; // field with bugs
  let commands = input.slice(2); // array with the commands

  // here we create the field with the inputed length.
  while (field.length < fieldLength) {
    field.push(0);
  }

  // here we set the bugs on their position according to the input.
  for (let index of bugsIndecies) {
    field[index] = 1;
  }

  // here we procces the commands
  for (let i = 0; i < commands.length; i++) {
    let currCommand = commands[i].split(" ");
    let bugIndex = Number(currCommand[0]);

    if (field[bugIndex] != 1) {
      continue;
    }

    let moveBy = 0;
    if (currCommand[1] == "right") {
      moveBy = Number(currCommand[2]);
    } else {
      moveBy = Number(currCommand[2]);
      moveBy *= -1;
    }

    while (!(field.length <= bugIndex + moveBy) || !(bugIndex + moveBy > 0)) {
      field[bugIndex] = 0;

      if (field[bugIndex + moveBy] == 0) {
        field[bugIndex + moveBy] = 1;
        break;
      } else {
        moveBy += Number(currCommand[2]);
      }
    }

    field[bugIndex] = 0;
  }

  console.log(field);
}

solve([3, "0 1", "0 right 1", "2 right 1"]);
