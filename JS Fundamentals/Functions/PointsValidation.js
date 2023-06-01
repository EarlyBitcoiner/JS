function main(input) {
    
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    calcDistanceBetweenPoints(x1, y1, 0, 0);
    calcDistanceBetweenPoints(x2, y2, 0, 0);
    calcDistanceBetweenPoints(x1, y1, x2, y2);

}

function calcDistanceBetweenPoints(x1, y1, x2, y2) {
    
    let num = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    console.log(`Distance between {${x1} , ${y1}} and {${x2} , ${y2}} is ${num}`);
}

main([3, 0, 0, 4]);
main([2, 1, 1, 1]);