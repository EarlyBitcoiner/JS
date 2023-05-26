function sort(numbers) {
    
    let sorted = []; // here we will sort the array from the biggest to the smallest.
    let max = -Infinity;
    let size = numbers.length;

    for (let i = 0; i < size; ++i){
        let highestElemIndex = 0;

        for (let elem = 0;elem < numbers.length;++elem) {
            
            if (max < numbers[elem]) {
                max = Number(numbers[elem]);
                highestElemIndex = elem;
            }
        }

        sorted.push(max);
        numbers.splice(highestElemIndex, 1);
        max = -Infinity;
    }

    let rearranged = []; // here we will rearrange the sorted array to fit the demands of the exercise.
    let index = 0;

    while (sorted.length > rearranged.length) {

        rearranged.push(sorted[index]);
        rearranged.push(sorted[(sorted.length - 1) - index]);
        ++index;
    }

    console.log(rearranged);
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);