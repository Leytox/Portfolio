import { navElements } from "../constants";
export default function Header() {
  return (
    <header
      className="top-0 z-10 fixed w-full max-sm:w-full
    max-lg:w-full max-md:w-full flex flex-1 flex-row justify-between lg:justify-evenly items-center rounded-b-3xl bg-black h-20 max-sm:justify-center max-sm:items-center gap-6"
    >
      <div
        className="max-sm:hidden pointer-events-none w-12 h-12 bg-color-primary border-black border-[1.5px] rounded-full ml-12 justify-center
        items-center flex primary-text-color text-4xl font-bold antialiased"
        id="logo"
        style={{ boxShadow: "3px 2px 0px 0 white" }}
      >
        L
      </div>
      <nav>
        <ul
          className="w-full text-center max-sm:hidden max-[768px]:hidden flex flex-1 flex-row justify-center
          items-center text-white gap-8 mr-12 text-2xl font-semibold antialiased"
        >
          {navElements.map((element, index) => (
            <li
              key={index}
              className="font-bebas uppercase text-3xl transition ease-in-out hover:first-letter:text-orange-500 hover:color-purple"
            >
              <a href={element.link}>
                {element.name}
                {element.icon}
              </a>
            </li>
          ))}
        </ul>
        <ul
          className="w-full text-center lg:hidden md:hidden flex flex-1 flex-row justify-center
          items-center text-white gap-4 mr-12 font-semibold antialiased"
        >
          {navElements.map((element, index) => (
            <li
              key={index}
              className="font-bebas uppercase text-2xl transition ease-in-out hover:first-letter:text-orange-500 hover:color-purple"
            >
              <a href={element.link}>{element.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
