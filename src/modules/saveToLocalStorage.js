const saveToLocalStorage = (data) => {
  localStorage.setItem('todoItemsData', JSON.stringify(data));
};

export default saveToLocalStorage;