document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // ngambil elemen input dan elemen pesan eror
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    var isValid = true;

    // buat pastiin form nama ga kosong(harus di isi)
    if (name.value.trim() === '') {
        nameError.textContent = 'Nama tidak boleh kosong.';
        isValid = false;
    }

    // memastikan form email terisi dan menggunakan format yang benar
    if (email.value.trim() === '') {
        emailError.textContent = 'Email tidak boleh kosong.';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        emailError.textContent = 'Format email tidak benar, harap masukkan email yang valid.';
        isValid = false;
    }

    // memastikan form pesan tidak kosong
    if (message.value.trim() === '') {
        messageError.textContent = 'Pesan tidak boleh kosong.';
        isValid = false;
    }

    // jika semua kondisi terpenuhi makan akan keluar form berhasil kirim dan mereset page
    if (isValid) {
        alert('Form berhasil dikirim!');
        this.reset();
    }
});
