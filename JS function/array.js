function even_number(numbers){
    for(const number of numbers){
        if(number %2!=0){
            console.log(number);
        }
    }
}
const numbers =[5,10,12,13,24,33,47];
even_number(numbers);





function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }