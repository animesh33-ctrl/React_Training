import useInput from "../hooks/useInput";

function UserForm() {
  const [firstName, resetFirstName, bindFirstName] = useInput("");
  const [lastName, resetLastName, bindLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
    alert(`Hello  ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label> First Name</label>
          <input {...bindFirstName} type="text"></input>
        </div>
        <div>
          <label> Last Name</label>
          <input {...bindLastName} type="text"></input>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default UserForm;
