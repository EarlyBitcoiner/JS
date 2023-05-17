function func(number) {
    let num = number.toString();
    let sum = 0;
    let include = false;

    for (let i = 0; i < num.length; ++i){
        
        sum+= Number(num[i]);
    }

    include = sum.toString().includes('9');

    console.log(`${number} Amazing? ${include}`);
}

func(1233);