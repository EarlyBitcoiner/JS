function func(input) {
    let regex = /\b(?<day>\d{2})([ -\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

    let validDate = null;

    while ((validDate = regex.exec(input)) !== null) {
        console.log(`Day: ${validDate.groups['day']}, Month: ${validDate.groups['month']}, Year: ${validDate.groups['year']}`);

        validDate = null;
    }
    
}

func(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);