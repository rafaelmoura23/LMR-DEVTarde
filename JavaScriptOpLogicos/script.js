function nParImpar() {
    let numero = document.getElementById("nDigitado").value;

    if (parseInt(numero) % 2 == 0) {
        alert("O Número " + numero + " é Par")
    } else
        alert("O Número " + numero + " é Impar")
}

let valor1 = parseInt (document.getElementById("nValor1").value);
let valor2 = parseInt (document.getElementById("nValor2").value);
let operacao = document.getElementById("pOperacao");
let resultado;

function calculadora(){
    switch (operacao){
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            if(valor2!=0){
            resultado = valor1 / valor2;
            } else{
                alert("Não é Possível dividir por 0")
            }
            break;
        default:
            alert("Selecione números válidos")
            break;    
    }
}