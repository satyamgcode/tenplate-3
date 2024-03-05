document.querySelector('.menu-btn').onclick = () => {
    const header = document.querySelector('.topbar')

    if (header.classList.contains('hide')) {
        header.classList.remove('hide')
    } else {
        header.classList.add('hide')
    }
}