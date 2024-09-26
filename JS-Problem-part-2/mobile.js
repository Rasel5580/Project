const mobiles = [
    {name:'samsung', price: 20000, camera:'20mp'},
    {name:'xoami', price: 40000, camera:'12mp'},
    {name:'walton', price: 15000, camera:'25mp'},
    {name:'iphone', price: 120000, camera:'12mp'}
];

function getMobile(mobiles){
    let min = mobiles[0];
    for(const phone of mobiles){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const mob = getMobile(mobiles);
console.log('Low Price Mobile:' ,mob);



// Highst Price Mobile--
const mobiles1 = [
    {name:'samsung', price: 20000, camera:'20mp'},
    {name:'xoami', price: 40000, camera:'12mp'},
    {name:'walton', price: 15000, camera:'25mp'},
    {name:'iphone', price: 120000, camera:'12mp'}
];

function getMobile1(mobiles){
    let max = mobiles[0];
    for(const phone of mobiles){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const best = getMobile1(mobiles);
console.log('Best Price Mobile:', best);