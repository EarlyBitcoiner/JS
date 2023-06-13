class Storage{
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        if (product.quantity > this.capacity)
            return;
        else {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.quantity * product.price;
        }
    }
    
    getProducts() {
        let str = "";
        let jsons = [];
        for (let product of this.storage) {
            jsons.push(JSON.stringify(product));
        }

        str = jsons.join(`\n`)

        return str;
    }
}

let productOne = {
  name: "Cucamber",

  price: 1.5,
  quantity: 15,
};

let productTwo = {
  name: "Tomato",

  price: 0.9,
  quantity: 25,
};

let productThree = {
  name: "Bread",

  price: 1.1,
  quantity: 8,
};

let storage = new Storage(50);

storage.addProduct(productOne);

storage.addProduct(productTwo);

storage.addProduct(productThree);

console.log(storage.getProducts());

console.log(storage.capacity);

console.log(storage.totalCost);