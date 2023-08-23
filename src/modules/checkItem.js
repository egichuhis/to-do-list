import saveToLocalStorage from './saveToLocalStorage.js';

const checkItem = (item, items) => {
  if (item.complete) {
    item.complete = false;
  } else {
    item.complete = true;
  }

  saveToLocalStorage(items);

  return items;
};

export default checkItem;
