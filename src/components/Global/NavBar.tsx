import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 bg-gradient-to-b  from-teal-300/60">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="RenVital Logo" />
            <div className="flex flex-col text-emerald-800 font-semibold">
              <span className="text-2xl whitespace-nowrap">RenVital</span>
            </div>
          </Link>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link
                  to={"/"}
                  className="hover:scale-[1.1] block py-2 px-3 text-black rounded md:p-0 "
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to={"/info"}
                  className="hover:scale-[1.1] block py-2 px-3 text-black rounded md:p-0 "
                >
                  Infórmate
                </Link>
              </li>
              <li>
                <Link
                  to={"/comunidad"}
                  className="hover:scale-[1.1] block py-2 px-3  text-black rounded md:p-0 "
                >
                  Comunidad
                </Link>
              </li>
              <li>
                <a
                  href="/Comida"
                  className="hover:scale-[1.1] block py-2 px-3  text-black rounded md:p-0 "
                >
                  Alimentación
                </a>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3  text-emerald-700 rounded md:p-0 "
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={toggleNavBar}
            className="flex xl:hidden text-emerald-700 items-center ml-auto mr-10 font-bold text-3xl transition-all duration-6000"
          >
            {isOpen ? "X" : "="}
          </div>
        </div>
        {isOpen && (
          <div className="animate-fade-down animate-duration-200 xl:hidden flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-30 transition-all duration-1000 bg-slate-400 rounded rounded-b-md text-emerald-700 absolute w-full text-xl gap-10 space-y-5">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-emerald-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-emerald-700 rounded md:p-0 "
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to={"/info"}
                  className="block py-2 px-3 text-emerald-700 rounded md:p-0 "
                >
                  Infórmate
                </Link>
              </li>
              <li>
                <Link
                  to={"/comunidad"}
                  className="block py-2 px-3  text-emerald-700 rounded md:p-0 "
                >
                  Comunidad
                </Link>
              </li>
              <li>
                <a
                  href="/Comida"
                  className="block py-2 px-3  text-emerald-700 rounded md:p-0 "
                >
                  Alimentación
                </a>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3  text-emerald-700 rounded md:p-0 "
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
