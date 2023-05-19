function evento(){
    let nomePalestrante = document.getElementById("pNome").value;
    let nomeEvento = document.getElementById("pEvento").value;
    let numeroParticipantes = document.getElementById("pParticipantes").value;
    let dia = document.getElementById("pDia").value;
    let mes = document.getElementById("pMes").value;
    

    if(nomePalestrante==0){
        alert("Digite o nome do Palestrante")
    } else if (nomeEvento==0){
        alert("Digite o nome do Evento")
    } else if(numeroParticipantes<=0){
        alert("Digite o Número de Participantes")
    } else if(numeroParticipantes>100){
        alert("Excedido o número máximo de Participantes(100)")
    } else if(dia>31 || dia<=0){
        alert("Digite um Dia Válido")
    } else if(mes>12 || mes<=0){
        alert("Digite um Mês Válido")
    }else{
        alert("Obrigado por se Inscrever!")
    }
}



