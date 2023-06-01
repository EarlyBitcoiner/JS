function solve(input) {
    let length = 0;
    let variant = 1;
    let sequence = "AT CG TT AG GG";
    sequence = sequence.split(" ");

    while (length < input) {
        length++;

        let currentChars = sequence.shift();
        sequence.push(currentChars);

        if (variant == 2)
            console.log(`*${currentChars[0]}--${currentChars[1]}*`);
        else if (variant == 3)
            console.log(`${currentChars[0]}----${currentChars[1]}`);
        else if (variant == 4)
            console.log(`*${currentChars[0]}--${currentChars[1]}*`);
        else
            console.log(`**${currentChars[0]}${currentChars[1]}**`);
    }

}

// **AT**
// *C--G*
// T----T
// *A--G*


solve(4);
solve(10);