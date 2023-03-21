const menu = document.querySelector('.menu .menu-list')
const menuToggle = document.querySelector('.menu .menuList-toggle')


menuToggle.addEventListener('click', function () {
    menuToggle.children[0].classList.toggle("fa-xmark")
    menuToggle.classList.toggle('white-toggle')
    menu.classList.toggle('show')
})