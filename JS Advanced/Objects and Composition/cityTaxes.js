function cityTaxes(...input) {
    
    let obj = {

        input,

    };
    
    obj['name'] = input[0];
    obj["population"] = input[1];
    obj.treasury = input[2];
    obj.taxRate = 10;

    obj.collectTaxes = function () {
        this.treasury += this.population * this.taxRate;
    }

    obj.applyGrowth = function (percentage) {
        this.population += this.population * (percentage / 100);
    }

    obj.applyRecession = function (percentage) {
        this.treasury -= this.treasury * (percentage / 100);
    }

    return obj;
}

// collectTaxes() - Increase treasury by population * taxRate

// applyGrowth(percentage) - Increase population by given percentage

// applyRecession(percentage) - Decrease treasury by given percentage

const city = cityTaxes(
  "Tortuga",

  7000,

  15000
);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);