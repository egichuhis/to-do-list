const checkItem = (item, items, descriptionInput) => {
  if (item.complete) {
    item.complete = false;
    descriptionInput.classList.remove('strikethrough');
  } else {
    item.complete = true;
    descriptionInput.classList.add('strikethrough');
  }

  localStorage.setItem('todoItemsData', JSON.stringify(items));
  return items;
};

export default checkItem;
