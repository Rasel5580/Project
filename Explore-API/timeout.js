

setTimeout(() => {
    console.log('I am Rasel')
},3000)

let num=0;
const my = setInterval(() => {
    num++;
    if(num >= 5){
        clearInterval(my);
    }
    console.log(my,num);
},2000) 


const rasel =setTimeout(() => {
    console.log('rasel');

    clearTimeout(rasel);
},3000);