const form = document.querySelector('form');
const loginBtn = document.getElementById('login');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let usersArray = [];

    if (localStorage.getItem('users') !== null) {
        usersArray = JSON.parse(localStorage.getItem('users'));
    }

    const user = usersArray.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Selamat datang ${user.username}`);
        window.location.href = 'index.html';
    } else {
        alert('Username atau password salah');
    }

    form.reset();
});
