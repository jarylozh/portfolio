import "./App.scss";
import { Intro } from "./components/Intro";

import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
function App() {
  return (
    <div className='layout'>
      <Navbar />
      <Intro />
      <About />
    </div>
  )
}

export default App;
