import "./App.scss";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Works } from "./components/Works";

function App() {
  return (
    <div className="w-full h-screen font-dm-sans">
      <Intro />
      <About />
      <Works />
    </div>
  );
}

export default App;
