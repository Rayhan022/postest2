const form = document.querySelector('form');
const nama_lengkap = document.getElementById('nama_lengkap');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newUser = {
        username: nama_lengkap.value,
        password: password.value,
    };

    let usersArray = [];

    if (localStorage.getItem('users') !== null) {
        usersArray = JSON.parse(localStorage.getItem('users'));
    }

    usersArray.push(newUser);

    localStorage.setItem('users', JSON.stringify(usersArray));

    alert('Registrasi berhasil');
    window.location.href = 'login.html';

    form.reset();
});