function evento(){
    let nomePalestrante = document.getElementById("pNome").value;
    let nomeEvento = document.getElementById("pEvento").value;
    let numeroParticipantes = document.getElementById("pParticipantes").value;
    let data = document.getElementById("date").value;

    if(nomePalestrante==0 && nomeEvento==0){
        alert("Digite o nome do Palestrante")
    } else{
        alert("OK")
    }
    }


