import { useState } from "react";
import "./Navbar.css";
import { navbarData } from "./NavbarData";
import { List, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <aside className={`navbar ${menuIsOpen ? "open" : "close"}`}>
      <div className="navbar-content">
        <button
          className="navbar-button"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <List size={24} weight="regular" />
        </button>
        <ul className="navbar-list">
          {navbarData.map((item) => {
            let Icon = item.icon;
            return (
              <Link
                className="navbar-list-item-link"
                to={item.link}
                key={item.label}
              >
                <li className="navbar-list-item">
                  <Icon size={24} weight="regular" />
                  <p className={menuIsOpen ? "show" : "hidden"}>{item.label}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="navbar-content">
        <button className="logout-button">
          <SignOut size={24} weight="regular" />
          <p className={menuIsOpen ? "show" : "hidden"}>Logout</p>
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
