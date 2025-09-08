import React from "react";
import { SunDim, BellRing, LogOut } from "lucide-react";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between w-auto h-16 mt-5 bg-white rounded-sm shadow-lg">
        <div className="flex items-center gap-2">
          <img
            src="\download (1).jpg"
            alt="user"
            className="w-12 h-12 mr-2 rounded"
          />
          <div className="hidden mr-2 xs:block">
            <h2 className="text-2xl font-extrabold ">سعید ایلات منش</h2>
            <span className="text-sm font-light opacity-45">
              توسعه دهنده فرانت اند
            </span>
          </div>
        </div>

        <div className="flex gap-3 ml-4">
          <button className="hidden px-3 py-2 text-white rounded shadow-lg cursor-pointer bg-amber-300 shadow-amber-500 md:block">
            <SunDim className="" />
          </button>
          <button className="relative hidden px-3 py-2 text-white bg-gray-700 rounded shadow-md cursor-pointer shadow-gray-800 md:block">
            <BellRing />
            <span className="absolute right-0 z-20 w-4 h-4 text-xs bg-red-500 rounded -top-3 ">
              2
            </span>
          </button>
          <button className="flex items-center gap-1 px-3 py-2 text-white bg-blue-600 rounded shadow-md cursor-pointer shadow-blue-600">
            <LogOut />
            خروج از پنل
          </button>
        </div>
      </div>
    </div>
  );
}
