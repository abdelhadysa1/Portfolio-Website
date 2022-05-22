window.addEventListener('load', () => {
    const main = document.querySelector('main')
    main.addEventListener('click', (e) => {
        const parent = e.target.parentElement
        if (parent.tagName === 'DIV' && parent.classList.contains('box')) {
            const boxContent = parent.querySelector('span.box-content')
            boxContent.style.display = getComputedStyle(boxContent).display === 'block' ? 'none' : 'block'
        }
    }, true)
})