const removeItems = (indexToRemove, itemsArray) => {
  if (indexToRemove >= 0 && indexToRemove < itemsArray.length) {
    itemsArray.splice(indexToRemove, 1);
    for (let i = indexToRemove; i < itemsArray.length; i += 1) {
      itemsArray[i].index = i + 1;
    }
    localStorage.setItem('todoItemsData', JSON.stringify(itemsArray));
  }
};

export default removeItems;
