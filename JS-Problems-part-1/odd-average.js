// Average of Odd Numbers

function oddNumber(numbers){
    const odds =[];
    for(const number of numbers){
        if(number % 2!==0){
            //console.log(number);
            odds.push(number);
        }
    }
    // console.log(odds);
    let sum=0;
    for(const number of odds){
        sum =sum + number;
    }
    const count = odds.length;
    console.log(sum,count);
    const average= sum / count;
    return average;
}
const numbers =[7, 42, 13, 58, 65, 81];
const average = oddNumber(numbers);
console.log("Average of the Odd Number:", average);