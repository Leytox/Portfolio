import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";
export default function App() {
  return (
    <main className="font-montserrat">
      <Header /> <Hero /> <About /> <Services /> <Projects /> <Contacts />
      <Footer />
    </main>
  );
}
