import Header from "./components/Header.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";
import Services from "./sections/Services.tsx";
import Contacts from "./sections/Contacts.tsx";
import Footer from "./components/Footer.tsx";
export default function App() {
  return (
    <main className="font-montserrat">
      <Header /> <Hero /> <About /> <Services /> <Projects /> <Contacts />
      <Footer />
    </main>
  );
}
