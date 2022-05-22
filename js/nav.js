onload = () => {
    const mobileNav = document.querySelector('#mobileNav')
    mobileNav.addEventListener('click', () => {
        if (innerWidth <= 768) {
            const nav = document.querySelector('nav')
            parseFloat(getComputedStyle(nav).left) < 0 ? nav.style.left = '0' : nav.style.left = '-105%'
        }
    })
}