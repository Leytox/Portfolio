import { useEffect } from "react";
import { gsap } from "gsap";
import djinni from "../assets/social/djinni.svg";
import github from "../assets/social/github.svg";
import telegram from "../assets/social/telegram.svg";
import linkedin from "../assets/social/linkedin.svg";
export default function Contacts() {
  useEffect(() => {
    gsap.fromTo(
      "#contacts-header-text",
      {
        opacity: 0,
        y: -100,
        duration: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#contacts-header-text",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      "#social img",
      {
        opacity: 0,
        duration: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.5,
          from: "random",
          ease: "power2.inOut",
        },
        duration: 0.5,
        scrollTrigger: {
          trigger: "#social img",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      "#contacts div p",
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
          trigger: "#contacts div p",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="contacts" className="py-14 bg-color-blue text-white">
      <div className="flex flex-col text-center">
        <h1
          className="text-6xl font-bebas tracking-widest"
          id="contacts-header-text"
        >
          Contacts 📞
        </h1>
        <div className="flex justify-center gap-24 flex-row max-sm:flex-col max-sm:gap-0 items-center mt-8">
          <div className="mb-6">
            <p className="text-2xl">
              ✉️: <a href="mailto:iladevder@gmail.com">iladevder@gmail.com</a>
            </p>
            <p className="text-2xl mt-4">
              📞 : <a href="tel:+905555555555">+38 096-37-35-436</a>
            </p>
          </div>
          <div className="flex flex-row gap-4" id="social">
            <a
              href="https://djinni.co/q/9fc6977cc3"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={djinni}
                alt="djinni logo"
                className="w-[48px] h-[48px]"
              />
            </a>
            <a
              href="https://github.com/Leytox"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="github logo"
                className="w-[48px] h-[48px]"
              />
            </a>
            <a href="https://t.me/Leytox" target="_blank" rel="noreferrer">
              <img
                src={telegram}
                alt="telegram logo"
                className="w-[48px] h-[48px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ilya-devder-912a92210/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin logo"
                className="w-[48px] h-[48px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
