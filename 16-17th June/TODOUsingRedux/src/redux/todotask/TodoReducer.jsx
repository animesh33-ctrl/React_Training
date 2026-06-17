const initialState = {
  todoList: [
    {
      id: 1,
      title: "Learn Redux",
      description: "Understand store, actions and reducers",
      completed: false,
      priority: "High",
      createdAt: "2026-06-17",
      updatedAt: null,
    },
    {
      id: 2,
      title: "Build Todo App",
      description: "Create CRUD operations using Redux",
      completed: false,
      priority: "Medium",
      createdAt: "2026-06-17",
      updatedAt: null,
    },
  ],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        todoList: [
          ...state.todoList,
          { ...action.payload, id: state.todoList.length + 1 },
        ],
      };
    case "DELETE_TASK":
      return {
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default TodoReducer;
