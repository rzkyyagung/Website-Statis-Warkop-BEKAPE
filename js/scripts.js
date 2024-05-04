const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// menu active ketika di click
hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
};

// click selain hamburger atau colom menu untuk tutup
document.addEventListener('click', function(e) {
    // menegecek area click
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


// Mendeteksi klik kanan pada dokumen
document.addEventListener('contextmenu', function(event) {
    // Mencegah perilaku bawaan dari menu klik kanan
    event.preventDefault();
});
