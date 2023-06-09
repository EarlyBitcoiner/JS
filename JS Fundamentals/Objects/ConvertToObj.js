function convert(json) {
    
    let obj = JSON.parse(json);

    for (let pair of Object.entries(obj)) {
        console.log(`${pair[0]} : ${pair[1]}`);
    }
    
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');