const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar-default');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});

navbar.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});