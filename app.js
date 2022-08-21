'use strict';

const blueBtn = document.querySelector('.blue');
const yellowBtn = document.querySelector('.yellow');
const pinkBtn = document.querySelector('.pink');

const itemList = document.querySelector('.shopping-list');

/* JSON */
// const items = {
//   type: ['pants', 'skirt', 'tShirts'],
//   color: ['blue', 'yellow', 'pink'],
//   size: ['S size', 'M size', 'L size'],
//   male: ['female', 'male'],
// };

// Fetch the items from the JSON file
const loadItems = new Promise((resolve, reject) => {
  fetch('data/date.json')
    .then((response) => response.json())
    .then((json) => json.items);
});

function print() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.setAttribute('class', 'item');
  span.setAttribute('class', 'info');

  li.appendChild(span);
  itemList.append(li);
}

blueBtn.addEventListener('click', () => {
  console.log('blue');
  print();
});

// yellowBtn.addEventListener('click', () => {
//   console.log('yellow');
// });

// pinkBtn.addEventListener('click', () => {
//   console.log('pink');
// });
