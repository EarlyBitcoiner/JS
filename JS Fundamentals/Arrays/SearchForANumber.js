function solve(numbers, steps) {
  let toGet = steps[0];
  let toRemove = steps[1];
  let toCheck = steps[2];
  let arr = [];
  let occurances = 0;

  for (let i = 0; i < toGet; ++i) {
    arr.push(numbers[i]);
  }

  arr.splice(0, toRemove);

  for (let elem of arr) {
    if (elem == toCheck) occurances++;
  }

  console.log(`The number ${toCheck} occurs ${occurances} in the array.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
