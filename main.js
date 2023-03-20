const menu = document.querySelector('.menu .menu-list')
const menuToggle = document.querySelector('.menu .menuList-toggle')


menuToggle.addEventListener('click', function () {
    menu.classList.add('show')
})


const closeToggle = document.querySelector('.menu .menu-list .close-toggle')
closeToggle.addEventListener('click', function () {
    menu.classList.remove('show')
})