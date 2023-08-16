import './style.css';
import refreshIconImg from './imgs/refresh.png';
import returnIconImg from './imgs/diskette.png';
import todoItems from './modules/todoItems.js';
import * as DOM from './modules/domManipulation.js';
import generateList from './modules/generateList.js';

const createComponent = () => {
  const listContainer = document.getElementById('list-container');
  const listTitleDiv = DOM.createDiv('list-title-div');
  const listFooterDiv = DOM.createDiv('list-footer-div');
  const addToListDiv = DOM.createDiv('add-to-list-div');
  const listItemsDiv = DOM.createDiv('list-items-div');
  const addItemInput = DOM.createInput('add-item-input', 'text', 'Add to your list...');
  const listTitle = DOM.createHeading("Today's To Do");
  const listFooter = DOM.createHeading('Clear all completed');
  const refreshIcon = DOM.createImage('refresh-img', refreshIconImg);
  const returnIcon = DOM.createImage('return-img', returnIconImg);

  generateList(todoItems, listItemsDiv);

  DOM.appendChildren(listTitleDiv, listTitle, refreshIcon);
  DOM.appendChildren(addToListDiv, addItemInput, returnIcon);
  DOM.appendChildren(listFooterDiv, listFooter);
  DOM.appendChildren(listContainer, listTitleDiv, addToListDiv, listItemsDiv, listFooterDiv);
};

createComponent(todoItems);