import React from "react";

const ListComp = () => {
  const employees = [
    {
      id: 1,
      name: "Animesh",
      age: 22,
      role: "Frontend Developer",
      salary: 45000,
    },
    {
      id: 2,
      name: "Aditya",
      age: 23,
      role: "Backend Developer",
      salary: 50000,
    },
    {
      id: 3,
      name: "Sahil",
      age: 21,
      role: "UI/UX Designer",
      salary: 40000,
    },
  ];

  const empList = employees.map((item) => (
    <div key={item.id}>
      <p>Name :- {item.name}</p>
      <p>Age :- {item.age}</p>
      <p>Role :- {item.role}</p>
      <p>Salary :- {item.salary}</p>
    </div>
  ));

  //   return (
  //     <>
  //       <h2>Emp Names</h2>
  //       {empNames.map((item, index) => (
  //         <p key={index}>{item}</p>
  //       ))}
  //     </>
  //   );

  return (
    <>
      <h2>EmpDetails are :-</h2>
      {empList}
    </>
  );
};

export default ListComp;
