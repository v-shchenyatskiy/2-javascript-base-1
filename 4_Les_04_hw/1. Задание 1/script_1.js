// Вариант 1 - Решение через создание объекта с помощью {}
'use strict';

let userNumber = +prompt(`Введите целое число от 0 до 999:`);

const result = numberToObject(userNumber);
console.log(result);

function numberToObject(number) {
    let obj = {};

    if ( isNaN(number) ) {
        console.log(`Введенное вами значение не является числом`);
        return(obj);
    } else if ( !Number.isInteger(number) ) {
        console.log(`Ваше число ${number} не является целым числом`);
        return(obj);
    } else if ( number < 0 || number > 999 ) {
        console.log(`Введенное вами число ${number} вне диапазона от 0 до 999`);
        return(obj);
    }

    if (number < 10) {
        obj.hundreds = 0;
        obj.tens = 0;
        obj.units = number;
    } else if (number < 100) {
        number = String(number);
        obj.hundreds = 0;
        obj.tens = Number(number[0]);
        obj.units = Number(number[1]);
    } else if (number < 1000) {
        number = String(number);
        obj.hundreds = Number(number[0]);
        obj.tens = Number(number[1]);
        obj.units = Number(number[2]);
    }

    return(obj);
}