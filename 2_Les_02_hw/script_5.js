'use strict';

alert(mathOperation(3, 2, sum));
alert(mathOperation(3, 2, diff));
alert(mathOperation(3, 2, multi));
alert(mathOperation(3, 2, division));

/**
 * 
 * @param {Number} arg1 Число №1
 * @param {Number} arg2 Число №2
 * @param {Number} operation Выбор F: [+] sum, [-] diff, [*] multi, [/] division
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return(sum(arg1, arg2));
        case diff:
            return(diff(arg1, arg2));
        case multi:
            return(multi(arg1, arg2));
        case division:
            return(division(arg1, arg2));
    }
}

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