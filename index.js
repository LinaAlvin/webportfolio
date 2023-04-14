const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 40) {
        navEl.classList.add('my-dark')
    } else if (window.scrollY < 56) {
        navEl.classList.remove('my-dark');
    }
});