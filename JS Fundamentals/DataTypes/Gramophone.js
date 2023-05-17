function func(band,album,song) {
    
    let songDuration = (album.length * band.length) * song.length / 2;
    let rotations = songDuration / 2.5;

    console.log(`The plate was rotated ${rotations.toFixed() } times.`); // Math.ceil(rotations); will work as well but round it the to the closest bigger number.
}

func("Fyre","Otkrovenie","Dali da zamina");

// The plate makes a full rotation every 2.5 seconds.
// The song duration in seconds is calculate by the given formula:
// (albumName.length * bandName.length) * song-name.length / 2
// As output, you should print the following message:
//  `The plate was rotated {rotations} times.`
// Rotations should be rounded up.