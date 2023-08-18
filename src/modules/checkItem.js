const checkItem = (item, items) => {
  if (item.complete) {
    item.complete = false;
  } else {
    item.complete = true;
  }

  localStorage.setItem('todoItemsData', JSON.stringify(items));
  return items;
};

export default checkItem;
