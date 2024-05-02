

const hamMenu = document.querySelector(".burger");
const offScreenMenu = document.querySelector(".menu");
// const body = document.getElementsByTagName('body');
const body = document.querySelector('.body');
// const darkside = document.querySelector(".wrapper");
// const dropdown = document.querySelector(".dropdown");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('lock');
    // darkside.classList.toggle('darkside');
    // dropdown.classList.toggle('active');

});