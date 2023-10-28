import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Achievement, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Particle from "./components/Particle";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <div className="absolute right-0 top-0 h-full w-[100%] z-[2]">
        <Particle/>
      </div> */}
        </div>
        <About />
        {/* <Achievement/> */}
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;