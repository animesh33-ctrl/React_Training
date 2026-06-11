import TechnoCard from "./components/TechnoCard.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <TechnoCard
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
      />
    </div>
  );
}

export default App;
