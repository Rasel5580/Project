
function sendNotification(email){  
    let part = email.split('@');
    if (part.length !== 2) {
    return "Invalid Email";
    }

    let user = part[0];
    let domain = part[1];
    let notification = `${user} sent you an email from ${domain}`;
    return notification;
}
let email = "zihad.ph@gmail.com";
let notification = sendNotification(email);
console.log(notification);
    