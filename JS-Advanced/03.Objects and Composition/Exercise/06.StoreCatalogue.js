function solve(input) {

    let products = [];

    for (let i = 0; i < input.length; i++) {
        let [name, price] = input[i].split(" : ");

        let product = {name, price};
        products.push(product);
    }

    let char = ''
    products = products.sort((a, b) => (a.name).localeCompare(b.name))
    for (let product of products) {
        let firstLetter = product.name[0];
        if(firstLetter !== char) {
            console.log(firstLetter);
            char = firstLetter;
        }
        console.log(`${product.name}: ${product.price}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)