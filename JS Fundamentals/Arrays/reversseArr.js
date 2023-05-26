function solve(nums,arr) {
    
    let arr1 = [];
    
    for (let i = nums - 1; i >= 0; --i){
        
        arr1.push(arr[i]);
    }

    console.table(arr1);
}

solve(4,[123,43,343,232,12]);