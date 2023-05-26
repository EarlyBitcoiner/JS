function solve(arr1,arr2) {
    
    let sum = 0;

    for (let i = 0; i < arr1.length; ++i){
        
        if (arr1[i] == arr2[i]) {
            sum += Number(arr1[i]);
            sum += Number(arr2[i]);
        } else {
            console.log(
              `Arrays are not identical. Found difference at ${i} index`
            );
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

solve(["1", "2", "2"], ["1", "2", "3"]);