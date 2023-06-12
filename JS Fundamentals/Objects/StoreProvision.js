function func(have, wait) {
  let storage = {};
  for (let i = 0; i < have.length; i += 2) {
    storage[have[i]] = Number(have[i + 1]);
  }

  let properties = Object.keys(storage);

  for (let i = 0; i < wait.length; i += 2) {
    if (properties.includes(wait[i])) {
      storage[wait[i]] += Number(wait[i + 1]);
    } else {
        storage[wait[i]] = Number(wait[i + 1]);
        properties.push(wait[i]);
    }
  }

  let productsInStorage = Object.entries(storage);

  productsInStorage.forEach((x) => console.log(`${x[0]} -> ${x[1]}`));
}

func(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
