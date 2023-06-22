function func(input) {
    let tickets = input.split(/,\s+/);
    let regex =
        /([a-z]*)(?<WL>[@#\$\^]{6,10})([a-z]*)(?<WR>[@#\$\^]{6,10})*([a-z]*)/gi;
    
    for (let ticket of tickets) {
        let result = ticket.exec(regex);
        
        if (result === null) {
            console.log("invalid ticket");
        }
    }

}

func('Cash$$$$$$Ca$$$$$$sh');