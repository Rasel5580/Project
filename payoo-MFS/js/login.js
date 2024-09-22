// step-1: set Number...
document.getElementById('login-btn').addEventListener('click',function(event){
    // step-2: prevent defult...
    event.preventDefault();
     console.log('login button');

    // step-3: get the phone Number....
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);

})