import { useGSAP } from "@gsap/react";
import photo from "../assets/Photo.png";
import Button from "../components/Button";
import { TextPlugin } from "gsap/TextPlugin";
import { gsap } from "gsap";
gsap.registerPlugin(TextPlugin);
export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#fadeIn-right",
      {
        y: 30,
        text: "@$(*#@$(*#&$@!#()!@#",
        ease: "power2.out",
      },
      {
        duration: 3,
        y: 0,
        text: "Fullstack Developer 👾",
        ease: "power2.out",
      }
    );
    tl.fromTo(
      "#fadeIn-left",
      {
        y: -100,
        opacity: 0,
        ease: "power2.out",
      },
      {
        duration: 1,
        y: 0,
        stagger: 1,
        opacity: 1,
        ease: "power2.out",
      }
    );
    tl.fromTo(
      "#photo",
      {
        opacity: 0,
        scale: 0,
        ease: "power4.inOut",
      },
      {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "power4.inOut",
      }
    );
    tl.fromTo(
      "#fadeIn-up",
      {
        opacity: 0,
        y: 100,
        ease: "power2.out",
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );
    tl.fromTo(
      "#name",
      {
        opacity: 0,
        ease: "power2.out",
      },
      {
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      "nav ul li",
      {
        opacity: 0,
        y: -100,
        ease: "power2.out",
      },
      {
        delay: 0.5,
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      "#logo",
      {
        duration: 0.2,
        y: -200,
      },
      {
        delay: 4,
        y: 0,
        duration: 1,
        ease: "bounce",
      }
    );
    gsap.fromTo(
      "#home div",
      {
        opacity: 0,
        y: 100,
        ease: "power2.out",
      },
      {
        scrollTrigger: {
          trigger: "#home",
          start: "top center +=500",
          end: "+=750",
          toggleActions: "restart reverse restart reverse",
        },
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <section id="home" className="h-screen w-full">
      <div
        className="max-sm:mt-28 max-sm:gap-12 max-sm:pb-12 flex flex-1 justify-center items-center gap-24 
       flex-row h-full max-sm:flex-col sm:flex-col md:flex-row lg:flex-row"
      >
        <div className="max-sm:items-center flex gap-8 flex-col">
          <h1 className="font-bold text-7xl lg:text-8xl">
            <span className="font-border color-primary" id="fadeIn-left">
              Hello,
              <br />{" "}
              <span className="underline italic" id="fadeIn-left">
                I'm
              </span>{" "}
            </span>
            <span
              id="name"
              className="bg-gradient-to-r from-orange-600 via-purple-400 to-green-400 text-transparent bg-clip-text"
            >
              Ilya
            </span>
          </h1>
          <h3
            className="font-border color-blue bg-white font-bold text-3xl secondary-text-color md:text-3xl lg:text-4xl w-fit"
            id="fadeIn-right"
          ></h3>
          <div className="flex gap-6" id="fadeIn-up">
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
        <div className="flex justify-center flex-col items-center" id="photo">
          <div
            className="bg-color-green rounded-md border-2 border-black"
            style={{
              boxShadow: "6px 8px 0px #a258ff",
            }}
          >
            <img
              src={photo}
              alt="photo of me"
              className="w-[240px] h-[320px] lg:w-[360px] lg:h-[480px] md:w-[240px] md:h-[320px]"
            />
          </div>
          <div>
            <p className="z-10 rounded-tr-md rounded-bl-md text-md italic bg-gradient-to-br from-orange-600 via-orange-500 to-red-500">
              This is me btw ^_^
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
