class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

function func(input) {
  let catArr = [];

    for (let inp of input) {
        inp = inp.split(' ');
        let cat = new Cat(inp[0], inp[1]);
        catArr.push(cat);
    };

  for (let i = 0; i < catArr.length; i++) {
    catArr[i].meow();
  }
}

func(["Mellow 2", "Tom 5"]);
