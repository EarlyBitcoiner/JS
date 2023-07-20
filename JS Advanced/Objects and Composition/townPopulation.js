function solve(input) {
    
    let registry = {};

    for (const city of input) {
        let command = city.split(' <-> ');
        let cityName = command[0];
        let cityPopul = Number(command[1]);

        if (registry[cityName] === undefined) {
            registry[cityName] = cityPopul;
        } else {
            registry[cityName] += cityPopul;
        }
    }

    for (const key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }
}

solve([
  "Istanbul <-> 100000",

  "Honk Kong <-> 2100004",

  "Jerusalem <-> 2352344",

  "Mexico City <-> 23401925",

  "Istanbul <-> 1000",
]);