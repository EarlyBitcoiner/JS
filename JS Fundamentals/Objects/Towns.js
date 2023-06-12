function func(objects) {
    
    let towns = [];

    for (let i = 0; i < objects.length; i++){
        let data = objects[i].split('|');
        towns.push({
            name: data[0],
            latitude: Number(data[1]).toFixed(2),
            longitude: Number(data[2]).toFixed(2),
        })
    }

    for (let i = 0; i < towns.length; i++){
        console.log(towns[i])
    }

    towns.forEach(x => console.log(x));

}

/*{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }

{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }*/

func(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);