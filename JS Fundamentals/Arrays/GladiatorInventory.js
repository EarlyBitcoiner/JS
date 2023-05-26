function solve(input) {
    let inventory = input[0].split(" ");

    for (let i = 1; i < input.length; ++i) {
      let currCommand = input[i].split(" ");

      switch (currCommand[0]) {
          case "Buy": {
              if (!inventory.includes(currCommand[1])) {
                  inventory.push(currCommand[1]);
              }
              break;
          }
          case "Trash":{
              if (inventory.includes(currCommand[1])) {
                  inventory.splice(inventory.indexOf(currCommand[1]),1);
              }
              break;
          }
          case "Repair":{
              if (inventory.includes(currCommand[1])) {
                  inventory.splice(inventory.indexOf(currCommand[1]), 1);
                  inventory.push(currCommand[1]);
              }
              break;
          }
          case "Upgrade":{
              let upgrade = currCommand[1].split("-");
              if (inventory.includes(upgrade[0])) { 
                  inventory.splice(inventory.indexOf(upgrade[0])+1, 0, upgrade.join(":"));
              }
              break;
          }
          default: {
              console.log("Invalid command entered.");
              break;
          }  
       }
    }

    console.log(inventory);

}

solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);