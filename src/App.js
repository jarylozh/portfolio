import "./App.scss";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className='w-full h-screen font-dm-sans'>
      <Intro />
      <About />
    </div>
  )
}

export default App;
