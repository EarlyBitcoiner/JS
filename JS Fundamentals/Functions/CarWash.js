main(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);

main(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

function main(input) {
  let value = 10;
  input.shift();

  for (let i = 0; i < input.length; ++i) {
    let current = input[i];

    switch (current) {
      case "soap": {
        value = add(value, 10);
        break;
      }
      case "water": {
        value = increase(value, 20);
        break;
      }
      case "vacuum cleaner": {
        value = increase(value, 25);
        break;
      }
      case "mud": {
        value = decrease(value, 10);
        break;
      }
      default: {
        console.log("There is Invalid input!");
        break;
      }
    }
  }

  function add(value, increase) {
    return value + increase;
  }

  function decrease(value, percent) {
    return value - value * (percent / 100);
  }

  function increase(value, percent) {
    return value + value * (percent / 100);
  }

  console.log(`The car is ${value.toFixed(2)}% clean`);
}


// • soap – add 10 to the value
// • water – increase the value by 20%
// • vacuum cleaner – increase the value by 25%
// • mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//  `The car is {value}% clean.`
