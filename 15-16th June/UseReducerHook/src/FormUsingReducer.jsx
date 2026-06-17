import { useReducer } from "react";

const reducer = (currState, action) => {
  // let newState = null;
  // console.log(action.payload.name);
  // switch (action.type) {
  //   case "name":
  //     newState = {
  //       ...currState,
  //       name: action.payload.value,
  //     };
  //     break;
  //   case "age":
  //     newState = {
  //       ...currState,
  //       age: action.payload.value,
  //     };
  //     break;

  //   default:
  //     console.log("Unknown");
  //     break;
  // }
  switch (action.type) {
    case "UPDATE":
      return {
        ...currState,
        [action.name]: action.value,
      };
    case "RESET":
      return {
        name: "",
        age: "",
      };

    default:
      break;
  }
};

const FormUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", age: "" });
  // console.log(state.name);
  const handleInput = (event) => {
    const { name, value } = event.target;
    // let act = {
    //   type: name,
    //   payload: {
    //     name,
    //     value,
    //   },
    // };
    // dispatch(act);
    dispatch({
      type: "UPDATE",
      name,
      value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
            value={state.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age..."
            value={state.age}
            onChange={handleInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUsingReducer;
