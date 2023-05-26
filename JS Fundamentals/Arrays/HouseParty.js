function solve(arr) {
  let list = [];

  for (let elem of arr) {
    let currName = "";

    // here we read the name only and assign it to currName.
    for (let i = 0; i < elem.length; ++i) {
      if (elem[i] == " ") {
        break;
      } else {
        currName += elem[i];
      }
    }

    // here we check what type of command we have.
    if (elem.includes("not")) {
      // remove command
      list.includes(currName)
        ? (list = list.filter((name) => name !== currName))
        : console.log(`${currName} is not in the list!`);
    } else {
      // add command
      list.includes(currName)
        ? console.log(`${currName} is already in the list!`)
        : list.push(currName);
    }
  }

  for (const name of list) {
    console.log(name);
  }
}

/*If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list
print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name}
is not in the list!"). */

solve([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
