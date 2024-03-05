document.querySelector('.menu-btn').onclick = () => {
    const header = document.querySelector('.topbar');
    console.log(header.classList.remove)
    if (header.classList.contains('hide')) {
        header.classList.remove('hide')
    } else {
        header.classList.add('hide')
    }
}