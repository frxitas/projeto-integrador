import { useState } from "react";
import { navbarData } from "./NavbarData";
import { List, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <aside
      className={`flex flex-col items-center justify-between h-full px-6 bg-[#f8b475] transition-all ease-in-out duration-300 ${
        menuIsOpen ? "w-[240px]" : "w-[74px]"
      }`}
    >
      <div className="flex flex-col justify-start items-start w-full max-h-full gap-6 py-6">
        <button
          className="bg-transparent border-none cursor-pointer p-0 hover:text-white"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <List size={24} weight="regular" />
        </button>
        <ul className="flex flex-col justify-center items-start gap-4 w-full h-fit">
          {navbarData.map((item) => {
            let Icon = item.icon;
            return (
              <Link
                className="text-black transition-opacity ease-in duration-300"
                to={item.link}
                key={item.label}
              >
                <li className="flex justify-start items-center gap-8 text-sm hover:text-white">
                  <Icon size={24} weight="regular" />
                  <p className={menuIsOpen ? "show" : "hidden"}>{item.label}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col justify-start items-start w-full max-h-full gap-0 py-6">
        <button className="flex justify-center items-center gap-8 bg-transparent border-none cursor-pointer p-0 hover:text-white">
          <SignOut size={24} weight="regular" />
          <p className={menuIsOpen ? "opacity-100 visible" : "opacity-0 invisible"}>Logout</p>
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
