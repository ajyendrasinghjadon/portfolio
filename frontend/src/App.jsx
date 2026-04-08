import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundParticles />
      <Navbar />

      {/* Main Content Area using the reusable layout container */}
      <main className="flex-grow pt-24 pb-12 layout-container">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Loading...</div>}>
          {/* Dynamic section support mapping to the Navbar */}
          <div id="home">
            <Hero />
          </div>

          {/* About Section */}
          <div id="about">
            <About />
          </div>

          {/* Projects Section */}
          <div id="projects">
            <Projects />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <Contact />
          </div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
