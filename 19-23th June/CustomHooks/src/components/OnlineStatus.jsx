import useToggle from "../hooks/useToggle";

function OnlineStatus() {
  const [isOnline, toggleStatus] = useToggle(false);

  return (
    <div
      className="container"
      style={{
        backgroundColor: isOnline ? "green" : "red",
      }}
    >
      <h1>Status: {isOnline ? "Online" : "Offline"}</h1>

      <button onClick={toggleStatus}>
        Go {isOnline ? "Offline" : "Online"}
      </button>
    </div>
  );
}

export default OnlineStatus;
