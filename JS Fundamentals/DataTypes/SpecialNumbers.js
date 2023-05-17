function func(n) {
    
    for (let i = 1; i <= n; ++i){

        console.log(`${i} -> ${sumOfDigits(i)}`);
        
    }

}

function sumOfDigits(n) {
    
    let sum = 0;
    let num = n.toString();

    for (let i = 0; i < num.length; ++i){

        sum += Number(num[i]);
    }

    if (sum == 5 || sum == 7 || sum == 11) {
        return true;
    } else {
        return false;
    }
}

func(15); //5 , 7 & 11 are special numbers.