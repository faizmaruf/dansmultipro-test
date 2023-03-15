import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
const BottomBarNavigation = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  let slicedStr = currentUrl.split("/");
  let activePage = slicedStr[slicedStr.length - 1];

  return (
    <div>
      <div className="bottom-navigation py-2">
        <div className="w-full h-full flex justify-evenly flex-row-reverse">
          <Link to="/movie">
            <div className="flex flex-col h-full w-28 ">
              <TvIcon sx={{ margin: "0 auto", color: ` ${activePage == "movie" ? "red" : "white"}` }} />
              <p className={`mx-auto font-bold text-xs  ${activePage == "movie" ? "active-bottom-bar text-primary" : "text-white"}`}>Movies</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex flex-col h-full w-28 ">
              <HomeIcon sx={{ margin: "0 auto", color: ` ${activePage == "" ? "red" : "white"}` }} />
              <p className={`mx-auto font-bold text-xs  ${activePage == "" ? "active-bottom-bar text-primary" : "text-white"}`}>Home</p>
            </div>
          </Link>
          <Link to="/tvseries">
            <div className="flex flex-col h-full w-28 ">
              <OndemandVideoIcon sx={{ margin: "0 auto", color: ` ${activePage == "tvseries" ? "red" : "white"}` }} />
              <p className={`mx-auto font-bold text-xs  ${activePage == "tvseries" ? "active-bottom-bar text-primary" : "text-white"}`}>TV Series</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomBarNavigation;
