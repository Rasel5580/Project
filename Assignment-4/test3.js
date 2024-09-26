
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

console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  // Output: true
console.log(calculateFinalScore({ name: "Anik", testScore: 40, schoolGrade: 20, isFFamily: false }));  // Output: false
