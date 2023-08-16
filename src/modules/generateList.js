import * as DOM from './domManipulation.js';
import optionsIconImg from '../imgs/options.png';

const generateList = (items, listItemsDiv) => {
  listItemsDiv.innerHTML = '';

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    const listItemCheck = DOM.createCheckbox();
    const itemDescription = DOM.createParagraph(item.description);
    const optionsIcon = DOM.createImage('options-img', optionsIconImg);
    DOM.appendChildren(listItem, listItemCheck, itemDescription, optionsIcon);
    listItemsDiv.appendChild(listItem);
  });
};

export default generateList;
