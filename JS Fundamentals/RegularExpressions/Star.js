function func(input) {
    input.shift(); // we get rid of the index holding the number of messages.
    let attacked = [];
    let destroyed = [];

    for (const messege of input) {
        // regex finders
        let fname = /@(?<name>[A-Z][a-z]+)/;
        let fpopulation = /:(?<population>\d+)/;
        let ftype = /!(?<population>[AD])!/;
        let farmy = /->(?<army>\d+)/;

        let specialCount = 0;
        let decryptedMess = "";

        for (const char of messege) {
            // countinf special symbols
            if (
                char == "S" ||
                char == "T" ||
                char == "A" ||
                char == "R" ||
                char == "s" ||
                char == "t" ||
                char == "a" ||
                char == "r"
            ) {
                specialCount++;
            }
        }

        for (let char of messege) {
            // decrypting message
            decryptedMess += String.fromCharCode(char.charCodeAt() - specialCount);
        }
      
        let planet = { // creating the planet
            name: fname.exec(decryptedMess),
            population: fpopulation.exec(decryptedMess),
            type: ftype.exec(decryptedMess),
            army: farmy.exec(decryptedMess),
        }

        // check if planet is valid
        if (planet.name == null || planet.population == null || planet.type == null || planet.army == null)
            continue;

        // put planet in corresponding group
        if (planet.type[1] == 'A')
            attacked.push(planet.name[1]);
        else if (planet.type[1] == 'D')
            destroyed.push(planet.name[1]);
  
    }

    // sort alphabeticaly
    attacked.sort();
    destroyed.sort();

    console.log(`Attacked planets: ${attacked.length}`);
    for (const planet of attacked) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyed.length}`);
    for (const planet of destroyed) {
      console.log(`-> ${planet}`);
    }
}

// 1. обхождаме линията стринг и броим броя на всички специални символи s ,t ,a ,r.
// 2. създаваме нов стринг вадейки от ASCII кода на всеки чар броя на специалните символи.
// 3. обхождаме с regex получения стринг в търсене на случай и според случая складираме в един от два масива.
// 4. принтираме данните.

func(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);

func([
  "3",

  "tt(''DGsvywgerx>6444444444%H%1B9444",

  "GQhrr|A977777(H(TTTT",

  "EHfsytsnhf?8555&I&2C9555SR",
]);
