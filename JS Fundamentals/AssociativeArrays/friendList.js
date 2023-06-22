function func(input) {
  let friends = input[0].split(", ");
  input.shift();
  let blacklisted = 0;
  let lostNames = 0;

  for (let command of input) {
    if (command == "Report") break;

    if (command.includes("Blacklist")) {
      let name = command.split(" ")[1];

      if (friends.includes(name)) {
        console.log(`${name} was blacklisted.`);
        blacklisted++;
        friends[friends.indexOf(name)] = "Blacklisted";
      } else {
        console.log(`${name} was not found.`);
      }
    } else if (command.includes("Error")) {
      let index = command.split(" ")[1];
      if (friends[index] != "Blacklisted" && friends[index] != "Lost" && index < friends.length && index > -1) {
        console.log(`${friends[index]} was lost due to an error.`);
          friends[index] = "Lost";
          lostNames++;
      }
    } else {
      let indexName = command.split(" ");
        indexName.shift();
        let index = indexName[0];
        let name = indexName[1];
      if (
        friends[index] != "Blacklisted" &&
        friends[index] != "Lost" &&
        index < friends.length &&
        index >= 0
      ) {
        console.log(`${friends[index]} changed his username to ${name}.`);
        friends[index] = name;
      }
    }
  }

  console.log(`Blacklisted names: ${blacklisted}`);
  console.log(`Lost names: ${lostNames}`);

  let str = "";
  friends.forEach((element) => {
    str += element + " ";
  });

  console.log(str);
}

//func(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
func(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"]);
