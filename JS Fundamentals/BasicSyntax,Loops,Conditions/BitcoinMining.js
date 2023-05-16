function func(arr) {
    let money = 0;
    let bitcoins = 0;
    let dayOfFirstPurchase;
  let bitcoinPrice = 11949.16;
  let goldGramPrice = 67.51;

  for (let i = 1; i <= arr.length; ++i) {
    let current = arr[i - 1];

    if (i % 3 == 0) {
      current -= current * 0.3;
    }

      money += current * 67.51;
      
      if (money >= bitcoinPrice) {
          
          if (bitcoins == 0) {
              dayOfFirstPurchase = i;
          }

          bitcoins++;
          money -= bitcoinPrice;
      }
    }
    
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0)
        console.log(`Day of the first purchased bitcoin is ${dayOfFirstPurchase}`);
    
    console.log(`Left Money: ${money.toFixed(2)} lv.`);
}

func([100, 200, 300]);
