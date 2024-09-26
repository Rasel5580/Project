// ---For Loop----
let num1;
for(num1 = 0; num1 <=10; num1++){   
    if(num1 % 2 ==0)
        console.log('Even Number:',num1);
}


// ---While Loop-----
let num=1;
while(num<=10){
    if(num % 2 ==0)
        console.log(' even number:',num);
    num++;
}


// ---Total For Loop----
let i;
let sum=0;
for(i = 0; i <=10; i++){   
    if(i % 2 ==0)
        sum=sum+i;
}
console.log('Total:',sum);