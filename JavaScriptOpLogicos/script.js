function nParImpar(){
    let numero = document.getElementById("nDigitado").value;

    if(parseInt (numero) % 2 == 0){
        alert("O Número " +numero+ " é Par")
    } else 
        alert("O Número " +numero+ " é Impar")
}
