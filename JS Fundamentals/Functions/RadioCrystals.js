function solve(input) {
    let desiredThicknes = input.shift();

    for (let thicknes of input) {
        let timesCut = 0;
        let timesLap = 0;
        let timesGrind = 0;
        let timesEtch = 0;

      console.log(`Processing chunk ${thicknes} microns`);

      // Cutting
      while (thicknes / 4 >= desiredThicknes) {
        thicknes = thicknes / 4;
        timesCut++;
      }

        if (timesCut >= 1) {
            console.log(`Cut ${timesCut}x`);
            console.log("Transporting and washing");
            thicknes = Math.floor(thicknes);
        }

      //Laping
      while (thicknes - (thicknes * 0.2) >= desiredThicknes) {
        thicknes -= thicknes * 0.2;
        timesLap++;
      }
        if (timesLap >= 1) {
            console.log(`Lap ${timesLap}x`);
            console.log("Transporting and washing");
            thicknes = Math.floor(thicknes);
        }

      //Grinding
      while (thicknes - 20 >= desiredThicknes) {
        thicknes -= 20;
        timesGrind++;
      }

        if (timesGrind >= 1) {
            console.log(`Grind ${timesGrind}x`);
            console.log("Transporting and washing");
            thicknes = Math.floor(thicknes);
        }

      //Etching
      while (thicknes > desiredThicknes) {
        thicknes -= 2;
        timesEtch++;
      }

        if (timesEtch >= 1) {
            console.log(`Etch ${timesEtch}x`);
            console.log("Transporting and washing");
            thicknes = Math.floor(thicknes);
        }

      //X-raying
      if(thicknes + 1 === desiredThicknes) {
          thicknes += 1;
          console.log(`Xray 1x`);
          console.log("Transporting and washing");
        }
        
        console.log(`Crystal finished being ${thicknes} microns`)
    }

}

// • Cut – cuts the crystal in 4
// • Lap – removes 20% of the crystal’s thickness
// • Grind – removes 20 microns of thickness
// • Etch – removes 2 microns of thickness
// • X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
// • Transporting and washing – removes any imperfections smaller than 1 micron (round down the
// number); do this after every batch of operations that remove material

solve([1375, 50000]);
solve([1000, 4000, 8100]);