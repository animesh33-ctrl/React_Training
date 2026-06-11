import StudentCard from "./components/StudentCard";
import UserCard from "./components/UserCard";

// function App() {
//   const contactInfo = {
//     name: "Kalpak",
//     age: 24,
//     role: "MCA Student",
//     email: "kalpak@example.com",
//     linkedIn: "https://www.linkedin.com/in/chakrabortyk",
//   };

//   return (
//     <>
//       <h1 className="text-center text-body-emphasis">React Playground</h1>
//       <div className="container mt-5">
//         <UserCard {...contactInfo} />

//         <UserCard
//           name={contactInfo.name}
//           age={contactInfo.age}
//           role={contactInfo.role}
//         />
//       </div>
//     </>
//   );
// }

const App = () => {
  const s1 = {
    studentName: "Animesh",
    selected: true,
    orgName: "Capgemini",
    isTopper: true,
    college: "IEM",
  };

  const s2 = {
    studentName: "Aditya",
    selected: false,
    orgName: "",
    isTopper: false,
    college: "UEM",
  };

  return (
    <>
      {/* <StudentCard studentName="Animesh" selected={true} />
      <StudentCard studentName="Aditya" selected={false} /> */}
      <StudentCard {...s1} />
      <StudentCard {...s2} />
    </>
  );
};

export default App;
