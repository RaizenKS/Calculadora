// Variaveis
const score = document.querySelector('#score');
const telaOperador = document.querySelector("#tela-operador");
const buttons = document.querySelectorAll('.bt');
const operadores = document.querySelectorAll('.op');
const back = document.querySelector(".btX");
const reset = document.querySelector('.btR');
const enter = document.querySelector('.btE');
let w = 0;

// CHAMAR DADOS E PASSAR PARA CALCULADORA

// Funções
function atualizar(){
if(calculadora.currentNumber !==""){
    score.textContent = calculadora.currentNumber;
}

else{
    calculadora.currentNumber = "0";
    score.textContent = calculadora.currentNumber;
}

}

function conversaoNum(x){
   return parseFloat(x);
}
function conversaoString(x){
    return x.toString();
}


// Chamar numeros
buttons.forEach((num, index) =>{
    
    num.addEventListener('click', function(){
        // PRIMEIRO NUMERO 
       if(calculadora.operador === "" && calculadora.currentAnswer === ""){
       calculadora.currentNumber += index;
       atualizar();
       calculadora.currentNumber = conversaoNum(calculadora.currentNumber);
       calculadora.num1 = calculadora.currentNumber;
       calculadora.currentNumber = conversaoString(calculadora.currentNumber);
       w=1;
       }

       // Continuar fazendo calculos após o primeiro enter
       else if(calculadora.currentAnswer !== "" && calculadora.operador !== ""){
        
        calculadora.currentNumber += index;
        calculadora.currentNumber = conversaoNum(calculadora.currentNumber);
        atualizar();
        calculadora.num1 = calculadora.currentNumber;
        calculadora.currentNumber = conversaoString(calculadora.currentNumber);
        w=1;
       }

    //Caso a pessoa clique em um numero qualquer após dar o primeiro enter
       else if(calculadora.onOf === true && calculadora.operador === ""){
        calculadora.Reset();
        calculadora.currentNumber += index;
        atualizar();
        calculadora.currentNumber = conversaoNum(calculadora.currentNumber);
        calculadora.num1 = calculadora.currentNumber;
        calculadora.currentNumber = conversaoString(calculadora.currentNumber);
        w=1;
       }

       // SEGUNDO NUMERO
       else{
       if(calculadora.num2 === ""){calculadora.currentNumber = "";}
       if(calculadora.onOf === false){
        calculadora.currentNumber += index;
        atualizar();
        calculadora.currentNumber = conversaoNum(calculadora.currentNumber);
        calculadora.num2 = calculadora.currentNumber;
        calculadora.currentNumber = conversaoString(calculadora.currentNumber);
        w=2;
       } 
    }
    
    })

})

// Chamar operadores

operadores.forEach((op) =>{
    op.addEventListener('click',function(){

        if(calculadora.num1 !== "" && calculadora.currentAnswer === ""){
            telaOperador.classList.remove("hidden");
            if(calculadora.operador === ""){
                telaOperador.textContent = op.textContent;
                calculadora.operador = op.textContent;
            }
        }
        else if(calculadora.currentAnswer !==""){
               if(calculadora.num1 !==""){
                calculadora.currentNumber = "0"; 
                calculadora.num1 = "";
                calculadora.num2 = "";
               } 
                telaOperador.classList.remove("hidden");
                if(calculadora.num1 === "" ){
                    telaOperador.textContent = op.textContent;
                    calculadora.operador = op.textContent;
                } 

                atualizar();
        }
        else{alert("Escolha um numero primeiro")}
        w=4;

    })

})

//Enter

enter.addEventListener("click", function(){
    if(calculadora.num1 !== "" && calculadora.num2 !=="" && calculadora.operador !==""){
        calculadora.currentNumber = calculadora.Operacao(calculadora.num1, calculadora.num2);
        calculadora.currentAnswer = calculadora.Operacao(calculadora.num1, calculadora.num2);
        calculadora.operador = "";
        telaOperador.classList.add("hidden");
        calculadora.num1 = "0";
        calculadora.num2 = "0";
        calculadora.onOf = true;
        atualizar();
        calculadora.currentNumber = "0";
    } 

    // DEPOIS DO PRIMEIRO ENTER
    else if(calculadora.num1 !== "" && calculadora.currentAnswer !=="" && calculadora.operador !==""){
        calculadora.currentNumber = calculadora.Operacao(calculadora.currentAnswer, calculadora.num1);
        calculadora.currentAnswer = calculadora.Operacao(calculadora.currentAnswer, calculadora.num1);
        calculadora.operador = "";
        atualizar();
        calculadora.num1 = "";
        calculadora.currentNumber = "";
        telaOperador.classList.add("hidden");
    }
    else{alert("escolha o operador e o proximo numero")}

    w=3;
})

// Reset

reset.addEventListener("click", function(){
    calculadora.Reset();
    telaOperador.classList.add("hidden");
    atualizar();
})

// PARA VOLTAR UM NUMERO
back.addEventListener("click", function(){
    if(calculadora.currentNumber.length >=0){
        if(w===1){
            calculadora.currentNumber = conversaoString(calculadora.currentNumber);
            calculadora.type = calculadora.currentNumber.length -1;
            calculadora.num1 = calculadora.currentNumber.slice(0, calculadora.type);
            calculadora.currentNumber = calculadora.currentNumber.slice(0, calculadora.type); 
            calculadora.num1 = conversaoNum(calculadora.currentNumber);
            atualizar();
        }

        else if(w===2){
            calculadora.currentNumber = conversaoString(calculadora.currentNumber);
            calculadora.type = calculadora.currentNumber.length -1;
            calculadora.num2 = calculadora.currentNumber.slice(0, calculadora.type);
            calculadora.currentNumber = calculadora.currentNumber.slice(0, calculadora.type); 
            calculadora.num2 = conversaoNum(calculadora.currentNumber);
            atualizar();
        }  
        
        else if(w===3 || w===4){
            alert("escolha outro numero");
        }     
 
    }

})










