import generateList from './src/modules/generateList.js';
import saveToLocalStorage from './src/modules/saveToLocalStorage.js';
import getStoredTodoItems from './src/modules/todoItems.js';

const clearCompleted = () => {
  const items = getStoredTodoItems();
  const filteredItems = items.filter((item) => item.complete === false);
  saveToLocalStorage(filteredItems);
  const listItemsDiv = document.getElementById('list-items-div');
  generateList(filteredItems, listItemsDiv);
};
describe('clearCompleted', () => {
  test('clears completed items and updates UI', () => {
    const mockItems = [
      { id: 1, description: 'Task 1', complete: true },
      { id: 2, description: 'Task 2', complete: false },
      { id: 3, description: 'Task 3', complete: true },
    ];

    getStoredTodoItems.mockReturnValue(mockItems);

    clearCompleted();

    expect(saveToLocalStorage).toHaveBeenCalledWith(
      mockItems.filter((item) => item.complete === false),
    );
  });
});
