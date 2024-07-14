import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Services() {
  useGSAP(() => {
    gsap.fromTo(
      "#services-heading-text",
      {
        opacity: 0,
        y: -50,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#services-heading-text",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <section id="services" className="min-h-screen bg-color-orange mt-12">
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-center items-center mt-20 text-center"
          id="services-heading-text"
        >
          <h1 className="text-6xl font-bebas tracking-widest">Services 🧑🏻‍💻 </h1>
          <h3 className="text-2xl font-bold mt-4 text-white">
            Full-Stack Development Solutions for Your Business Needs 🚀
          </h3>
        </div>
        <div className="flex flex-row gap-24 pb-10 justify-center items-start h-full mt-24 max-lg:flex-col">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
