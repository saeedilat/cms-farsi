import React from "react";
import MainHeader from "../../Components/MainHeader/MainHeader";
import { Search } from "lucide-react";

export default function USers() {
  return (
    <>
      <div className="  bg-white shadow-2xl w-full col-span-3 md:col-span-2  rounded-sm  ">
        <MainHeader />
        <div className="mt-10 w-full flex justify-evenly items-center">
          <div className="border-2 border-gray-800/50 w-[40vw] h-10 pr-5 flex items-center rounded-t-sm border-b-red-700">
            <Search className="w-5 h-5 opacity-50" />
            <input
              type="search"
              placeholder="نام یا ایمیل کاربر را وارد کنید"
              className="h-10 pr-2 outline-0 w-[40vw]"
            ></input>
          </div>

          <button className="bg-gray-800 text-white h-10 mx-2 w-40 rounded-sm">
            حدف کاربر
          </button>
        </div>

        <div className="flex justify-between items-center mx-10 border-2 border-gray-800/50 mt-10 rounded-sm">
          <div className=" flex items-center gap-2">
            <img src="\download (1).jpg" className="w-20 h-20" />
            <div>
              <p className="font-bold text-lg">سعید ایلات منش</p>
              <span className="font-extralight text-sm xs:hidden sm:block md:hidden lg:block">
                saeedilat@gmail.com
              </span>
            </div>
          </div>
          <div className="flex gap-2 ml-5">
            <button className="bg-gray-700 text-white p-3">پیام ها</button>
            <button className="bg-blue-500 text-white p-3">اطلاعات</button>
            <button className="bg-red-700 text-white p-3">حذف</button>
          </div>
        </div>
      </div>
    </>
  );
}
