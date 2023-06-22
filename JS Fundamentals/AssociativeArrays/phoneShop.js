function func(input) {
    
    let phones = input.shift().split(", ");

    let command = input.shift();

    while (command != "End") {
        
        if (command.includes("Add")) {
            let phone = command.split(" - ")[1];
            if (!phones.includes(phone))
                phones.push(phone);
        }
        else if (command.includes("Remove")) {
            let phone = command.split(" - ")[1]; 
            if (phones.includes(phone))
                phones.splice(phones.indexOf(phone),1);
        }
        else if (command.includes("Bonus")) {
            let oldNew = command.split(" - ")[1].split(":");
            let oldph = oldNew[0];
            let newph = oldNew[1];
            if (phones.includes(oldph)) {
              phones.splice(phones.indexOf(oldph) + 1, 0,newph);
            }
        }
        else if (command.includes("Last")) {
            let phone = command.split(" - ")[1];
            if (phones.includes(phone)) {
                phones.splice(phones.indexOf(phone), 1);
                phones.push(phone);
            }
        }

        command = input.shift();
    }

    let str = phones.join(", ");
    console.log(str);
}

func(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]);