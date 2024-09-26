const numbers = [300,500,700,900];

const products = [
    {name:'body-spray', price:500},
    {name:'shirt', price:700},
    {name:'pant', price:900},
    {name:'shampoo', price:300}
];

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price; 
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('Total Price:',total);




