import * as DOM from './domManipulation.js';
import deleteIconImg from '../imgs/delete.png';
import removeItems from './removeItems.js';

const generateList = (items, listItemsDiv) => {
  listItemsDiv.innerHTML = '';

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    const listItemCheck = DOM.createCheckbox();
    const itemDescription = DOM.createParagraph(item.description);
    const deleteIcon = DOM.createImage('options-img', deleteIconImg);
    DOM.appendChildren(listItem, listItemCheck, itemDescription, deleteIcon);
    listItemsDiv.appendChild(listItem);

    deleteIcon.addEventListener('click', () => {
      removeItems(item.index - 1, items);
      generateList(items, listItemsDiv);
    });
  });
};

export default generateList;
