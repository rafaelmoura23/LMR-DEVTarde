function evento(){
    let nomePalestrante = document.getElementById("").value;
    let nomeEvento = document.getElementById("").value;
    let numeroParticipantes = document.getElementById("").value;
    let data = document.getElementById("").value;

    if(nomePalestrante==0){
        alert("Digite o nome do Palestrante")
    } else if (nomeEvento==0){
        alert("Digite o nome do Evento")
    } else if(numeroParticipantes<0){
        alert("Digite o Número de Pessoas do evento")
    } else if(numeroParticipantes>100){
        alert("O Número de Participantes Excedeu o Limite(100)")
    } else if (data){

    }
}

