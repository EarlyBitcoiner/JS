function func(input) {
    
    let garages = {};

    for (let command of input) {
        command = command.split(" - ");

        if (garages.hasOwnProperty(command[0])) { }
        else {
          garages[command[0]] = []; // for every garage we create and array in which we will store the cars.
        }

        let car = command[1].split(", ");

        let obj = {};
        for (let prop of car) {
            prop = prop.split(": ");
            obj[prop[0]] = prop[1];
        }

        garages[command[0]].push(obj);

    }

    for (let number in garages) {
        console.log(`Garage № ${number}`);

        for (let car of garages[number]) {
            let str = "---";

            for (let key of Object.keys(car)) {

                if (str == "---") {
                    str += " " + key + " - " + car[key];
                } else {
                    str += ", " + key + " - " + car[key];
                }
            }

            console.log(str);
        }
    }
}

/*Garage № 1
 --- color - blue, fuel type - diesel 
 --- color - red, manufacture - Audi
 Garage № 2
  --- fuel type - petrol
  Garage № 4
   --- color - dark blue, fuel type - diesel, manufacture - Fiat*/

func(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

    console.log();

    func(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol'])