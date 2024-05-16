    const calculadora = {
    currentNumber:"",
    num1: "",
    num2: "",
    operador: "",
    currentAnswer:"",
    onOf: false,
    type: "",

    Operacao(x, y) {
        // Verificação de NaN
        if (isNaN(x)) {
            x = 0;
        }
        if (isNaN(y)) {
            y = 0;
        }
        
        switch (this.operador) {
            case "+":
                return x + y;
            case "-":
                return x - y;
            case "*":
                return x * y;
            case "/":
                return x / y;
            default:
                return null; // Caso o operador não seja reconhecido
        }
    },

    Reset(){this.num1 = ""; this.num2 = ""; this.currentNumber = "0"; this.operador = ""; this.currentAnswer = "";
     this.onOf = false; this.type = ""}

}
