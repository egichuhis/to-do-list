const addItems = require('./src/modules/addItems.js');
const removeItems = require('./src/modules/removeItems.js');

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

describe('removeItems function', () => {
  test('should remove an <li> element from the list', () => {
    const items = [
      { description: 'Item 1', complete: false, index: 1 },
      { description: 'Item 2', complete: false, index: 2 },
    ];

    const itemList = document.getElementById('item-list');
    itemList.innerHTML = `
      <li>Item 1</li>
    `;

    const removeItemsPromise = new Promise((resolve) => {
      removeItems(1, items);
      setTimeout(() => resolve(), 10);
    });

    return removeItemsPromise.then(() => {
      const listItemElements = itemList.querySelectorAll('li');

      expect(listItemElements.length).toBe(1);
      expect(items[0].index).toBe(1);
    });
  });
});