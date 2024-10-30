import LandingPage from "./components/pages/landingPage";
import About from "./components/pages/about";
import Journey from "./components/pages/journey";
import ProjectIntro from "./components/pages/projectIntro";
import Projects from "./components/pages/projects";
import ContactForm from "./components/pages/contactForm";
import Outro from "./components/pages/outro";

function App() {
  return (
    <>
      <LandingPage />
      <About />
      <Journey />
      <ProjectIntro />
      <Projects />
      <ContactForm />
      <Outro />
    </>
  );
}

export default App;
