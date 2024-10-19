import Button from "./Button.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function ServiceCard({ service, index }) {
  useGSAP(() => {
    gsap.fromTo(
      "#service-card",
      {
        opacity: 0,
        y: -50,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#service-card",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div
      id="service-card"
      className="max-sm:w-[320px] bg-color-purple border-2 border-black rounded-lg h-[640px] w-[480px] flex flex-col items-center justify-start"
      style={{ boxShadow: "12px 12px 0px black" }}
    >
      <div className="relative -top-12 w-32 h-32 border-2 border-white rounded-full bg-color-light-green flex justify-center items-center text-7xl text-white font-extrabold">
        {index}
      </div>
      <h2 className="text-4xl font-bold mt-4 text-white uppercase text-center font-bebas leading-normal tracking-wider">
        {service.title} {service.icon}
      </h2>
      <div className="flex flex-col h-full justify-between">
        <p className="max-sm:text-xl text-2xl font-bold text-white text-center px-8 mt-4">
          {service.description}
        </p>
        <div className="flex justify-center mb-10">
          <Button
            title={"LEARN MORE 📚"}
            handleClick={() => {
              window.open("/CV.pdf");
            }}
            styles={
              "bg-color-green text-white hover:-translate-y-3 hover:bg-white hover:text-black"
            }
            shadowColor={"#FFDD55"}
          />
        </div>
      </div>
    </div>
  );
}
