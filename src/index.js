import './style.css';
import refreshIconImg from './imgs/refresh.png';
import returnIconImg from './imgs/diskette.png';
import optionsIconImg from './imgs/options.png';
import todoItems from './modules/todoItems.js';

const listItems = (listOfItems) => {
  const listContainer = document.getElementById('list-container');
  const listTitleDiv = document.createElement('div');
  const addToListDiv = document.createElement('div');
  addToListDiv.id = 'add-to-list-div';
  const addItemInput = document.createElement('input');
  addItemInput.id = 'add-item-input';
  addItemInput.type = 'text';
  addItemInput.placeholder = 'Add to your list...';
  listTitleDiv.id = 'list-title-div';
  const listTitle = document.createElement('h4');
  listTitle.textContent = 'Today\'s To Do';
  const refreshIcon = document.createElement('img');
  refreshIcon.id = 'refresh-img';
  refreshIcon.src = refreshIconImg;
  const returnIcon = document.createElement('img');
  returnIcon.id = 'return-img';
  returnIcon.src = returnIconImg;
  const listItemsDiv = document.createElement('div');

  listOfItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.id = 'list-item';
    const listItemCheck = document.createElement('input');
    listItemCheck.type = 'checkbox';
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    const optionsIcon = document.createElement('img');
    optionsIcon.src = optionsIconImg;
    optionsIcon.id = 'options-img';
    listItem.appendChild(listItemCheck);
    listItem.appendChild(itemDescription);
    listItem.appendChild(optionsIcon);
    listItemsDiv.appendChild(listItem);
  });

  listTitleDiv.appendChild(listTitle);
  listTitleDiv.appendChild(refreshIcon);
  addToListDiv.appendChild(addItemInput);
  addToListDiv.appendChild(returnIcon);
  listContainer.appendChild(listTitleDiv);
  listContainer.appendChild(addToListDiv);
  listContainer.appendChild(listItemsDiv);
};

listItems(todoItems);