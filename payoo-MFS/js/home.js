//add money to the account...

// step-1: add an event...
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // solve the page reload problem...
    event.preventDefault();

    //step-2:get money to added to account...
    const addMoney = document.getElementById('add-money').value;
    console.log(addMoney);

    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber);

    if(pinNumber === '50'){
       
    }
    else{
        alert('Wrong Pin');
    }
})