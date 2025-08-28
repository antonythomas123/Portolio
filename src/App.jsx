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
    <div className="overflow-x-hidden antialiased">
      <div className="fixed inset-0 -z-10">
        <div class="relative h-full w-full bg-black">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <Navbar />
      <ToastProvider>
        <div className="p-12">
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
        </div>
        <ToastContainer />
      </ToastProvider>
    </div>
  );
}

export default App;

<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>;
