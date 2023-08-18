const removeItems = (indexToRemove, itemsArray) => {
  if (indexToRemove >= 0 && indexToRemove < itemsArray.length) {
    itemsArray[indexToRemove].complete = false;

    for (let i = indexToRemove + 1; i < itemsArray.length; i += 1) {
      itemsArray[i].index = i;
    }

    itemsArray.splice(indexToRemove, 1);

    localStorage.setItem('todoItemsData', JSON.stringify(itemsArray));
  }
};

export default removeItems;
