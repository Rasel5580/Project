// has some properties, method
// class Product{
//     country = 'Bangladesh';
//     speak(talk){
//         console.log(`talking about ${talk}`);
//     }
// }
// const lenovo = new Product();
// console.log(lenovo );


class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

// class Truck extends Vehicle{
//     constructor(name, price){

//     }
// }