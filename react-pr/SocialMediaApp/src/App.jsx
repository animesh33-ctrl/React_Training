import Header from "./components/header/Header";
import Aside from "./components/sidebar/Aside";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-black/95">
      <Header />
      <Aside />
    </div>
  );
};

export default App;
