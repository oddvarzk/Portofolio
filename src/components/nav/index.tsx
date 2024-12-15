import React from "react";
import { Link as ScrollLink } from "react-scroll";

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="text-Cream">
      {/* Hamburger Menu for small screens */}
      <div className="absolute top-4 right-5 md:hidden"></div>

      {/* Navigation Links */}
      <ul
        className={`flex-col font-light font-Montserrat md:justify-center md:flex md:flex-row gap-10 px-5 py-6 ${
          isOpen ? "flex mt-10" : "hidden mt-4"
        } md:mt-0`}
      >
        <li className="hover:underline mt-2">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          >
            <span className="font-Playfair text-xl">1.</span> About me
          </ScrollLink>
        </li>
        <li className="hover:underline mt-2">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          >
            <span className="font-Playfair text-xl">2.</span> Projects
          </ScrollLink>
        </li>
        <li className="hover:underline mt-2">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          >
            <span className="font-Playfair text-xl">3.</span> Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
