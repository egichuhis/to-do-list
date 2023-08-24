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

// Create a mock element with the necessary methods
const mockElement = document.createElement('div');
mockElement.setAttribute = jest.fn();

jest.mock('./src/modules/generateList.js');
jest.mock('./src/modules/saveToLocalStorage.js');
jest.mock('./src/modules/todoItems.js');

describe('clearCompleted', () => {
  test('clears completed items and updates UI', () => {
    // Mock data
    const mockItems = [
      { id: 1, description: 'Task 1', complete: true },
      { id: 2, description: 'Task 2', complete: false },
      { id: 3, description: 'Task 3', complete: true },
    ];

    // Mock the getStoredTodoItems function to return mockItems
    getStoredTodoItems.mockReturnValue(mockItems);

    // Call the clearCompleted function
    clearCompleted();

    // Check if saveToLocalStorage was called with the filtered items
    expect(saveToLocalStorage).toHaveBeenCalledWith(
      mockItems.filter((item) => item.complete === false),
    );
  });

  // Add more test cases as needed
});
