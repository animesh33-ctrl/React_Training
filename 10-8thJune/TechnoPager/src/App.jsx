import ErrorFinder from "./components/ErrorFinder.jsx";
import ErrorFinder2 from "./components/ErrorFinder2.jsx";
import FetchApi from "./components/FetchApi.jsx";
import TechnoCard from "./components/TechnoCard.jsx";

function App() {
  return (
    <div className="min-h-screen bg-pink-300 flex justify-center items-center p-5 min-w-screen">
      {/* <TechnoCard
        fullName="Animesh Palui"
        emailId="paluianimesh31@gmail.com"
        location="Kolkata"
        contactNo="8918767902"
        collegeName="IEM"
        tagLine="Java Full Stack Developer"
        workedOnProject={true}
        javaLevel="Expert"
        reactKnowledge="TypeScript"
        aiDetails="Python + AI"
        imgLink="C:\Programming\Capgemini React\image\photo.jpg"
      /> */}
      {/* <ErrorFinder /> */}
      {/* <ErrorFinder2 /> */}
      <FetchApi />
    </div>
  );
}

export default App;
