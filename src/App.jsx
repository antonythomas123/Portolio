import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ToastContainer from "./components/Toast/ToastContainer";
import { ToastProvider } from "./providers/ToastProvider";
import ContactMe from "./views/ContactMe/ContactMe";
import LandingPage from "./views/LandingPage/LandingPage";
import Resume from "./views/Resume/Resume";
import Works from "./views/Works/Works";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <ToastProvider>
        <div id="home">
          <LandingPage />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="contactme">
          <ContactMe />
        </div>

        <ToastContainer />
      </ToastProvider>
    </div>
  );
}

export default App;
