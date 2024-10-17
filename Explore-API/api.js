const shop ={name:'Rasel', age:24}
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const obj = JSON.parse(shopJSON);
console.log(obj);