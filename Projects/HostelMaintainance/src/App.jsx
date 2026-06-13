import Dashboard from "./components/Day-1/Dashboard";
import MForm from "./components/Day-1/MForm";
import RequestList from "./components/Day-1/RequestList";
import SearchBar from "./components/Day-1/SearchBar";
import Header from "./components/Header/Header";
import RequestContextProvider from "./components/Day-1/store/RequestContext";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-500 overflow-hidden">
      <Header />
      <RequestContextProvider>
        <Dashboard />
        <div className="w-full p-3 m-3 pl-9 pt-7 bg-white/20 rounded-2xl backdrop-blur-3xl text-black flex gap-5">
          <MForm />
          <div className="w-[70vw] border-2 border-gray-400 rounded-2xl flex flex-col gap-5 p-5">
            <SearchBar />
            <RequestList />
          </div>
        </div>
      </RequestContextProvider>
    </div>
  );
};

export default App;
