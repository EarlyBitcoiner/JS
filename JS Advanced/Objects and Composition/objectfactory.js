function factory(library, objs) {
    
    let result = [];
    
    for (const obj of objs) {
    
        let newObj = { ...obj.template };
        
        for (const func of obj.parts) {
            
            newObj[func] = library[func];
        }

        result.push(newObj);
    }

    return result;
}// must return arr of objs

const library = {

    print: function () {
        console.log(`${this.name} is printing a page`);
    },

    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },

    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },

};


const orders = [

    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },

    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },

    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },

    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);