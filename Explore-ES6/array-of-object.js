const products =[
    {id:1, name:'Lenovo', price:50000},
    {id:1, name:'HP', price:80000},
    {id:1, name:'Apple', price:150000}
]

// map 
// const name = products.map(product => product.price);
// console.log(name);

const exp = product.filter (p => p.price > 50000);
console.log(exp);