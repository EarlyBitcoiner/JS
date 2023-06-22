function func(input) {
  let validFurniture = [];
  let moneySpend = 0;

  let regex =
    /(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+[\.\d]*)!(?<quantity>\d+)/;

    while (input.length > 0) {
        let match = regex.exec(input.shift());

        if (match != null) {
            validFurniture.push(match.groups['furniture']);
            moneySpend += Number(match.groups['price']) * Number(match.groups['quantity']);
        }
    }

    console.log('Bought furniture:');

    for (let furniture of validFurniture) {
        console.log(furniture);
    }

    console.log(`Total money spend: ${moneySpend.toFixed(2)}`);
}

func([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

func(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',

    '>Invalid<<!5',

    '>>TV<<300.21314!20',

    '>>Invalid<!5',

    '>>TV<<30.21314!5',

    '>>Invalid<<!!5',

    'Purchase']);