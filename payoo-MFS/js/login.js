// step-1: set Number...
document.getElementById('login-btn').addEventListener('click',function(event){
    // step-2: prevent d...
    event.preventDefault(); 

    // step-3: get the phone-number....
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin').value;
    console.log(phoneNumber, pinNumber);
    // step-4: validate phone number...
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong phone number or pin');
    }

})