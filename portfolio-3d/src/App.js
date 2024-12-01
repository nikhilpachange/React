import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ThreeScene from './components/ThreeScene';

const App = () => {
  return (
    <>
      <ThreeScene />
      <div className="content">
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  );
};

export default App;
