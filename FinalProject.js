function fetchData() {
    const data = [
        { Produk: 'Kimia Pembersih', Layanan: 'Pembersih Mesin Industri', Price10: '$10', Price20: '$20' },
        { Produk: 'Kimia Perawatan', Layanan: 'Jasa Pembersihan Gedung', Price10: '$20', Price20: '$40' },
        { Produk: 'Pengolahan Air', Layanan: 'Pembersihan Kapal Laut', Price10: '$30', Price20: '$60' },
        { Produk: 'Kimia Larut', Layanan: 'Pembersihan Pembangkit Listrik', Price10: '$30', Price20: '$60' },
    ];

    const orderTable = document.getElementById('orderTable');
    orderTable.innerHTML = '<tr><th>Produk</th><th>Layanan</th><th>Basic</th><th>Economy</th></tr>';

    data.forEach(product => {
        const row = orderTable.insertRow();
        row.insertCell(0).textContent = product.Produk;
        row.insertCell(1).textContent = product.Layanan;
        row.insertCell(2).textContent = product.Price10;
        row.insertCell(3).textContent = product.Price20;
    });

    const popup = document.getElementById('orderPopup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('orderPopup');
    popup.style.display = 'none';
}

function submitForm() {
    alert("Terima kasih! Pesan Anda telah terkirim.");
}

let currentView = 'carousel';

function showHome() {
    document.getElementById('carouselExampleCaptions').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    currentView = 'home';
}

function showCarousel() {
    document.getElementById('carouselExampleCaptions').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    currentView = 'carousel';
}

function checkHomeStatus() {
    if (currentView === 'home') {
        showHome();
    } else {
        showCarousel();
    }
}

document.addEventListener('DOMContentLoaded', checkHomeStatus);
