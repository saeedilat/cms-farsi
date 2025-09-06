import React from "react";
import { SunDim, BellRing, LogOut } from "lucide-react";

export default function Header() {
  return (
    <div>
      <div className="bg-white w-auto mt-5 h-16 flex items-center rounded-sm shadow-lg justify-between">
        <div className="flex items-center gap-2">
          <img
            src="\download (1).jpg"
            alt="user"
            className="w-12 h-12 rounded mr-2"
          />
          <div className="hidden xs:block mr-2">
            <h2 className="font-extrabold text-2xl ">سعید ایلات منش</h2>
            <span className="text-sm font-light opacity-45">
              توسعه دهنده فرانت اند
            </span>
          </div>
        </div>

        <div className="ml-4 gap-3 flex">
          <button className="bg-amber-300 px-3 py-2 text-white shadow-lg shadow-amber-500 rounded cursor-pointer hidden md:block">
            <SunDim className="" />
          </button>
          <button className="bg-gray-700 px-3 py-2  text-white shadow-md shadow-gray-800 relative rounded cursor-pointer hidden md:block">
            <BellRing />
            <span className="absolute right-0 z-20 -top-3 h-4 bg-red-500 w-4 rounded text-xs ">
              2
            </span>
          </button>
          <button className="flex gap-1  px-3 py-2 bg-blue-600 items-center text-white shadow-md rounded shadow-blue-600 cursor-pointer">
            <LogOut />
            خروج از پنل
          </button>
        </div>
      </div>
    </div>
  );
}
