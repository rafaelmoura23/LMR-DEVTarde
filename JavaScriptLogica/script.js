function concatenar(){
    let nome = document.getElementById("pNome").value;
    let sobre = document.getElementById("pSobre").value;

    if(nome==0 && sobre==0){
        alert("Caixas Vazias")
    } else{
        alert("Olá " + nome + " " + sobre);
    }
    }

