'use strict';

let products = document.querySelectorAll('.product');

products.forEach(function(product) {
    let desc = product.querySelector('.desc');
    let img = product.querySelector('img');
    let button = product.querySelector('button');

    let switchOnFunction = function() {
        desc.classList.add(`active`);
        img.style.display = `none`;
        button.innerText = `Отмена`;
        button.removeEventListener(`click`, switchOnFunction);
        button.addEventListener(`click`, switchOffFunction);
    };

    let switchOffFunction = function() {
        desc.classList.remove(`active`);
        img.style.display = ``;
        button.innerText = `Подробнее`;
        button.removeEventListener(`click`, switchOffFunction);
        button.addEventListener(`click`, switchOnFunction);
    };

    button.addEventListener(`click`, switchOnFunction);

} );