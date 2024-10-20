window.addEventListener('scroll', function () {
    const bannerOverlay = document.querySelector('.banner .overlay');
    if (window.scrollY > 50) {
        bannerOverlay.classList.add('transparent');
    } else {
        bannerOverlay.classList.remove('transparent');
    }
});