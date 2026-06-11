import { useContext } from "react";
import Card from "./Card";
import { TaskDataContext } from "../App";

const Cards = () => {
  const { taskData, handleDelete } = useContext(TaskDataContext);

  return (
    <div className="max-w-6xl mx-auto px-6 mt-6 space-y-4">
      {taskData.map((item) => (
        <Card key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Cards;
