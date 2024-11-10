import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.png";

export function Footer() {
  return (
    <footer className="flex justify-center border-t-2 border-t-neutral-700 gap-5">
      <div>
        <img src={logo} className="h-20"></img>
      </div>
      <div className="flex items-center justify-center text-Cream font-Montserrat text-sm gap-5">
        <img src={linkedin} className="bg-Cream h-8" />
        <img src={github} className="h-8" />
      </div>
    </footer>
  );
}

export default Footer;
