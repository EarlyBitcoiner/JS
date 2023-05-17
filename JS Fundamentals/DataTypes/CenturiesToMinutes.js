function func(centuries) {
    
    let years = centuries * 100;
    let days = years * 365.24;
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuries} century/ies has ${years} years, ${days} days, ${hours} hoours, ${minutes} minutes.`);
}

func(1);