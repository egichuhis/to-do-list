import saveToLocalStorage from './saveToLocalStorage.js';

const removeItems = (indexToRemove, itemsArray) => {
  if (indexToRemove >= 0 && indexToRemove < itemsArray.length) {
    itemsArray.splice(indexToRemove, 1);

    for (let i = 0; i < itemsArray.length; i += 1) {
      itemsArray[i].index = i + 1;
    }

    saveToLocalStorage(itemsArray);
  }
};

module.exports = removeItems;
