if(10>15)
{
    console.log("I have a longer value")
}
else
{
    console.log("I have a small Value.")
}

var num=50;
if(num>80)
{
    console.log("A+")
}
else if(num>70 && num<80)
{
    console.log("A-")
}
else{
    console.log("fail")
}




const price=3500;

if(price>=5000){
    // 10% discount
    discount=price*10/100;
    total_price=price-discount;
    console.log(total_price)
}
else if(price >= 3000 && price < 5000){
    // 5% discount
    discount=price*5/100;
    total_price=price-discount;
    console.log(total_price)
}
else{
    console.log(price)
}





let score = 75;
let grade;
if (score >= 90) {
 grade = "A";
} else if (score >= 80) {
 grade = "B";
}
console.log(grade);





let x = 5; 
if (x < 10) { 
    x = x + 3; 
}
 else {
     x = x - 2; 
    } 
console.log(x);



var num = 10;
if (num > 15) {
  console.log("Greater than 15");
} else if (num > 5) {
  console.log("Greater than 5 but less than or equal to 15");
} else {
  console.log("Less than or equal to 5");
}




let result = 10 < "5";