function Login() {
  let email = document.getElementById("pEmail").value;
  let senha = document.getElementById("pSenha").value;
  let check = document.getElementById("pCheck").value;

  if (email == 0) {
      alert("Digite o seu Email")
  } else if (senha == 0) {
      alert("Digite a Senha")
  } else {
      alert("Login Efetuado!")
      window.location.href = "index.html";
  }

}

const imageInput = document.getElementById('image-input');
    const profilePicture = document.getElementById('profile-picture');

    imageInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        const imageUrl = e.target.result;
        profilePicture.innerHTML = `<img src="${imageUrl}" alt="Profile Picture">`;
      }

      reader.readAsDataURL(file);
    });