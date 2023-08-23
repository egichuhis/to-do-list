import addItems from './src/modules/addItems.js';

import removeItems from './src/modules/removeItems.js';

// Mock the DOM environment
const mockHtml = `
  <div id="list-items-div">
    <input id="add-item-input" />
    <ul id="item-list">
      <!-- existing list items -->
    </ul>
  </div>
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

    addItems(items, listItemsDiv);

    const itemList = document.getElementById('item-list');
    const listItemElements = itemList.querySelectorAll('li');

    expect(listItemElements.length).toBe(1);
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
      <li>Item 2</li>
    `;

    removeItems(0, items);

    const listItemElements = itemList.querySelectorAll('li');

    expect(listItemElements.length).toBe(1);
    expect(listItemElements[0].textContent).toBe('Item 2');
  });
});