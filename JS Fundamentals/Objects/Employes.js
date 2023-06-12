class Person {
  constructor(name) {
    this.name = name;
    this.personalNum = name.length;
  }
}

function func(people) {
  let peopleArr = [];

    for (let person of people) {
      peopleArr.push(new Person(person));
    }
    
    for (const person of peopleArr) {
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }
}

func(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
