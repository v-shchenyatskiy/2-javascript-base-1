'use strict';

for (let i = 0; i <= 10; i++) {
    switch(true) {
        case i == 0:
            console.log(i + ' - это ноль');
            break;
        case (i%2 > 0):
            console.log(i + ' - нечетное число');
            break;
        case (i%2 == 0):
            console.log(i + ' - четное число');
            break;
    }
}