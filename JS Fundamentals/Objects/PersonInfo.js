class Person{

    constructor (fName,lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

};

function func(fName, lName, age){
    
    let Petar = new Person(fName, lName, age);
    
    console.log(Petar);
}

func("Peter",

"Pan",

"20");