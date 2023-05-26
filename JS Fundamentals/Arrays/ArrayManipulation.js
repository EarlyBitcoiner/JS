function solve(numbers,commands) {
    
    let result = "";

    for (let i = 0; i < commands.length; ++i) {
        let currCommand = commands[i].split(" ");


        switch (currCommand[0]) {
            case "addMany": {
                let index = currCommand[1];
                let count = 0;

                for (let e = 2; e < currCommand.length; ++e){
                    let element = currCommand[e];
                    numbers.splice(index + count, 0, element);
                    count++;
                }
                break;
            }
            case "add": {
                let index = currCommand[1];
                let element = currCommand[2];
                numbers.splice(index, 0, element);
                break;
            }
            case "contains": {
                if (numbers.includes(currCommand[1])) {
                    console.log(numbers.indexOf(currCommand[1]));
                } else {
                    console.log("-1");
                }
                break;
            }
            case "remove": {
                let index = currCommand[1];
                numbers.splice(index, 1);
                break;
            }
            case "shift": {
                for (let e = 0; e < currCommand[1]; ++e){
                    let first = numbers.shift();
                    numbers.push(first);
                };
                break;
            }
            case "sumPairs": {
                for (let e = 0; e < numbers.length - 1; ++e){
                    numbers.splice(e, 2, numbers[e] + numbers[e + 1]);
                }
                break;
            }
            case "print": {
                result = numbers.join(", ");
                console.log(result);
                break;
            }
            default: {
                console.log("Invalid command entered.");
                break;
            }
        }
    }

}

/* 
add <index> <element> – adds element at the specified index (elements right from this position
inclusively are shifted to the right).

addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the
specified index.

contains <element> – prints the index of the first occurrence of the specified element (if exists) in the
array or -1 if the element is not found.

remove <index> – removes the element at the specified index.

shift <positions> – shifts every element of the array the number of positions to the left (with
rotation).
For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]

sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].

print – stop receiving more commands and print the last state of the array in the following format:
 `[ {element1}, {element2}, …elementN} ]`

 Note: The elements in the array must be joined by comma and space (, ).
*/

solve([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains 3", "print"]);

solve(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);