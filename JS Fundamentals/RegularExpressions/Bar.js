function func(input) {
    
    let regex =
      /%(?<name>[A-Z][a-z]+)%<(?<product>[A-Z][a-z]+)>\w*\|(?<quantity>\d+)\|[A-Z]*[a-z]*(?<price>\d+(\.\d+)*)\$/;
    let income = 0;

    for (let line of input) {
        if (line === "end of shift")
            break;
        
        let product = null;
        product = regex.exec(line);


        if (product !== null) {
            let name = product.groups['name'];
            let productName = product.groups['product'];
            let price = Number(product.groups['quantity']) * Number(product.groups['price']);

            console.log(`${name}: ${productName} - ${price.toFixed(2)}`);

            income += price;
        }
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

// Print all of the valid lines in the format "{customerName}: {product} - {totalPrice}"
// in the following format: "Total income: {income}"

func([
  "%George%<Croissant>|2|10.3$",

  "%Peter%<Gum>|1|1.3$",

  "%Maria%<Cola>|1|2.4$",

  "end of shift",
]);