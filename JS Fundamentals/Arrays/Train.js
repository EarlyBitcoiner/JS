function solve(train) { 

    let maxCapacity = Number(train[1]);
    
    for (let i = 2; i < train.length; ++i){
        let command = train[i];

        if (command.includes("Add")) {


            train[0] += " " + command.substring(4);
        } else {
            let wagons = train[0].split(" ").map(Number);

            for (let j = 0; j < wagons.length; ++j){

                if (wagons[j] + Number(command) <= maxCapacity) {
                    wagons[j] += Number(command);
                    train[0] = wagons.join(" ");
                    break;
                }
            }
        }
        
    }

    console.log(train[0]);
}

solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

