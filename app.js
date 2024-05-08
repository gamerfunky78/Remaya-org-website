document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');

    navbarToggle.addEventListener('click', function() {
        navbar.classList.toggle('collapsed');
        navbarToggle.classList.toggle('change');
    });
});
