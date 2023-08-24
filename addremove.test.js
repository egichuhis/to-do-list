const addItems = require('./src/modules/addItems.js');

// Mock the DOM environment
const mockHtml = `
  <div id="list-items-div">
    <input id="add-item-input" />
    <ul id="item-list">
      
    </ul>
  </div https:>
`;

beforeEach(() => {
  // Set up the mock DOM environment
  document.body.innerHTML = mockHtml;
});

describe('addItems function', () => {
  test('should add an <li> element to the list', () => {
    const items = [];
    const listItemsDiv = document.getElementById('list-items-div');

    const addItemInput = document.getElementById('add-item-input');
    addItemInput.value = 'New Item';

    const addItemsPromise = new Promise((resolve) => {
      addItems(items, listItemsDiv);
      setTimeout(() => resolve(), 10);
    });

    return addItemsPromise.then(() => {
      const listItemElements = document.querySelectorAll;

      expect(listItemElements.length).toBe(1);
    });
  });
});