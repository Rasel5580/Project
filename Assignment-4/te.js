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

// Example usage:
const interviewTimes = [3, 5, 7, 11, 6];
const isratSerial = 10;

console.log(waitingTime(interviewTimes, isratSerial));  // Output: 24
