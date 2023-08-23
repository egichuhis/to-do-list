import generateList from './generateList.js';
import saveToLocalStorage from './saveToLocalStorage.js';
import getStoredTodoItems from './todoItems.js';

const clearCompleted = () => {
  const items = getStoredTodoItems();
  const filteredItems = items.filter((item) => item.complete === false);
  saveToLocalStorage(filteredItems);
  const listItemsDiv = document.getElementById('list-items-div');
  generateList(filteredItems, listItemsDiv);
};

export default clearCompleted;
