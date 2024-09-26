//add money to the account...

// step-1: add an event...
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // solve the page reload problem...
    event.preventDefault();

    //step-2:get money to added to account...
    const cashOut = document.getElementById('add-money').value;
    console.log(cashOut);

    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber);

    // verify pin number...
    if(pinNumber === '1234'){
       const balance = document.getElementById('account-balance').innerText;
       console.log(balance);

       // step-5: add addMoney with balance...
       const cashOutNumber = parseFloat(cashOut);
       const balanceNumber = parseFloat(balance);
       const newBalance = balanceNumber - cashOutNumber;
       console.log(newBalance);

       document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Invalid  Pin');
    }
})