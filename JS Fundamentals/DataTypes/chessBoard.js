function makeChessHTML(row) {
    let column = row;
    let black = true;
    console.log(`<div class="chessboard">`);

    for (let r = 0; r < row; ++r){
        console.log(`  <div>`);

        for (let c = 0; c < column; ++c){
            
            if (black == true) {
                console.log(`    <span class = "black"></span>`);
                black = false;
            } else {
                console.log(`    <span class = "white"></span>`);
                black = true;
            }

        }

        console.log(`  </div>`);
    }

    console.log(`</div>`);
}

makeChessHTML(3);