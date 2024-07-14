import { useGSAP } from "@gsap/react";
import photo from "../assets/Photo.png";
import Button from "../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  useGSAP(() => {
    gsap.fromTo(
      "#about",
      {
        y: -200,
        opacity: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          scrub: true,
          trigger: "#about",
          start: "-=100 center", // Adjusted to delay the start of the animation
          end: "+=350",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }, []);
  return (
    <section id="about" className="flex justify-center items-center w-full">
      <div className="-rotate-2 max-sm:w-[360px] w-[1280px] h-[540px] bg-color-blue rounded-xl flex justify-center items-center">
        <div className="flex flex-row justify-start w-full gap-8">
          <div
            className="bg-black rounded-md ml-0 lg:ml-24"
            style={{
              boxShadow: "8px 8px 5px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src={photo}
              alt="photo of me"
              className="pointer-events-none hidden lg:block w-[240px] h-[320px] lg:w-[360px] lg:h-[480px] md:w-[240px] md:h-[320px] bg-color-green border-2 border-black rounded-md transition hover:-translate-x-3 hover:-translate-y-3 "
            />
          </div>
          <div
            id="about-text"
            className="flex flex-col justify-center items-start p-6 gap-4 break-words w-full lg:w-1/2"
          >
            <h1 className="text-white text-7xl font-extrabold">About Me❔</h1>
            <h2 className="color-primary font-bold text-3xl">
              Fullstack Developer
            </h2>
            <p className="text-white font-bold text-2xl">
              Hello, I'm Fullstack Developer using the best practices to improve
              any application on MERN stack. Welcome to the world where
              creativity meets functionality!
            </p>
            <div className="flex gap-6">
              <Button
                title={"Contact me 📞"}
                handleClick={() => {}}
                styles={
                  "bg-black text-white border-black border-[1px] hover:bg-white hover:text-black"
                }
                shadowColor={"#00c5ad"}
              />
              <Button
                title={"Download CV 📃"}
                handleClick={() => {
                  window.open("/CV.pdf");
                }}
                styles={
                  "bg-black text-white border-black border-[1px] hover:bg-white hover:text-black"
                }
                shadowColor={"#00c5ad"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
