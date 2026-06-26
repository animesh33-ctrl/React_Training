import counterStore from "../store/counterStore";

const MyCounter = () => {
  const { count, increment, decreament } = counterStore();

  const handlePlus = () => {
    increment();
  };
  const handleMinus = () => {
    decreament();
  };

  return (
    <div>
      <h1>My Counter with Zustand</h1>
      <p>Count:{count}</p>
      <button onClick={handlePlus}>Increment</button>
      <button onClick={handleMinus}>Decrement</button>
    </div>
  );
};

export default MyCounter;
