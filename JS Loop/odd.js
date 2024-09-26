
// ---For Loop----
let num1;
for(num1 = 0; num1 <=10; num1++){
    if(num1 % 2 !=0)
    console.log(num1);
}


// ---While Loop-----
let num=1;
while(num <= 10){ 
    if(num % 2 !=0)
        console.log(num);
    num++;
}

// ---Odd Total---
let num2;
let sum=0;
for(num2 = 0; num2 <=10; num2++){
    if(num2 % 2 !=0) 
    sum=sum+num;
}
console.log("Total:",sum);