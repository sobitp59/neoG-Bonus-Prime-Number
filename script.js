let input = document.getElementById('input-value');
let btn = document.getElementById('check-button');
let output = document.getElementById('output-answer');

btn.addEventListener('click', ()=>{
    number = Number(input.value)
    checkPrime(number)

    
})

let checkPrime = (number) => {

    isPrime = true

    if(number == ''){
        output.textContent = 'please enter your birth date'
    }

    if(number < 1 || number > 31){
        output.textContent = 'enter a valid birth date'
    }

    if(number === 1){
        output.textContent = '1 is neither prime nor composite'
    }
    
    
    if(number > 1){
        for(let i = 2; i < number; i++){
            if(number%i===0){
                isPrime = false
                break
            }
        }

        if(isPrime){
            output.textContent = `${number} is a prime number`
        }
        
        if(!isPrime){
            output.textContent = `${number} is not a prime number`
        }
    }

}
