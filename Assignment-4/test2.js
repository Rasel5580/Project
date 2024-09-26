
function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
    const digit = /\d/.test(name);
    return digit;
}
console.log(checkDigitsInName("Rajib"));
console.log(checkDigitsInName("Rajib80"));
console.log(checkDigitsInName("Rajib45Prf"));
console.log(checkDigitsInName(34567));