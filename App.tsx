import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

const App: React.FC = () => {
  // A simple state to force re-render when the hash changes.
  const [tick, setTick] = useState(0);

  // This effect sets up the event listener. Its only job is to trigger a re-render.
  useEffect(() => {
    const handleHashChange = () => {
      setTick(t => t + 1);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // On every render (triggered by the 'tick' state change), we read the hash directly.
  const currentHash = window.location.hash;
  const Page = currentHash === '#/projects' ? ProjectsPage : HomePage;

  // This effect handles scrolling. It runs after every render where 'tick' has changed.
  useEffect(() => {
    const hash = window.location.hash;

    // If we're on the projects page or navigating to the top of the homepage, scroll to top.
    if (hash === '#/projects' || hash === '' || hash === '#' || hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Otherwise, it's an anchor link on the homepage.
    const id = hash.substring(1);
    if (id) {
        // A small delay is necessary to ensure the HomePage component has been rendered
        // and its elements are available in the DOM before we try to scroll to them.
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
  }, [tick]); // We depend on the 'tick' to know when a navigation event has occurred.

  return (
    <div id="top" className="bg-slate-50 leading-relaxed text-slate-600 antialiased selection:bg-red-600 selection:text-white">
      <Header />
      <main id="content" className="mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24">
        <Page />
      </main>
      <Footer />
    </div>
  );
};

export default App;
