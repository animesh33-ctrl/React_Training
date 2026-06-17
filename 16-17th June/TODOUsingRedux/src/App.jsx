import { useSelector } from "react-redux";
import Header from "./components/Header";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItems = useSelector((store) => store.todoList);
  console.log(todoItems);
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <TodoItems todoItems={todoItems} />
    </div>
  );
};

export default App;
