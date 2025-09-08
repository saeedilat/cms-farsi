import React from "react";
import MainHeader from "../../Components/MainHeader/MainHeader";
import { Search } from "lucide-react";
import UserItem from "../../Components/UserItem/UserItem";
export default function USers() {
  return (
    <>
      <div className="w-full pb-10 bg-white rounded-sm shadow-2xl h-fit">
        <MainHeader />
        <div className="flex items-center w-full mt-10 justify-evenly ">
          <div className="border-2 border-gray-800/50 w-[40vw] h-10 pr-5 flex items-center rounded-t-sm border-b-red-700">
            <Search className="w-5 h-5 opacity-50" />
            <input
              type="search"
              placeholder="نام یا ایمیل کاربر را وارد کنید"
              className="h-10 pr-2 outline-0 w-[40vw]"
            ></input>
          </div>

          <button className="w-40 h-10 mx-2 text-white bg-gray-800 rounded-sm">
            حدف کاربر
          </button>
        </div>

        <UserItem />
      </div>
    </>
  );
}
