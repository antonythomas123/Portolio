import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContactMe from "./views/ContactMe/ContactMe";
import LandingPage from "./views/LandingPage/LandingPage";
import Resume from "./views/Resume/Resume";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <LandingPage />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;
