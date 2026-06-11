import React from "react";
import { EmpDetails } from "./components/EmpDetails.jsx";
import Destructuring from "./components/Destructuring.jsx";
import Destructuring2 from "./components/Destructuring2.jsx";

const App = () => {
  return (
    // <>

    //   <EmpDetails name="Animesh" status="Available" /> {/* will override the default value and show the passed value */}
    //   <EmpDetails name="Aditya" status={null} /> {/* will override the default value and show nothing */}
    //   <EmpDetails name="Sahil" status={false} /> {/* will override the default value and show nothing */}
    //   <EmpDetails name="Sahil" status={undefined} /> {/* will show the default value */}
    //   <EmpDetails name="Sahil" status={0} /> will show the value passed
    // </>

    // <>
    //   <Destructuring name="Animesh" skill="React" status="Available" />
    // </>

    <>
      <Destructuring2 name="Animesh" 
                      skill={["Java","JS","React"]}
                      isLoggedIn = {true}
                      passoutYear = {2026}
      />
    </>
  );
};

export default App;
