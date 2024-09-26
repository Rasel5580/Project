
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    console.log(addMoneyNumber);

    const pin = document.getElementById('input-pin').value;
    // const pinNumber = parseFloat(pin);
    console.log(pin);

    if(pinNumber === '1234'){
        const accountBalance = document.getElementById('account-balance').innerText;
        // const accountNumber = parseFloat(accountBalance);
        console.log(accountBalance);

    }
    else{
        alert('Invalided Pin');
    }
})