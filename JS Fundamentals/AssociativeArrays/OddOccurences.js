function func(input) {
    let words = input.split(' ');

    let occurrences = new Map();

    for (const word of words) {
        let curr = word.toLowerCase();
        if (occurrences.has(curr)) {
            occurrences.set(curr, occurrences.get(curr) + 1);
        } else {
            occurrences.set(curr, 1);
        };
    }

    for (const [word,count] of occurrences) {
        if (count % 2 == 1) {
            console.log(word);
        }
    }
}

func('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');