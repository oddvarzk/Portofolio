import React from "react";
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="text-Cream">
      {/* Hamburger Menu for small screens */}
      <div className="absolute top-4 right-5 md:hidden">
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={isOpen ? "open" : "closed"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="h-14 w-14 rounded-full bg-white/0 transition-colors hover:bg-white/20"
          >
            {/* Top Bar */}
            <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-7 bg-Cream"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "30%" }}
            />
            {/* Middle Bar */}
            <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-7 bg-Cream"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            {/* Bottom Bar */}
            <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-2 bg-Cream"
              style={{
                x: "-50%",
                y: "50%",
                bottom: "30%",
                left: "calc(50% + 6px)",
              }}
            />
          </motion.button>
        </MotionConfig>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col font-normal font-Montserrat md:justify-center md:flex md:flex-row gap-10 px-5 py-6 ${
          isOpen ? "flex mt-10" : "hidden mt-4"
        } md:mt-0`}
      >
        <li className="hover:underline mt-2">
          <Link to="/about" onClick={() => setIsOpen(false)}>
            1. About me
          </Link>
        </li>
        <li className="hover:underline mt-2">
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            2. Projects
          </Link>
        </li>
        <li className="hover:underline mt-2">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            3. Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default Nav;
