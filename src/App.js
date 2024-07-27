import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <LandingPage/>
    </div>
  );
}

export default App;
