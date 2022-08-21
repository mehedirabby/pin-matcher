    function getPin(){
        const pin = generatePin();
        const pinString = pin + '';
        if(pinString.length === 4){
            
            return pin;
        }
        else{
            console.log('4 digit not found',pin);
            return getPin();
        }
    }





function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin()
    //display pin
    const displaPinField = document.getElementById('display-pin');
    displaPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
            
        }
        else if(number === '<' ){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
         
        }
    }
    
    else{
        
        
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value =newTypeNumber;
    }
    console.log();
})
document.getElementById('verify-pin').addEventListener('click',function(){
    const displaPinField = document.getElementById('display-pin');
    const currentPin = displaPinField.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typedNumber = typeNumberField.value;
    const pinSuccessMessege = document.getElementById('pin-success');
    const pinFailureMessege = document.getElementById('pin-failure');
    if(typedNumber === currentPin){
        
        pinSuccessMessege.style.display = 'block';
        pinFailureMessege.style.display = 'none';
    }
    else{
       
        pinFailureMessege.style.display = 'block';
        pinSuccessMessege.style.display = 'none';
    }
})