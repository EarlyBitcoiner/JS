function solve(input) {
    
    input.sort(compareFunc);
    
    console.table(input);
}
//                  -1  1
function compareFunc(a, b) {
    
    if (a.length == b.length) {
        a.localeCompare(b);
    } else if (a.length > b.length) {
        return 1;
    } else {
        return -1;
    }
    

}

// ascending order - from lowest to highest

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);