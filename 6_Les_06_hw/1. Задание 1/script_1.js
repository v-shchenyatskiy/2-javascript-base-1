'use strict';

let leftButton = document.querySelector(`.fa-angle-left`);
let rightButton = document.querySelector(`.fa-angle-right`);
let img1 = document.querySelector(`.img1`);
let img2 = document.querySelector(`.img2`);
let img3 = document.querySelector(`.img3`);

const styleObj = {
    // pos1: [`left: -100%; z-index: 1;`],
    // pos2: [`left: 0; z-index: 2;`],
    // pos3: [`left: 100%; z-index: 3;`],
    pos1: [`left: -100%;`],
    pos2: [`left: 0;`],
    pos3: [`left: 100%;`],
    display: `display: none;`
};

img1.style.cssText = `${styleObj.pos1}`;
img2.style.cssText = `${styleObj.pos2}`;
img3.style.cssText = `${styleObj.pos3}`;

let i = 0;
console.log(i);

leftButton.addEventListener(`click`, function() {
    i--;
    if (i === -3) {
        i = 0;
    }
    movingObj.leftMovingFunction();
    console.log(i);
});

rightButton.addEventListener(`click`, function() {
    i++;
    if (i === 3) {
        i = 0;
    }
    movingObj.rightMovingFunction();
    console.log(i);
});


let movingObj = {

    leftMovingFunction() {
        if (i === 0) {
            img1.style.cssText = `${styleObj.pos1}`;
            img2.style.cssText = `${styleObj.pos2}`;
            img3.style.cssText = `${styleObj.display}`;
        }

        if (i === -1) {
            img1.style.cssText = `${styleObj.display}`;
            img2.style.cssText = `${styleObj.pos1}`;
            img3.style.cssText = `${styleObj.pos2}`;
        }

        if (i === -2) {
            img1.style.cssText = `${styleObj.pos2}`;
            img2.style.cssText = `${styleObj.display}`;
            img3.style.cssText = `${styleObj.pos1}`;
        }

        setTimeout(this.changePositionLeft, 900);
    },

    changePositionLeft() {
        if (i === 0) {
            img3.style.cssText = `${styleObj.pos3}`;
        }
        if (i === -1) {
            img1.style.cssText = `${styleObj.pos3}`;
        }
        if (i === -2) {
            img2.style.cssText = `${styleObj.pos3}`;
        }
    },

    rightMovingFunction() {
        if (i === 0) {
            img1.style.cssText = `${styleObj.display}`;
            img2.style.cssText = `${styleObj.pos2}`;
            img3.style.cssText = `${styleObj.pos3}`;
        }

        if (i === 1) {
            img1.style.cssText = `${styleObj.pos2}`;
            img2.style.cssText = `${styleObj.pos3}`;
            img3.style.cssText = `${styleObj.display}`;
        }

        if (i === 2) {
            img1.style.cssText = `${styleObj.pos3}`;
            img2.style.cssText = `${styleObj.display}`;
            img3.style.cssText = `${styleObj.pos2}`;
        }

        setTimeout(this.changePositionRight, 900);
    },

    changePositionRight() {
        if (i === 0) {
            img1.style.cssText = `${styleObj.pos1}`;
        }
        if (i === 1) {
            img3.style.cssText = `${styleObj.pos1}`;
        }
        if (i === 2) {
            img2.style.cssText = `${styleObj.pos1}`;
        }
    },


};