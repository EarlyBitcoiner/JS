function func(inputJSON) {
    
    let termsObj = [];
    let terms = [];
    let definitions = [];


    for (let json of inputJSON) {
        
        let current = JSON.parse(json);
        let update = false;

        for (const term of termsObj) {
            
            if (Object.keys(term) == Object.keys(current)) {
                term = current;
                update = true;
                break;
            }
        }

        if (!update)
            termsObj.push(current);

    }

    termsObj.sort((l, r) => {
        let lTerm = Object.keys(l);
        let rTerm = Object.keys(r);
        if (lTerm > rTerm)
            return 1;
        else if (lTerm < rTerm)
            return -1;
        else
            return 0;
    });

    for (let i = 0; i < termsObj.length; i++){
        terms.push(Object.keys(termsObj[i]));
        definitions.push(Object.values(termsObj[i]));
        // let term = terms[i].slice(0, Object.keys(termsObj[i]).length);
        // let definition = terms[i].slice(Object.keys(termsObj[i]).length);
         console.log(`Term: ${terms[i]} => Definition: ${definitions[i]}`);
    }
}

func([

`{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}`,

`{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}`,

`{"Boiler":"A fuel-burning apparatus or container for heating water."}`,

`{"Tape":"A narrow strip of material, typically used to hold or fasten something."}`,

`{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}`

]);