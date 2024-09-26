const products1 = [
    {name:'body-spray', price:500, quantity: 2},
    {name:'shirt', price:700, quantity: 3}, 
    {name:'pant', price:900, quantity: 5}, 
    {name:'shampoo', price:300, quantity: 1} 
];

function getShoppingTotal(products1){
    let total1 = 0;
    for(const product1 of products1){
        const productCost = product1.price * product1.quantity;
        total1 = total1 + productCost; 
    }
    return total1;


}

const total1 = getShoppingTotal(products1);
console.log('Total Price:',total1);