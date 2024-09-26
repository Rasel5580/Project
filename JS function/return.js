function add(price1 , price2){
    const total = price1 + price2;
    return total;
}
const bill = add(10,20);
console.log(bill);


function even(number){
    if(number %2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(even(7));