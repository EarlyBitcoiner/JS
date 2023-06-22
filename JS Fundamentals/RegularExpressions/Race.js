function func(input) {
    let names = input.shift().split(", ");
    let racers = {};

    let regex = /[A-Z]|[a-z]|\d/g;


    for (let str of input) {
        let current = str.match(regex);

        let km = 0;
        let name = "";

        for (const char of current) {
            if (char >= '0' && char <= '9')
                km += Number(char);
            else
                name += char;
        }

        if (racers.hasOwnProperty(name)) {
            racers[name] += Number(km);

        } else if(names.includes(name)){
            racers[name] = Number(km);
        }
    }

    let sortedRacers = Object.entries(racers).sort((a, b) => {
        valueA = a[1];
        valueB = b[1];

        if (valueA > valueB)
            return -1;
        else if (valueA < valueB)
            return 1;
        else
            return 0;
    });
    
    console.log(`1st place: ${sortedRacers[0][0]}`)
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
}

func([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);

func(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);