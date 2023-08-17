const editItem = (item, newDescription, items) => {
  item.description = newDescription;
  return items;
};

export default editItem;
