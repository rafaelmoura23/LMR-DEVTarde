function boasVindas(){ 
let nome;
let sobrenome;

nome = prompt("Digite o Seu Nome","Digite Aqui");
sobrenome = prompt("Digite o Seu Sobrenome","Digite Aqui");

alert("Olá " +nome +" "+sobrenome);
}

function soma(){
    let num1,num2,soma;

    num1 = prompt("Digite um Número");
    num2 = prompt("Digite um Número");
    soma = parseInt(num1)+parseInt(num2);

    alert(num1+ " + " +num2+ " = " +soma);
}

function subtracao(){
    let num1,num2,sub;

    num1 = prompt("Digite um Número");
    num2 = prompt("Digite um Número");
    sub = parseInt(num1)-parseInt(num2);

    alert(num1+ " - " +num2+ " = " +sub);
}

function multiplicacao(){
    let num1,num2,mult;

    num1 = prompt("Digite um Número");
    num2 = prompt("Digite um Número");
    mult = parseInt(num1)*parseInt(num2);

    alert(num1+ " * " +num2+ " = " +mult);
}

function divisao(){
let num1,divisao;
let num2 = 0;

    num1 = prompt("Digite um Número");
    num2 = prompt("Digite um Número");

    while(num2==0){
    alert("Não é Possível dividir por zero,  TRY AGAIN");
    num2 = prompt("Digite outro Número");
    }
    if(num2!=0){
        divisao = parseInt(num1)/parseInt(num2);
        alert(num1+ " / " +num2+ " = " +divisao);
    } else{
        alert("Não é Possível dividir por zero,  TRY AGAIN");
    }
}

/*
    let num1,num2,divisao;

    num1 = prompt("Digite um Número");
    num2 = prompt("Digite um Número");
    if(num2!=0){
        divisao = parseInt(num1)/parseInt(num2);
        alert(num1+ " / " +num2+ " = " +divisao);
    } else{

        alert("Não é Possível dividir por zero,  TRY AGAIN");
    }
}

*/