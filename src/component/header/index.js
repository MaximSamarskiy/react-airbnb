import "./index.css";

import logo from "../../public/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" height={32} />
    </header>
  );
}
