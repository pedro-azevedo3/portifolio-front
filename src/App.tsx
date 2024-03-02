import Nav from './components/Nav'
import About from './components/About'
import Project from './components/Project'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Speak from './components/SpeakWithMe'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function App() {
  return (
    <div>
      <Nav />
      <About id="About"/>
      <Project id="MyProjects" />
      <AboutMe id="AboutMe" />
      <Skills id="Skills" />
      {/*<Speak id="Speak"/>*/}
      <ContactMe/>
      <Footer id="Footer" />
    </div>
  );
}
