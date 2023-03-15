import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  return (
    <div>
      <nav class={` px-2 sm:px-4 py-2.5 rounded-b-md  bg-[#ffffff00] ${isFixed ? "fixed navbar-scroll-down left-0 right-0  z-40" : "navbar-scroll-up"} `}>
        <div class="container flex flex-wrap items-center justify-between mx-auto  ">
          <a href="" class="flex mx-auto  items-center md:mx-0">
            <Link to="/" className="flex">
              <Diversity3Icon sx={{ height: "2rem", width: "4rem", marginRight: "0.1rem", color: "white" }} />
              <span class="self-center text-xl font-semibold whitespace-nowrap text-white my-auto">Dansmultipro</span>
            </Link>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a href="" class="block py-2 pl-3 pr-4 text-xl font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent" aria-current="page">
                  <AccountCircleIcon sx={{ height: "2.3rem", width: "4rem", marginRight: "0.1rem", color: "white" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
