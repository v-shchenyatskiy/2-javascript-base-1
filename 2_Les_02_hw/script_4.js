'use strict';

alert(sum(3, 2));
alert(diff(3, 2));
alert(multi(3, 2));
alert(division(3, 2));

/**
 * 
 * @param {Number} a Число №1
 * @param {Number} b Число №2
 * @returns {Number} F возвращает сумму двух чисел (a+b)
 */
function sum(a, b) {
    return (a+b);
}

/**
 * 
 * @param {Number} a Число №1
 * @param {Number} b Число №2
 * @returns {Number} F возвращает разность двух чисел (a-b)
 */
function diff(a, b) {
    return (a-b);
}

/**
 * 
 * @param {Number} a Число №1
 * @param {Number} b Число №2
 * @returns {Number} F возвращает произведение двух чисел (a*b)
 */
function multi(a, b) {
    return (a*b);
}

/**
 * 
 * @param {Number} a Число №1
 * @param {Number} b Число №2
 * @returns {Number} F возвращает деление двух чисел (a/b)
 */
function division(a, b) {
    return (a/b);
}