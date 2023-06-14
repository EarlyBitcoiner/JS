function func(input) {
  let destinations = {};

  for (const dest of input) {
    let arr = dest.split(" > ");

    let coutry = arr[0];
    let city = arr[1];
    let price = Number(arr[2]);

    if (destinations.hasOwnProperty(coutry)) {
      let map = new Map();
      map.set(city, price);

      if (destinations[coutry].has(city)) {
        if (destinations[coutry].get(city) > price) {
          destinations[coutry].set(city, price);
        }
      } else {
        destinations[coutry].set(city, price);
      }
    } else {
      let map = new Map();
      map.set(city, price);

      destinations[coutry] = map;
    }
  }

  destinations = Object.entries(destinations).sort();

  for (let [key, map] of destinations) {
    let arrMap = Array.from(map).sort((a, b) => {
      valueA = a[1];
      valueB = b[1];

      if (valueA > valueB) return 1;
      else if (valueA < valueB) return -1;
      else return 0;
    });

    let mapinjo = new Map(arrMap);
    destinations[key] = mapinjo;
  }

  for (let [coutry, map] of destinations) {
    let strMap = "";

    for (const [city, price] of map) {
      strMap += city + " -> " + price + " ";
    }

    console.log(`${coutry} -> ${strMap}`);
  }
}

func([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
