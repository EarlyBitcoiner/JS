class Hero{
    constructor(name, level, items) {
        this.name = name;
        this.level = Number(level);
        this.items = items;
    }

    toString() {
        console.log(`Hero: ${this.name}`);
        console.log(`level => ${this.level}`);
        console.log(`items => ${this.items.join(", ")}`);
    }
}

function func(heroes) {
    let heroArr = [];
    
    for (const hero of heroes) {
        let data = hero.split(" / ");
        let items = data[2].split(", ");
    
        heroArr.push(new Hero(data[0],data[1],items));
    }

    heroArr.sort((l, r) => {
        if (l.level < r.level)
            return -1;
        else if (l.level > r.level)
            return 1;
        else
            return 0;
    });

    heroArr.forEach(x => x.toString());
}

func([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);