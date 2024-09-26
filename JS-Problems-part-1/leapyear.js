// Leap-Year---


function isLeapYear (year){
    if(year % 4===0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isLeapYear (2024));
const isLeap= isLeapYear (2024);
console.log(isLeap);

function isLeapYear2 (year){
    if(year % 100 !==0 && year % 4===0){
       return true; 
    }
    else if(year % 100===0 && year % 400===0){
        return true;
    }
    else{
        return false;
    }
}
const leap2 =isLeapYear2(2052);
console.log(leap2);