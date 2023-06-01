function func(input) {
    let string = String(input).split('');
    let num = 0;

    for (let char of string)
        num += Number(char);
    
    while (num / string.length < 5) {
        num = 0;
        string.push('9');

        for (let char of string) {
    
            num += Number(char);

        }
    }

    console.log(string.join(''));

}

//101
//5835

func(101);
func(5835);