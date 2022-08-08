import { Suspense, useEffect, useState } from "react";

import Menu from "./components/menu";
import MobileMenu from "./components/menu/mobile";
import About from "./pages/about";
import Landing from "./pages/landing";
import Links from "./pages/links";
import Projects from "./pages/projects";

function App() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    setWindowSize({ windowWidth, windowHeight });
  };
  return (
    <Suspense fallback="loading">
      <div className="App">
        {windowSize.windowWidth < 576 ? <MobileMenu /> : <Menu />}
        <Landing />
        <About />
        <Projects />
        <Links windowSize={windowSize} />
      </div>
    </Suspense>
  );
}

export default App;
