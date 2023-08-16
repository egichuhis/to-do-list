const addItems = (items) => {
  const addItemInput = document.getElementById('add-item-input');
  const arrayLength = items.length;

  if (addItemInput.value) {
    items.push({
      description: addItemInput.value,
      complete: false,
      index: arrayLength + 1,
    });

    localStorage.setItem('todoItemsData', JSON.stringify(items));
  }
};

export default addItems;
