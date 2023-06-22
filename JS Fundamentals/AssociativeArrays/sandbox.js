function func(input) {
  let students = Number(input[1]);
  let flour = Number(input[2]);
  let budget = Number(input[0]);
  let egg = Number(input[3]);
  let apron = Number(input[4]);

  let freeflour = Math.floor(students / 5);
  let aprons = Math.ceil(students + students * 0.2);

  let moneyNeeded =
    aprons * apron +
    10 * egg * students +
    (flour * students - freeflour * flour);

  if (moneyNeeded > budget) {
    console.log(`${(moneyNeeded - budget).toFixed(2)}$ more needed.`);
  } else {
    console.log(`Items purchased for ${moneyNeeded.toFixed(2)}$.`);
  }
}

func([50,
    2,
    1.0,
    0.10,
10.0]);

//func(50, 2, 1.0, 0.1, 10.0);
