import _ from 'lodash';
import './style.css';
import refresh from './imgs/refresh.png';

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

const listItem = () => {
  const listContainer = document.getElementById('list-container');
  const listTitleDiv = document.createElement('div');
  listTitleDiv.id = 'list-title-div';
  const listTitle = document.createElement('h4');
  listTitle.textContent = 'Today\'s To Do';
  const refreshIcon = document.createElement('img');
  refreshIcon.id = 'refresh-img';
  refreshIcon.src = refresh;
  const listItem = document.createElement('li');
  listItem.innerHTML = 'List Item';

  listTitleDiv.appendChild(listTitle);
  listTitleDiv.appendChild(refreshIcon);
  listContainer.appendChild(listTitleDiv);
  listContainer.appendChild(listItem);
};

listItem();