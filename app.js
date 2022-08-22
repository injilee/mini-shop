'use strict';

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
    setEventListener(items);
  })
  .catch((error) => console.log(error));

// UI
function displayItems(items) {
  const itemList = document.querySelector('.shopping-list');
  // const html = items.map((item) => createHTMLElement(item));
  const html = items.map((item) => createHTMLElement(item)).join('');
  itemList.innerHTML = html;
}

function createHTMLElement(item) {
  return `
  <li class="item">
    <img src="${item.img}" alt="${item.color} ${item.type}" class="item__thumbnail" />
    <span class="info">${item.gender}, ${item.size}</span>
</li>`;
}

/* handling events */
function onClickBtn(event, item) {
  const key = event.target.dataset.key;
  const value = event.target.dataset.value;

  console.log(key, value);
  if (key == null || value == null) {
    return;
  }

  displayItems(item.filter((item) => item[key] === value));
  console.log(item.filter((item) => item[key] === value));
}

function setEventListener(item) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.selete-container');
  console.log(buttons, item);
  logo.addEventListener('click', () => displayItems(item));
  buttons.addEventListener('click', (event) => onClickBtn(event, item));
}

// item.map((item) => item.color).filter((color) => color === targetColor),
