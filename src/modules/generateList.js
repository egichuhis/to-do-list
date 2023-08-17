import * as DOM from './domManipulation.js';
import deleteIconImg from '../imgs/delete.png';
import removeItems from './removeItems.js';

const generateList = (items, listItemsDiv) => {
  listItemsDiv.innerHTML = '';

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    const listItemCheck = DOM.createCheckbox();
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.value = item.description;
    descriptionInput.className = 'edit-input';
    const deleteIcon = DOM.createImage('options-img', deleteIconImg);
    DOM.appendChildren(listItem, listItemCheck, descriptionInput, deleteIcon);
    listItemsDiv.appendChild(listItem);

    deleteIcon.addEventListener('click', () => {
      removeItems(item.index - 1, items);
      generateList(items, listItemsDiv);
    });

    descriptionInput.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    descriptionInput.addEventListener('blur', () => {
      item.description = descriptionInput.value;
      generateList(items, listItemsDiv);
    });
  });
};

export default generateList;
