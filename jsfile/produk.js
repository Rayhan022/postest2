// ambil form
const form = document.querySelector('form');

// tambahkan event listener untuk saat form di-submit
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // ambil nilai dari setiap input di form
  const nama = document.querySelector('#nama').value;
  const email = document.querySelector('#email').value;
  const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
  const barang = document.querySelector('#barang').value;
  const spesifikasi = document.querySelector('#spesifikasi').value;
  const pengiriman = document.querySelectorAll('input[name="pengiriman[]"]:checked');
  const pengirimanValues = Array.from(pengiriman).map(function(el) {
    return el.value;
  });

  // simpan data dalam bentuk array ke dalam session storage
  const data = [nama, email, jenisKelamin, barang, spesifikasi, pengirimanValues];
  sessionStorage.setItem('formData', JSON.stringify(data));

  // redirect ke halaman lain (jika diperlukan)
  window.location.href = 'tampilkan.html';
});
