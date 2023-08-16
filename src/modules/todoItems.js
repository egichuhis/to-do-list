const getStoredTodoItems = () => {
  const storedToDoItemsJSON = localStorage.getItem('todoItemsData');

  if (storedToDoItemsJSON !== null) {
    const storedToDoItems = JSON.parse(storedToDoItemsJSON);
    return storedToDoItems;
  }
  return [];
};

export default getStoredTodoItems;
