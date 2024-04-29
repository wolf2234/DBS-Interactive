

const hamMenu = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".menu");
const darkside = document.querySelector(".wrapper");
const dropdown = document.querySelector(".dropdown");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    darkside.classList.toggle('darkside');
    dropdown.classList.toggle('active');
});