function evento() {
    let nomePalestrante = document.getElementById("pNome").value;
    let nomeEvento = document.getElementById("pEvento").value;
    let numeroParticipantes = document.getElementById("pParticipantes").value;


    if (nomePalestrante == 0) {
        alert("Digite o nome do Palestrante")
    } else if (nomeEvento == 0) {
        alert("Digite o nome do Evento")
    } else if (numeroParticipantes <= 0) {
        alert("Digite o Número de Participantes")
    } else if (numeroParticipantes > 100) {
        alert("Excedido o número máximo de Participantes(100)")
    } else {
        alert("Obrigado por se Inscrever!")
        window.location.href = "index.html";      
    }
}

function previewFile() {
    let preview = document.querySelector('img');
    let file    = document.querySelector('#fAvatar').files[0];
    let reader  = new FileReader();
    
    reader.onloadend = function () {
      preview.src = reader.result;
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      
    }
  }

function mudarConteudo() {
    let nome = meuForm.pNome.value;
    let evento = document.getElementById("pEvento").value;
    let participantes = document.getElementById("pParticipantes").value;
    let data = document.getElementById("pData").value;

    let reader  = new FileReader();
    let preview = document.querySelector('img');
    reader.onloadend = function () {
      preview.src = reader.result;
}


let card = `<div class="card" style="width: 18rem; heigth=27rem">
<img src="${preview.src}" style="heigth: 150px" "" style= class="card-img-top" alt="...">
<ul class="list-group list-group-flush">
    <li class="list-group-item">${nome}</li>
    <li class="list-group-item">${evento}</li>
    <li class="list-group-item">${participantes}</li>
    <li class="list-group-item">${data}</li>
</ul>
</div>`;
preview.src = "";
document.getElementById("paragrafo").innerHTML += card;



}





