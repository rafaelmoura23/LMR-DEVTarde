function nParImpar(){
    let numero = document.getElementById("nDigitado").value;

    if(parseInt (numero) % 2 == 0){
        alert("O número é Par")
    } else 
        alert("O Número é Impar")
}
