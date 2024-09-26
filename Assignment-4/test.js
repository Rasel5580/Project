
function calculateTax(income, expenses) {  
    if (income <= 0 || expenses <= 0 || expenses > income) {
    return "Invalid Input";
    }

    let profit = income - expenses;
    let tax = profit * .20;
    return tax;
}
    




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






function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
    const digit = /\d/.test(name);
    return digit;
}






function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || obj === null ||
        typeof obj.name !== 'string' || 
        typeof obj.testScore !== 'number' || 
        typeof obj.schoolGrade !== 'number' || 
        typeof obj.isFFamily !== 'boolean'){
        return "Invalid Input";
    }

    const result = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20 : 0);
   
    return result >= 80;
}






function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let total = 0;
    for (let time of waitingTimes) {
        total += time;
    }
    const averageTime = Math.round(total / waitingTimes.length);

    const remainingPeople = serialNumber - waitingTimes.length - 1;

    return remainingPeople * averageTime;
}

