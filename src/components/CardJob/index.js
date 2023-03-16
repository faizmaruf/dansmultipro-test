import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CardJob = (props) => {
  const { key, item } = props;

  return (
    <div className="w-96 md:w-[27rem] h-56 border shadow flex flex-col py-4 px-2 rounded-lg m-auto" key={key}>
      <div className="basis-3/12  flex">
        <div className="basis-2/12  flex">
          <img src="https://images.glints.com/unsafe/60x0/glints-dashboard.s3.amazonaws.com/company-logo/default-company-logo.png" className=" w-2/3 object-cover ml-1 my-auto" />
        </div>
        <div className="basis-10/12 ">
          <h2 className="text-md font-bold">{item?.title}</h2>
          <h2 className="text-secondary font-medium text-sm">{item?.company}</h2>
        </div>
      </div>
      <div className="basis-7/12 flex flex-col justify-center gap-y-1">
        <div className="w-full flex gap-x-2">
          <PlaceIcon sx={{ width: "18px", color: "#777" }} />
          <p className="font-medium text-sm my-auto">{item?.location}</p>
        </div>
        <div className="w-full flex gap-x-2">
          <AttachMoneyIcon sx={{ width: "18px", color: "#777" }} />
          <p className="font-medium text-sm my-auto">{key % 3 == 0 ? "IDR6,000,000 - 8,000,000 " : "Company prefers not to disclose"}</p>
        </div>
        <div className="w-full flex gap-x-2">
          <WorkOutlineIcon sx={{ width: "18px", color: "#777" }} />
          <p className="font-medium text-sm my-auto">{item?.type}</p>
        </div>
      </div>
      <div className="basis-2/12 flex justify-end">
        <div className="w-full flex gap-x-2">
          <AccessTimeIcon sx={{ width: "14px", color: "#777", margin: "auto 0" }} />
          <p className="font-medium text-xs my-auto text-[#777]">Diperbarui 5 hari yang lalu</p>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
// https://kiriminaja-static-file.imgix.net/home-v3/logistics/ninja.png
