const mockElement = document.createElement('div');
mockElement.setAttribute = jest.fn();

jest.mock('./src/modules/generateList.js');
jest.mock('./src/modules/saveToLocalStorage.js');
jest.mock('./src/modules/todoItems.js');