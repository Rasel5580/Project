const a =56;

const person ={
    name:'sakib',
    age: 24
}

const message = `This is ${person.name} his ${person.age} years old.`
console.log (message);

const squre = x => x*x;
const sum = (a, b) => a+b;



const data = [{id:1 , name:'Rasel', add:'kapasia'}];
console.log(data[0].add);


const product ={
    count: 5000,
   data:[
        {id:1 , name:'Rasel', add:'kapasia'},
        {id:1 , name:'Raihan', add:'kapasia'}
    ]
}
console.log(product.data[1].name);