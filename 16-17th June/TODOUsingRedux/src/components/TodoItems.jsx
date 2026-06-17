import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Todo Tasks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todoItems.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TodoItems;
