function func(people,group,day) {
    
    let sum;

    if (group == "Students") {
        
        switch (day) {
            case "Sunday":
                sum = 10.46 * people;
                break;
            case "Saturday":
                sum = 9.80 * people;
                break;
            case "Friday":
                sum = 8.45 * people;
                break;
        }

        if (people >= 30)
            sum -= sum * 0.15;

    } else if (group == "Business") {

        if (people >= 100)
            people -= 10;
      
         switch (day) {
           case "Sunday":
             sum = 16 * people;
             break;
           case "Saturday":
             sum = 15.60 * people;
             break;
           case "Friday":
             sum = 10.90 * people;
             break;
         }
    } else if (group == "Regulars") {
        
         switch (day) {
           case "Sunday":
             sum = 22.50 * people;
             break;
           case "Saturday":
             sum = 20 * people;
             break;
           case "Friday":
             sum = 15 * people;
             break;
        }
        
        if (people >= 10 && people <= 20)
            sum -= sum * 0.05;
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}

func(40,"Regulars","Saturday");