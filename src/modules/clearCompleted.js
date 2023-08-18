import generateList from './generateList.js';
import getStoredTodoItems from './todoItems.js';

const clearCompleted = () => {
  const items = getStoredTodoItems();
  const filteredItems = items.filter((item) => item.complete === false);
  localStorage.setItem('todoItemsData', JSON.stringify(filteredItems));

  const listItemsDiv = document.getElementById('list-items-div');
  generateList(filteredItems, listItemsDiv);
};

export default clearCompleted;
