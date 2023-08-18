import * as DOM from './domManipulation.js';
import deleteIconImg from '../imgs/delete.png';
import removeItems from './removeItems.js';
import editItem from './editItem.js';
import checkItem from './checkItem.js';

const generateList = (items, listItemsDiv) => {
  listItemsDiv.innerHTML = '';

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    const listItemCheck = DOM.createCheckbox();
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    const itemIndex = DOM.createParagraph(`${item.index}.`);
    descriptionInput.value = item.description;
    descriptionInput.className = 'edit-input';
    const deleteIcon = DOM.createImage('options-img', deleteIconImg);

    if (item.complete) {
      descriptionInput.classList.add('strikethrough');
    } else {
      descriptionInput.classList.remove('strikethrough');
    }

    DOM.appendChildren(listItem, listItemCheck, itemIndex, descriptionInput, deleteIcon);
    listItemsDiv.appendChild(listItem);

    deleteIcon.addEventListener('click', () => {
      removeItems(item.index - 1, items);
      generateList(items, listItemsDiv);
    });

    descriptionInput.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    descriptionInput.addEventListener('blur', () => {
      editItem(item, descriptionInput.value, items);
      localStorage.setItem('todoItemsData', JSON.stringify(items));
      generateList(items, listItemsDiv);
    });

    listItemCheck.addEventListener('click', () => {
      checkItem(item, items, descriptionInput);
      generateList(items, listItemsDiv);
    });
  });
};

export default generateList;
