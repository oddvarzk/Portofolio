import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="flex justify-center border-t-2 border-t-neutral-700">
      <div>
        <img src={logo} className="h-20"></img>
      </div>
      <div className="flex items-center justify-center text-Cream font-Montserrat">
        Other contact social media icons, plus contact
      </div>
    </footer>
  );
}

export default Footer;
