import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Services from "./sections/Services.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <main className="font-montserrat">
      <Header /> <Hero /> <About /> <Services /> <Projects /> <Contacts />
      <Footer />
    </main>
  );
}
