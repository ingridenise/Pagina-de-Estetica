
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    // toggle añade la clase si no está, y la quita si ya está
    navLinks.classList.toggle('active');
});