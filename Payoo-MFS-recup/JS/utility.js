
function getInputFiledValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber; 
}

function getTextFiledValueById(id){
    const textValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(textValue);
    return inputNumber; 
    return textNumber;
}
