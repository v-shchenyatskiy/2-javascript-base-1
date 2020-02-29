// Вариант 2 - Решение через конструктор
'use strict';

let userNumber = +prompt(`Введите целое число от 0 до 999:`);

const numberDigits = new Number_to_Object(userNumber);
console.log(numberDigits);

function Number_to_Object(number) {

    if ( isNaN(number) ) {
        console.log(`Введенное вами значение не является числом`);
        return;
    } else if ( !Number.isInteger(number) ) {
        console.log(`Ваше число ${number} не является целым числом`);
        return;
    } else if ( number < 0 || number > 999 ) {
        console.log(`Введенное вами число ${number} вне диапазона от 0 до 999`);
        return;
    }

    if (number < 10) {
        this.hundreds = 0;
        this.tens = 0;
        this.units = number;
    } else if (number < 100) {
        number = String(number);
        this.hundreds = 0;
        this.tens = Number(number[0]);
        this.units = Number(number[1]);
    } else if (number < 1000) {
        number = String(number);
        this.hundreds = Number(number[0]);
        this.tens = Number(number[1]);
        this.units = Number(number[2]);
    }
}