import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function ProjectCard({ title, description, image, link }) {
  useGSAP(() => {
    gsap.fromTo(
      "#project-card",
      {
        opacity: 0,
        y: -100,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: "#project-card",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div
      id="project-card"
      className="max-sm:w-[320px] bg-color-green border-2 border-black rounded-xl h-[960px] w-96 flex flex-col items-center justify-start"
      style={{ boxShadow: "12px 12px 0px black" }}
    >
      <img src={image} alt={title} className="object-contain rounded-t-lg" />
      <h2 className="text-4xl font-bold mt-4 text-white uppercase text-center font-bebas leading-normal tracking-widest">
        {title}
      </h2>
      <div className="flex flex-col h-full justify-between">
        <p className="text-2xl font-bold text-white text-center px-8 mt-4">
          {description}
        </p>
        <div className="flex justify-center mb-10">
          <Button
            title={"Project on Github 🔗"}
            handleClick={() => {
              window.open(link);
            }}
            styles={
              "bg-color-orange text-white hover:-translate-y-3 hover:bg-white hover:text-black"
            }
            shadowColor={"#FFDD55"}
          />
        </div>
      </div>
    </div>
  );
}
