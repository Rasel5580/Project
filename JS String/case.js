const school='Tammirul Millat';
console.log(school);

const subject='Chemistry';
const book='chemistry';

if(subject.toLowerCase()==book.toLocaleLowerCase()){
    console.log("porbo");
}
else{
    console.log('porbo na');
}



const first = 'Abid';
const last = 'Nabid';
const fullname = first + (' ') + last;
console.log(fullname);

console.log(last.includes('q'));



const myObject = {
    a: 1,
    b: 2,
    c: 3
   };
   
   for (let prop in myObject) {
    console.log(myObject[prop]);
   }