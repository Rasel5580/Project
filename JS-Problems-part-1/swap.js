let a=5;
let b=7;
console.log(a,b);


// const x=a+b;
// a=x-a;
// b=x-a;

const temp = a;
a = b;
b = temp;
console.log(a , b);

let x=5;
let y=7;
[x, y] = [y, x];
console.log(x , y);

