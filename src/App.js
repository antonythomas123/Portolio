import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ToastContainer from "./components/Toast/ToastContainer";
import { ToastProvider } from "./providers/ToastProvider";
import ContactMe from "./views/ContactMe/ContactMe";
import LandingPage from "./views/LandingPage/LandingPage";
import Resume from "./views/Resume/Resume";

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <ToastProvider>
        <LandingPage />
        <Resume />
        <ContactMe />

        <ToastContainer />
      </ToastProvider>
    </div>
  );
}

export default App;
