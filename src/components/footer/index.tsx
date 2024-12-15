import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.png";

export function Footer() {
  return (
    <footer className="flex md:flex-row flex-col items-center md:justify-between justify-between border-t-2 border-t-neutral-700 py-5 gap-4 bg-neutral-900 text-Cream font-Montserrat px-5">
      {/* Logo Section */}
      <div className="flex items-center gap-5">
        <img src={logo} className="h-20" alt="Logo" />
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Zakarias Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col items-center gap-2 text-center font-Montserrat">
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/oddvar-zakarias-kristiansen-22b583262/">
            <img src={linkedin} className="h-8 bg-white" alt="LinkedIn" />
          </a>
          <a href="https://github.com/oddvarzk">
            <img src={github} className="h-8" alt="GitHub" />
          </a>
        </div>
        <a href="mailto:oddvarzk@gmail.com" className="hover:underline text-sm">
          oddvarzk@gmail.com
        </a>
        <p className="font-Montserrat text-sm">Phone: +47 472 07 143</p>
      </div>
    </footer>
  );
}

export default Footer;
