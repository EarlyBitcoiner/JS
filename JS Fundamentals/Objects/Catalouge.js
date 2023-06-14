function func(input) {
  let proObj = [];

  for (let i = 0; i < input.length; i++) {
    let current = input[i].split(" : ");
    let product = {};
    product.name = current[0];
    product.price = current[1];

    proObj.push(product);
  }

  proObj.sort((l, r) => {
    if (l.name > r.name) return 1;
    else if (l.name < r.name) return -1;
    else return 0;
  });

  let currChar = "7";

  for (const product of proObj) {
    if (currChar == product.name[0]) {
      console.log(`${product.name}: ${product.price}`);
    } else {
      currChar = product.name[0];
      console.log(currChar);
      console.log(`${product.name}: ${product.price}`);
    }
  }
}

func([
  `Appricot : 20.4`,

  "Fridge : 1500",

  "TV : 1499",

  "Deodorant : 10",

  "Boiler : 300",

  "Apple : 1.25",

  `Anti-Bug Spray : 15`,

  "T-Shirt : 10",
]);
