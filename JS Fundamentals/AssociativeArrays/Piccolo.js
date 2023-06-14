function func(input) {
    let parking = new Set();

    for (const command of input) {
        let [direction, plate] = command.split(", ");

        if (direction == "IN") {
            parking.add(plate);
        } else {
            parking.delete(plate);
        }
    };

    if (parking.length == 0) {
        console.log("no cars in");
        return;
    }

    let arr = Array.from(parking).sort();

    for (const car of arr) {
        console.log(car);
    }
}

func([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);