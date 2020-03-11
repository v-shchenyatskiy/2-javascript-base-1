'use strict';

let products = document.querySelectorAll('.product');

products.forEach(function(product) {
    let button = product.querySelector('button');

    button.addEventListener('click', function() {
        let inCart = CheckItemInCart(product);

        if ( inCart.incart === true) {
            alert('Товар уже добавлен в корзину');
        } else {
            let cartObj = new ProductObj(product);
            let trEl = cartObj.makeMarkup();
            insertMarkup(trEl);
            cartUpdate();
            totalSumInsert();
            deleteCartItem();
        }
    });

});

function CheckItemInCart(product) {
    let obj = {}
    obj.id = product.querySelector('.id');
    obj.incart = false;

    let cartItems = document.querySelectorAll('.cart_item');
    cartItems.forEach(function(item) {
        let itemID = item.querySelector('.item_id');
        
        if (itemID.innerText === obj.id.innerText) {
            obj.incart = true;
        }
    })

    return obj;
}

class ProductObj {
    constructor(product) {
        this.id = product.querySelector('.id');
        this.name = product.querySelector('.product__name');
        this.img = product.querySelector('.img');
        this.price = product.querySelector('.price');
        this.quantity = product.querySelector('.product__input');
        this.sum = Number(this.price.innerText) * Number(this.quantity.value);
    }

    makeMarkup() {
        let trEl = document.createElement('tr');
        trEl.className = 'cart_item';
        trEl.insertAdjacentHTML('afterbegin', `
            <td class="cart__itemRow item_id">${this.id.innerText}</td>
            <td class="cart__itemRow item_img">${this.img.innerHTML}</td>
            <td class="cart__itemRow item_name">${this.name.innerText}</td>
            <td class="cart__itemRow item_price">${this.price.innerText}</td>
            <td class="cart__itemRow"><input class="item_quantity" type="number" value="${this.quantity.value}" step="1" min="1"></td>
            <td class="cart__itemRow item_sum">${this.sum}</td>
            <td class="cart__itemRow item_clear">X</td>
        `);
        return trEl;
    }

}

function insertMarkup(markup) {
    let markupPlace = document.querySelector('.cart__endTR');
    markupPlace.insertAdjacentElement('beforebegin', markup);
}

function cartUpdate() {
    let cartItems = document.querySelectorAll('.cart_item');
    
    cartItems.forEach(function(item) {
        let sum = item.querySelector('.item_sum');
        let price = item.querySelector('.item_price');
        let input = item.querySelector('.item_quantity');
        
        input.addEventListener('change', function() {
            sum.innerText = Number(price.innerText) * Number(input.value);
            totalSumInsert();
        });
    });
}

function totalSumInsert() {
    let totalSum = document.querySelector('.cart__totalSum');
    let allSums = 0;
    
    let cartItems = document.querySelectorAll('.cart_item');
    cartItems.forEach(function(item) {
        let sum = item.querySelector('.item_sum');
        allSums += Number(sum.innerText);
    });
    
    totalSum.innerText = allSums;
}

function deleteCartItem() {
    let cartItems = document.querySelectorAll('.cart_item');
    cartItems.forEach(function(item) {
        let itemClear = item.querySelector('.item_clear');
        itemClear.addEventListener('click', function() {
            item.outerHTML = '';
            totalSumInsert();
        });
    });
}