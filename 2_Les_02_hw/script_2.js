'use strict';

let a = 2;
let x = 1 + (a *= 2);

// В первой строчке переменной a присваивается значение = 2
// Во второй строчке стоит знак *=, поэтому переменную a=2 нужно "умножить и присвоить"
// т.е. нужно "умножить" на 2 и "присвоить" новое получившееся значение = 2*2 = 4
// Далее переменной x будет присвоено значение 5, равное сумме 1 + результату вычислений в скобках
// В результате переменная a=4, а переменная x=5
// Если теперь повторить этот же пример, то переменная a увеличится в 2 раза и будет равна 8, а переменная x будет = 9