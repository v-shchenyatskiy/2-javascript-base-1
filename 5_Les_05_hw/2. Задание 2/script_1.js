'use strict';

let products = document.querySelectorAll('.product');

products.forEach(function(product, index, array) {
    let desc = product.querySelector('.desc');
    let img = product.querySelector('img');
    let button = product.querySelector('button');
    let i = 1;

    let switchFunction = function() {
        switch(i) {
            case 1:
                desc.classList.add(`active`);
                img.style.display = `none`;
                button.innerText = `Отмена`;
                i = i * -1;
                break;
            case -1:
                desc.classList.remove(`active`);
                img.style.display = ``;
                button.innerText = `Подробнее`;
                i = i * -1;
                break;
        }
    };

    button.addEventListener(`click`, switchFunction);

} );