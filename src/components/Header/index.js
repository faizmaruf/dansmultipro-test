import Navbar from "../Navbar";
import BottomBarNavigation from "../BottomBarNavigation";
import { React, useState, useEffect } from "react";

const Header = () => {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);
  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div className="w-sceen h-16 fixed top-0 left-0 right-0  z-40 bg-black">
      <Navbar />
      {!matches && <BottomBarNavigation />}
    </div>
  );
};

export default Header;
