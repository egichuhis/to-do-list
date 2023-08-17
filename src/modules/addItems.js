import generateList from './generateList.js';

const addItems = (items, listItemsDiv) => {
  const addItemInput = document.getElementById('add-item-input');

  if (addItemInput.value) {
    const newItem = {
      description: addItemInput.value,
      complete: false,
      index: items.length + 1,
    };

    items.push(newItem);

    localStorage.setItem('todoItemsData', JSON.stringify(items));

    generateList(items, listItemsDiv);

    addItemInput.value = '';
  }
};

export default addItems;
