function solve(input) {
  let products = [];

  for (let i = 0; i < input.length; i++) {
    let [town, name, price] = input[i].split(" | ");
    let product = { town, name, price: Number(price) };

    if (products.filter((x) => x.name === name).length > 0) {
      let obj = products.find((x) => x.name === name);

      if (obj.price > Number(price)) {
        obj.price = Number(price);
        obj.town = town;
      }
    } else {
      products.push(product);
    }
  }

  for (let product of products) {
      console.log(`${product.name} -> ${product.price} (${product.town})`)
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
