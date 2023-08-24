import generateList from './generateList.js';
import saveToLocalStorage from './saveToLocalStorage.js';

const addItems = (items, listItemsDiv) => {
  const addItemInput = document.getElementById('add-item-input');

  if (addItemInput.value) {
    const newItem = {
      description: addItemInput.value,
      complete: false,
      index: items.length + 1,
    };

    items.push(newItem);

    saveToLocalStorage(items);

    generateList(items, listItemsDiv);

    addItemInput.value = '';
  }
};

module.exports = addItems;
