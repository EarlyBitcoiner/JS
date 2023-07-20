function convert(json) {
    
    let arr = JSON.parse(json);
    let keys = '    <tr>';

    console.log('<table>');

    for (const key of Object.keys(arr[0])) {
        
        keys += `<th>${key}</th>`;
    }

    keys += '</tr>';
    console.log(keys);

    for (const obj of arr) {
        let values = '    <tr>'
        
        for (const value of Object.values(obj)) {
            
            values += `<td>${value}</td>`;
        }

        values += "</tr>";
        console.log(values);
    }

    console.log('</table>')
}

convert(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`);

convert(`[{"Name":"Pesho",

"Score":4,

" Grade":8},

{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`);