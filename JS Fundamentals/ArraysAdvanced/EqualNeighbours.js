function solve(input) {
    
    let rows = input.length - 1;
    let columns = input[0].length - 1;

    let duplicates = 0;

    for (let r = 0; r <= rows; r++){
        for (let c = 0; c <= columns; c++){
            
            if (r < rows) {
                if (input[r][c] == input[r + 1][c])
                    duplicates++;
            }
            if (c < columns) {
                if (input[r][c] == input[r][c + 1])
                    duplicates++;
            }
        }
    }

    console.log(duplicates);
}

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
solve([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);