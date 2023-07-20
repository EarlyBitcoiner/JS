// "InsertSpace:|:{index}":
//  Inserts a single space at the given index. The given index will always be valid.
//
//  "Reverse:|:{substring}":
//  If the message contains the given substring, cut it out, reverse it and add it at the end of the message.
//  If not, print only "error".
//  This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
//
//  "ChangeAll:|:{substring}:|:{replacement}":
//  Changes all occurrences of the given substring with the replacement text.

function chatSecrets(input) {
  let message = input.shift();
  let command = "";

  while ((command = input.shift()) != "Reveal") {
    let commArr = command.split(":|:");
    let type = commArr.shift();
    let additionalInfo = commArr[0];

    if (type == "InsertSpace") {
      message = message.split("");
      message.splice(additionalInfo, 0, " ");
      message = message.join("");
      console.log(message);
    } else if (type == "Reverse") {
      if (message.includes(additionalInfo)) {
        message = message.replace(additionalInfo, "");

        additionalInfo = additionalInfo.split("");
        additionalInfo = additionalInfo.reverse();
        additionalInfo = additionalInfo.join("");
        message += additionalInfo;

        console.log(message);
      } else {
        console.log("error");
      }
    } else if (type == "ChangeAll") {
      if (message.includes(additionalInfo)) {
        message = message.replaceAll(additionalInfo, commArr[1]);
        console.log(message);
      }
    }
  }

  console.log(`You have a new text message: ${message}`);
}

chatSecrets([
  "heVVodar!gniV",

  "ChangeAll:|:V:|:l",

  "Reverse:|:!gnil",

  "InsertSpace:|:5",

  "Reveal",
]);
