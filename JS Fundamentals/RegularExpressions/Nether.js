class Demon{
    constructor(name) {
        this.name = name;
        this.damage = this.calculateDamage();
        this.health = this.calculateHealth();
    }

    getName() {
        return this.name;
    }

    setDamage(damage) {
        this.damage = damage;
    }

    setHealth(health) {
        this.health = health;
    }

    calculateDamage() {
        let regex = /-*\d+\.*\d*|[\*\/]/g;
        let DM = 0;
        let nums = [];

        if (regex.test(this.name)) {
            nums = this.name.match(regex);
        } else {
            this.damage = DM;
            return 0;
        }

        for (let num of nums) {
            if (num != '*' && num != '/') {
                DM += Number(num);
            } else if (num == '*') {
                DM = DM * 2;
            } else if (num == '/') {
                DM = DM / 2;
            }
        }

        return DM;
    }

    calculateHealth() {
        let regex = /[^\d\*\/\+-\.]/g
        let HP = 0;
        let chars = [];

        if (regex.test(this.name)) {
            chars = this.name.match(regex);
        } else {
            this.health = HP;
            return 0;
        }

        for (const char of chars) {
            HP += char.charCodeAt();
        }

        return HP;
    }

    printData() {
        console.log(`${this.name} - ${this.health} health, ${this.damage.toFixed(2)} damage`);
    }
}

function func(input) {
    let lines = input.split(/,\s*/);
    let demons = [];

    for (let name of lines) {
        demons.push(new Demon(name));
    }

    demons.sort((a, b) => {
        let nameA = a.getName();
        let nameB = b.getName();

        if (nameA > nameB)
            return 1;
        else if (nameA < nameB)
            return -1;
        else
            return 0;
    })

    for (let demon of demons) {
        demon.printData();
    }
}

func('M3ph-0.5s-0.5t0.0**');
func('M3ph1st0**, Azazel');
func('Gos/ho');