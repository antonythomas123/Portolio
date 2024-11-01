import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContactMe from "./views/ContactMe/ContactMe";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <LandingPage />
      <ContactMe />
    </div>
  );
}

export default App;
