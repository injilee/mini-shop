'use strict';

const blue = 'blue';
const yellow = 'yellow';
const pink = 'pink';

const pants = 'p';
const skirt = 's';
const tShirts = 't';

const colors = [blue, yellow, pink];
const cloths = [pants, skirt, tShirts];

const blueBtn = document.querySelector('.blue');
const yellowBtn = document.querySelector('.yellow');
const pinkBtn = document.querySelector('.pink');

const itemList = document.querySelector('.shopping-list');

// blueBtn.addEventListener('click', () => {
//   console.log('blue');
// });

// yellowBtn.addEventListener('click', () => {
//   console.log('yellow');
// });

// pinkBtn.addEventListener('click', () => {
//   console.log('pink');
// });

function arrBlue() {
  const blueItem = document.createElement('img');
  blueItem.src = `./imgs/imgs/pink_s.png`;
  console.log(blueItem);
}
