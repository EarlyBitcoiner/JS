function func(base, increment) {
  let stone = 0,
    marble = 0,
    lazuri = 0,
    gold = 1 * increment;
  let currentRow = 0;

  for (let width = base; width > 1; width -= 2) {
    ++currentRow;

    if (currentRow % 5 == 0) {
      lazuri += (width * 4 - 4) * increment;
    } else {
      marble += (width * 4 - 4) * increment;
    }

    stone += (width - 2) * (width - 2) * increment;
  }

  currentRow += 1; // we are adding the golden top cuz in the loop we dont count it.

  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marble}`);
  console.log(`Lapis Lazuri required: ${lazuri}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Pyramid final heigth: ${currentRow}`);
}

func(11, 1);
