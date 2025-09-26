import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-36">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
