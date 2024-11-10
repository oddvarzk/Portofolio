import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Nav from "../nav";

export function Header() {
  return (
    <header className="flex justify-between border-b-2 border-b-neutral-700">
      <div>
        <Link to="/">
          <img className="h-24" src={logo} alt="Logo of portofolio" />
        </Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
