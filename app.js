'use strict';

const blueBtn = document.querySelector('.blue');
const yellowBtn = document.querySelector('.yellow');
const pinkBtn = document.querySelector('.pink');
const itemList = document.querySelector('.shopping-list');

// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/date.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// load items
loadItems()
  .then((items) => {
    displayItems(items);
    console.log(items);
  })
  .catch((error) => console.log(error));

// UI
function displayItems(items) {
  itemList.innerHTML = items.map((item) => createHTMLElement(item)).join('');
  console.log(items[1]);
}

function createHTMLElement(item) {
  return `
  <li class="item">
    <img src="${item.img}" alt="${item.color} ${item.type}" class="item__thumbnail" />
    <span class="info">${item.gender}, ${item.size}</span>
</li>`;
}

blueBtn.addEventListener('click', () => {
  console.log('blue');
});

// yellowBtn.addEventListener('click', () => {
//   console.log('yellow');
// });

// pinkBtn.addEventListener('click', () => {
//   console.log('pink');
// });
