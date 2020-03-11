'use strict';

let modalWindow = document.querySelector(`.modalWindow`);
let openBtn = document.querySelector(`.openBtn`);
let closeBtn = document.querySelector(`.closeBtn`);

openBtn.addEventListener(`click`, function() {
    modalWindow.classList.add(`active`, `scale-up-center`);
    openBtn.classList.add(`hide`);
});

closeBtn.addEventListener(`click`, function() {
    modalWindow.classList.remove(`active`, `scale-up-center`);
    openBtn.classList.remove(`hide`);
})


/*
// Вариант 2 - через свойство DOM-элемента on<событие>

let modalWindow = document.querySelector(`.modalWindow`);
let openBtn = document.querySelector(`.openBtn`);
let closeBtn = document.querySelector(`.closeBtn`);

openBtn.onclick = function() {
    modalWindow.classList.add(`active`, `scale-up-center`);
    openBtn.classList.add(`hide`);
}

closeBtn.onclick = function() {
    modalWindow.classList.remove(`active`, `scale-up-center`);
    openBtn.classList.remove(`hide`);
}
*/

