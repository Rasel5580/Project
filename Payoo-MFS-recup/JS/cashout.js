
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFiledValueById('cash-out-money');
    const pinNumber = getInputFiledValueById('input-cash-out-pin');

    if(pinNumber === 123){
        const balance = getTextFiledValueById('account-balance'); 
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
})