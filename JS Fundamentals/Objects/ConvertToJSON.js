function convert(fName,lName,hairColor) {
    
    let person1 = {
    
        firstName : fName,
        lastName : lName,
        hairColor : hairColor,
    }
    
    let person2 = {};

    person2.firstName = fName;
    person2['lastName'] = lName;
    person2['hairColor'] = hairColor;

    let person1json = JSON.stringify(person1);
    let person2json = JSON.stringify(person2);

    console.log(person1json);
    console.log(`--------------------------`);
    console.log(person2json);
}

convert('George', 'Jones',

'Brown');