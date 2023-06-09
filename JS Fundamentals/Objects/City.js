function func(obj) {
    
for (let pair of Object.entries(obj)) {
    
    console.log(`${pair[0]} -> ${pair[1]}`);
}

}

func({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});