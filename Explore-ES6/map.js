const numbers = [4, 5, 6, 7, 10];

function doubleIt(num){
    return num*2;
}

const result = numbers.map(doubleIt);
console.log(result);


// const doubled = [];
// for (const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled)


const numbers1 = [2,4,6,8];
const doubled = numbers1.map(num => num*2);
console.log(doubled);


const player =[55,70,65,35,70,60,24,50];

const selected = player.filter(p => p > 50);
const selected1 = player.filter(p => p % 2 != 0);

console.log(selected,selected1);




const num = [2,3,2,4,7,8,4];
const total = num.reduce((previous, current) => previous + current, 0);

console.log(total);

const sum = num.reduce((p, c) => p+c,0);
console.log(sum);