'use strict';

let cash = prompt('Введите сумму, которую хотите положить на счет в банке');
let arrow = ['ь', 'я', 'ей'];

switch (true) {
    case ( Number(cash) >= 11 && Number(cash) <= 14 ):
        alert('Ваша сумма в ' + cash + ' рубл'+arrow[2] + ' успешно зачислена.');
        break;
    case ( Number(cash.charAt(cash.length-1)) >= 5 && Number(cash.charAt(cash.length-1)) <= 9 ):
        alert('Ваша сумма в ' + cash + ' рубл'+arrow[2] + ' успешно зачислена.');
        break;
    case ( Number(cash.charAt(cash.length-1)) == 0 ):
        alert('Ваша сумма в ' + cash + ' рубл'+arrow[2] + ' успешно зачислена.');
        break;
    case ( Number(cash.charAt(cash.length-1)) == 1 ):
        alert('Ваша сумма в ' + cash + ' рубл'+arrow[0] + ' успешно зачислена.');
        break;
    case ( Number(cash.charAt(cash.length-1)) >= 2 && Number(cash.charAt(cash.length-1)) <= 4 ):
        alert('Ваша сумма в ' + cash + ' рубл'+arrow[1] + ' успешно зачислена.');
        break;
}