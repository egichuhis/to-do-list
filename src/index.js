import _ from 'lodash';
import './style.css';
import refreshIconImg from './imgs/refresh.png';
import returnIconImg from './imgs/diskette.png';
import optionsIconImg from './imgs/options.png';

const todoItems = [
  {
    description: 'Milk Cows',
    completed: false,
    index: 0,
  },
  {
    description: 'Milk Goats',
    completed: false,
    index: 1,
  },
  {
    description: 'Milk Camels',
    completed: false,
    index: 2,
  },
  {
    description: 'Milk Elephant',
    completed: false,
    index: 3,
  },
];

const listItems = () => {
  const listContainer = document.getElementById('list-container');
  const listTitleDiv = document.createElement('div');
  const addToListDiv = document.createElement('div');
  addToListDiv.id = 'add-to-list-div';
  const addItemInput = document.createElement('input');
  addItemInput.id = 'add-item-input';
  addItemInput.type = 'text';
  addItemInput.placeholder = 'Add to your list...';
  const listItemsDiv = document.createElement('div');
  listTitleDiv.id = 'list-title-div';
  const listTitle = document.createElement('h4');
  listTitle.textContent = 'Today\'s To Do';
  const refreshIcon = document.createElement('img');
  refreshIcon.id = 'refresh-img';
  refreshIcon.src = refreshIconImg;
  const returnIcon = document.createElement('img');
  returnIcon.id = 'return-img';
  returnIcon.src = returnIconImg;
  const listItem = document.createElement('li');
  listItem.id = 'list-item';
  const listItemCheck = document.createElement('input');
  listItemCheck.type = 'checkbox';
  const itemDescription = document.createElement('p');
  itemDescription.textContent = 'Hello World, Micronauts are awesome!';
  const optionsIcon = document.createElement('img');
  optionsIcon.src = optionsIconImg;
  optionsIcon.id = 'options-img';

  listTitleDiv.appendChild(listTitle);
  listTitleDiv.appendChild(refreshIcon);
  addToListDiv.appendChild(addItemInput);
  addToListDiv.appendChild(returnIcon);
  listContainer.appendChild(listTitleDiv);
  listContainer.appendChild(addToListDiv);
  listContainer.appendChild(listItemsDiv);
  listItemsDiv.appendChild(listItem);
  listItem.appendChild(listItemCheck);
  listItem.appendChild(itemDescription);
  listItem.appendChild(optionsIcon);
};

listItems();