const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload: data,
  };
};

const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

export { addTask, deleteTask };
