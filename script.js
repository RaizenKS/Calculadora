class Calculadora{
    constructor(){
        this.numtop = document.querySelector('#number-top');
        this.resultado = document.querySelector('#resultado');
        this.reset = 0;
    }

    //Operation aritmetics
    operation(){
        let array = calculadora.numtop.textContent.split(' ');
        let num = undefined;

        for(let i=0; i<array.length; i++){
            if(num == undefined){
                switch(array[i]){
                    case '+': num = parseFloat(array[i-1]) + parseFloat(array[i+1]); break  
                    case '-': num = parseFloat(array[i-1]) - parseFloat(array[i+1]); break 
                    case 'X': num = parseFloat(array[i-1]) * parseFloat(array[i+1]); break 
                    case '*': num = parseFloat(array[i-1]) * parseFloat(array[i+1]); break 
                    case '/': num = parseFloat(array[i-1]) / parseFloat(array[i+1]); break 
                }
            }else{
                switch(array[i]){
                    case '+': num = num + parseFloat(array[i+1]); break  
                    case '-': num = num - parseFloat(array[i+1]); break 
                    case 'X': num = num * parseFloat(array[i+1]); break 
                    case '*': num = num * parseFloat(array[i+1]); break 
                    case '/': num = num / parseFloat(array[i+1]); break 
                }               
            }
        }
       
        if(num){
            calculadora.resultado.textContent = num;
            calculadora.numtop.textContent = num; 
        }else{
            calculadora.resultado.textContent = '0';
            calculadora.numtop.textContent = '0';
        }
         
    }

    //check the last digits
    checkLastDigit(input, numtop, reg){
        if((
            (!reg.test(input) && input != 'AC') &&
            !reg.test(numtop.substring(numtop.length - 1))
        )){
            return true
        }else{
            return false
        }  
    }

    //Clean all values of calculator
    clearValue(){
        calculadora.numtop.textContent = '0';
        calculadora.resultado.textContent = '0';
    }

    //When btn press, create the numbers and put in variable numtop
    btnPress(btn){
        let input = btn;
        let numtop = calculadora.numtop.textContent;
        let reg = new RegExp('^\\d+$'); 

        if(calculadora.checkLastDigit(input,numtop,reg)){
            return false;
        }

        if(reg.test(input)){ 
            if(numtop == '0'){
                calculadora.numtop.textContent = input;
            }
            else{
                calculadora.numtop.textContent += input; 
            }    
        }
        
        //add spaces beetween the numbers and the operators
        if(!reg.test(input) && 
        (input == '.' || input == '/' || input == '+' || input == 'X' || input == '-' || input == 'c' || input == '*')){
            if(input !== '.'){
                calculadora.numtop.textContent += ' ' + input + ' ';
            }else{
                calculadora.numtop.textContent += input;
            }  
        }

        //Reset
        if(input == "AC" || input == 'c'){
            calculadora.clearValue()
        //Result
        }else if(input == "=" || input == "Enter"){
            calculadora.operation();
        }
    }
}

let buttons = document.querySelectorAll(".buttons")

const calculadora = new Calculadora();

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        calculadora.btnPress(buttons[i].textContent)
    })
}

document.addEventListener('keypress', (event)=> {
    calculadora.btnPress(event.key)
})


