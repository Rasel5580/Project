function sum (a , b){
    // const result = a + b;
    // return result;
    return a + b;
}
const add = sum(3 , 5);
console.log(add);

const add2 = function(a , b){
    return a+b;
}
const sum2 = add2(3,5);
console.log(sum2);

const add3 =(a , b) => a+b;
const sum4 = add3(2,3);
console.log(sum4);

const multip = (a,b) => a*b;
const multi = multip(2,4);
console.log(multi);

const different =(x , y) => x-y;

const sub = different(8 , 5);
console.log(sub);

const getAge = (person) => person.age;
const student = {name:'Rasel', age:24}
const age = getAge(student);
console.log(age);

const number =[2,4,56,45,34,54];
console.log(...number);