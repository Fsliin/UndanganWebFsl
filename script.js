function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active');
}

function saveTheDate() {
    alert("Tanggal telah disimpan di kalender Anda!");
}

// Tampilkan halaman Home sebagai default
document.getElementById('home').classList.add('active');
