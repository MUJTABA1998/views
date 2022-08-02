import "./App.css";
import Review from "./Review";

function App() {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center w-full h-[80vh] gap-10">
          <h1 className="text-5xl text-white uppercase">Our reviews</h1>
          <Review />
        </div>
      </div>
    </div>
  );
}

export default App;
