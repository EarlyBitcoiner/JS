function solve(...input) {
    
    let obj = {};
    
    obj['name'] = input[0];
    obj["population"] = input[1];
    obj.treasury = input[2];

    return obj;
}

solve(
  "Tortuga",

  7000,

  15000
);