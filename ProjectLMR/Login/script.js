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