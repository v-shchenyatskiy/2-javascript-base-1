'use strict';

let render = {

    start() {
        let chessBoard = document.querySelector(`.chessBoard`);
        chessBoard.innerHTML = ``;
        chessBoard.insertAdjacentHTML(`afterbegin`, this.makeTable());
        this.fillLettersNumbersFiguresBlackClasses();
        this.fillNumbers();
        this.fillLetters();
        this.fillFigures();
    },

    makeTable() {
        let tr = ``;
        
        for (let y = 0; y < 10; y++) {
            tr += `<tr>`;
            for (let x = 0; x < 10; x++) {
                let td = `<td class="square" data-x="${x}" data-y="${y}">`;
                tr += td;
            }
            tr += `</tr>`;
        };
        
        let table = `<table class="table"><tbody>${tr}</tbody></table>`;
        
        return table;
    },

    makeSquaresObj() {
        let square = document.querySelectorAll(`.square`);
        console.dir(square);
        return square;
    },

    fillLettersNumbersFiguresBlackClasses() {
        let squaresObj = this.makeSquaresObj();
        squaresObj.forEach(function(square, index, array) {
            
            if (index == 0 || index == 9 || index == 90 || index == 99) {
                square.classList.add(`empty`);
            };

            if ((index > 0 && index < 9) || (index > 90 && index < 99)) {
                square.classList.add(`chessLetters`);
            };

            for (let i = 10; i <= 80; i += 10 ) {
                if (index == i) {
                    square.classList.add(`chessNumbers`);
                };
            };
            
            for (let i = 19; i <= 89; i += 10 ) {
                if (index == i) {
                    square.classList.add(`chessNumbers`);
                };
            };

            for (let i = 11; i <= 88; i += 10 ) {
                if ((index >= i) && (index <= i+7)) {
                    square.classList.add(`chessFigures`);
                };
            };
            
            for (let y = 1; y <= 7; y += 2) {
                for (let x = 2; x <= 8; x += 2) {
                    if ((square.dataset.x == x) && (square.dataset.y == y)) {
                        square.classList.add(`black`);
                    };
                };
            };

            for (let y = 2; y <= 8; y += 2) {
                for (let x = 1; x <= 7; x += 2) {
                    if ((square.dataset.x == x) && (square.dataset.y == y)) {
                        square.classList.add(`black`);
                    };
                };
            };
        
        });
    
    },

    makeNumbersObj() {
        let chessNumbers = document.querySelectorAll(`.chessNumbers`);
        return chessNumbers;
    },

    makeLettersObj() {
        let chessLetters = document.querySelectorAll(`.chessLetters`);
        return chessLetters;
    },

    makeFigureresObj() {
        let chessFigures = document.querySelectorAll(`.chessFigures`);
        return chessFigures;
    },

    fillNumbers() {
        let numbers = this.makeNumbersObj();
        numbers.forEach(function(number, index, array){
            let arr = [8, 7, 6, 5, 4, 3, 2, 1];
            let i = 0;

            for (let j = 0; j <= 14; j += 2) {
               if (index == j) {
                   number.innerText = `${arr[i]}`;
                };
                i++
            };

            i = 0;

            for (let j = 1; j <= 15; j += 2) {
                if (index == j) {
                    number.innerText = `${arr[i]}`;
                 };
                 i++
             };
        });
    },

    fillLetters() {
        let letters = this.makeLettersObj();
        letters.forEach(function(letter, index, array){
            let arr = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];
            let i = 0;

            for (let j = 0; j < 8; j ++) {
                if (index == j) {
                    letter.innerText = `${arr[i]}`;
                };
                i++
            };

            i = 0;

            for (let j = 8; j < 16; j ++) {
                if (index == j) {
                    letter.innerText = `${arr[i]}`;
                };
                i++
            };
        });
    },

    fillFigures() {
        let figures = this.makeFigureresObj();
        const chessItemsObj = {
            pawn: `<i class="fas fa-chess-pawn"></i>`,
            rook: `<i class="fas fa-chess-rook"></i>`,
            knight: `<i class="fas fa-chess-knight"></i>`,
            bishop: `<i class="fas fa-chess-bishop"></i>`,
            king: `<i class="fas fa-chess-king"></i>`,
            queen: `<i class="fas fa-chess-queen"></i>`,
            pawn_white: `<i class="fas fa-chess-pawn white_figure"></i>`,
            rook_white: `<i class="fas fa-chess-rook white_figure"></i>`,
            knight_white: `<i class="fas fa-chess-knight white_figure"></i>`,
            bishop_white: `<i class="fas fa-chess-bishop white_figure"></i>`,
            king_white: `<i class="fas fa-chess-king white_figure"></i>`,
            queen_white: `<i class="fas fa-chess-queen white_figure"></i>`,
        };

        figures.forEach(function(figure, index, array) {

            if ((index >= 8) && (index <= 15)) {
                figure.innerHTML = `${chessItemsObj.pawn}`;
            };

            if ((index >= 48) && (index <= 55)) {
                figure.innerHTML = `${chessItemsObj.pawn_white}`;
            };

            if ((index == 0) || (index == 7)) {
                figure.innerHTML = `${chessItemsObj.rook}`;
            };

            if ((index == 56) || (index == 63)) {
                figure.innerHTML = `${chessItemsObj.rook_white}`;
            };

            if ((index == 1) || (index == 6)) {
                figure.innerHTML = `${chessItemsObj.knight}`;
            };

            if ((index == 57) || (index == 62)) {
                figure.innerHTML = `${chessItemsObj.knight_white}`;
            };

            if ((index == 2) || (index == 5)) {
                figure.innerHTML = `${chessItemsObj.bishop}`;
            };

            if ((index == 58) || (index == 61)) {
                figure.innerHTML = `${chessItemsObj.bishop_white}`;
            };

            if (index == 3) {
                figure.innerHTML = `${chessItemsObj.king}`;
            } else if (index == 59) {
                figure.innerHTML = `${chessItemsObj.king_white}`;
            };

            if (index == 4) {
                figure.innerHTML = `${chessItemsObj.queen}`;
            } else if (index == 60) {
                figure.innerHTML = `${chessItemsObj.queen_white}`;
            };

        });
    
    },

};

// render.start();

let button = document.querySelector(`.button`);
button.addEventListener(`click`, function () {

    render.start();
});