// ambil data dari session storage
const data = JSON.parse(sessionStorage.getItem('formData'));

// tampilkan nilai dari setiap input pada elemen HTML
document.querySelector('#nama').textContent = data[0];
document.querySelector('#email').textContent = data[1];
document.querySelector('#jenis-kelamin').textContent = data[2];
document.querySelector('#barang').textContent = data[3];
document.querySelector('#spesifikasi').textContent = data[4];
document.querySelector('#pengiriman').textContent = data[5].join(', ');
document.addEventListener('DOMContentLoaded', function() {
    // kode untuk menampilkan data
  });
  