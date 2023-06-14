function func(input) {
  let list = [];

  for (let i = 0; i < input.length; i++) {
    let curr = input.shift();
    if (curr == "PARTY") break;

    list.push(curr);
  }

  for (const guest of input) {
    let curr = list.indexOf(guest);
    if (curr != -1) {
      list.splice(curr, 1);
    }
  }

  console.log(list.length);

    for (const guest of list) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            console.log(guest);
            let curr = list.indexOf(guest);
            list.splice(curr, 1);
        }
    }
  

  for (const guest of list) {
    console.log(guest);
  }
}

func([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
