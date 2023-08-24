import editItem from './src/modules/editItem.js'; // Import the function to be tested

describe('editItem', () => {
  test('updates item description and returns updated items', () => {
    const mockItem = { id: 1, description: 'Old Description' };
    const mockItems = [mockItem];
    const newDescription = 'Updated Description';

    const result = editItem(mockItem, newDescription, mockItems);

    expect(mockItem.description).toBe(newDescription);

    expect(result).toBe(mockItems);
  });

  test('does not update description for invalid item', () => {
    const invalidItem = { id: 2, description: 'Another Item' };
    const mockItems = [{ id: 1, description: 'Old Description' }];
    const newDescription = 'Updated Description';

    const result = editItem(invalidItem, newDescription, mockItems);
    expect(result).toBe(mockItems);
  });
});
