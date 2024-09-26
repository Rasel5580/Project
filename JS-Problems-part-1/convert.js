// 12 inc =1 feet

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const rasel = inchToFeet(75);
console.log(rasel);

// 1 mile =1.60934 kilometer

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
console.log("kilo:", mileToKilometer(5));