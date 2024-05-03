

const hamMenu = document.querySelector(".burger");
const offScreenMenu = document.querySelector(".menu");
const body = document.querySelector('.body');
// const delta = document.querySelector('.menu__delta');
// const dropdown = document.querySelector(".dropdown");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('lock');
});

// delta.addEventListener('click', () => {
//     dropdown.style.display = "block"
// });
// delta.addEventListener('blur', () => {
//     dropdown.style.display = "none"
// });