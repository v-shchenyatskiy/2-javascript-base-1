'use strict';

let a = +prompt('Введите целое число №1');
let b = +prompt('Введите целое число №2');

if (a >= 0 && b >= 0) {
    alert('Разница чисел = число №1 - число №2 = ' + (a-b));
} else if (a < 0 && b < 0) {
    alert('Произведение чисел = число №1 * число №2 = ' + (a*b));
} else {
    alert('Сумма чисел = число №1 + число №2 = ' + (a+b));
}