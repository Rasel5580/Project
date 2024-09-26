const heights =[65,55,56,70,60,64,62,74,76,65];

function getMax(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}

const max = getMax (heights);
console.log('max value is:',max);