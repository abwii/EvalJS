getTotalPrice = (arr) => {
    let total = 0;
    arr.forEach(element => {
        total += element.quantity * element.price;
    });
    return total;
}



console.log(getTotalPrice([{product: "Milk", quantity: 1, price: 1.5}])); // 1.5

console.log(getTotalPrice([
    {product: "Milk", quantity: 1, price: 1.5}, 
    {product: "Cereals", quantity: 1, price: 2.5}
])) // 4

console.log(getTotalPrice([
    {product: "Milk", quantity: 1, price: 1.5},
    {product: "Eggs", quantity: 12, price: 0.1},
    {product: "Bread", quantity: 2, price: 1.6},
    {product: "Cheese", quantity: 1, price: 4.5}
])) // 10.4
