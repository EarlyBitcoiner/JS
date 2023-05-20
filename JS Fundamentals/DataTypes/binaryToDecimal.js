function solve(str) {
  let binary = str.split("").reverse().join("");
  //console.log(binary);

  let decimal = 0;

  for (let i = 0; i < binary.length; ++i) {
    if (binary[i] == "1") {
      decimal += Math.pow(2, i);
    }
  }

  console.log(decimal);
}

solve("11111111");
