

const mockElement = document.createElement('div');
mockElement.setAttribute = jest.fn();

jest.mock('./src/modules/generateList.js');
jest.mock('./src/modules/saveToLocalStorage.js');
jest.mock('./src/modules/todoItems.js');

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
