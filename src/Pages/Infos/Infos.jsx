import React from "react";
import MainHeader from "../../Components/MainHeader/MainHeader";
import {
  UserRound,
  UsersRound,
  BookUser,
  AtSign,
  KeyRound,
} from "lucide-react";

export default function Infos() {
  return (
    <div className="w-full pb-10 bg-white rounded-sm shadow-2xl h-fit">
      <MainHeader />
      <div className="h-[450px] mx-5 mt-10 overflow-auto border border-black/50">
        <div className="flex items-center bg-gray-400 border h-14 border-black/50">
          <p className="mr-5 text-xl font-extrabold">اطلاعات شما</p>
        </div>
        <div className="grid justify-center w-full grid-cols-12 gap-3 px-5 py-10">
          <div className="flex items-center w-full h-12 col-span-6 gap-1 pr-3 mb-5 border-2 border-b-2 border-gray-300/50 border-b-red-700">
            <UserRound className="w-5 h-5 opacity-80" />
            <input placeholder="نام" />
          </div>
          <div className="flex items-center w-full h-12 col-span-6 gap-1 pr-3 mb-5 border-2 border-b-2 border-gray-300/50 border-b-red-700">
            <UsersRound className="w-5 h-5 opacity-80" />
            <input placeholder=" نام خانوادگی" />
          </div>
          <div className="flex items-center w-full h-12 col-span-6 gap-1 pr-3 mb-5 border-2 border-b-2 border-gray-300/50 border-b-red-700">
            <BookUser className="w-5 h-5 opacity-80" />
            <input placeholder="نام کاربری" />
          </div>
          <div className="flex items-center w-full h-12 col-span-6 gap-1 pr-3 mb-5 border-2 border-b-2 border-gray-300/50 border-b-red-700">
            <AtSign className="w-5 h-5 opacity-80" />
            <input placeholder="ایمیل" />
          </div>
          <div className="flex items-center w-full h-12 col-span-4 gap-1 pr-3 border-2 border-b-2 border-gray-300/50 border-b-red-700">
            <KeyRound className="w-5 h-5 opacity-80" />
            <input placeholder="رمز جاری" />
          </div>
          <div className="flex items-center w-full h-12 col-span-4 gap-1 pr-3 border-2 b order-b-2 border-gray-300/50 border-b-red-700">
            <KeyRound className="w-5 h-5 opacity-80" />
            <input placeholder="رمز جدید" />
          </div>
          <div className="flex items-center w-full h-12 col-span-4 gap-1 pr-3 border-2 border-b-2 border-gray-300/50 border-b-red-700">
            <KeyRound className="w-5 h-5 opacity-80" />
            <input placeholder="تکرار رمز" />
          </div>

          <div className="relative flex items-center justify-center col-span-3 p-3 mt-5 border">
            <label className="absolute px-2 font-bold -translate-x-1/2 bg-white -top-4 left-1/2">
              پروفایل
            </label>
            <label htmlFor="file-upload" className="w-full h-40 cursor-pointer">
              <img
                src="\download (1).jpg"
                className="w-full h-40 border-2 border-gray-200/50"
              />
            </label>
            <input type="file" className="hidden" id="file-upload" />
          </div>

          <div className="relative flex items-center justify-center col-span-9 p-3 mt-5 border">
            <label className="absolute px-2 font-bold -translate-x-1/2 bg-white -top-4 left-1/2">
              پروفایل
            </label>
            <label htmlFor="file-upload" className="w-full h-40 cursor-pointer">
              <img
                src="/download.jpg"
                className="w-full h-40 border-2 border-gray-200/50"
              />
            </label>
            <input type="file" className="hidden" id="file-upload" />
          </div>

          <button className="h-10 col-span-6 mt-5 font-bold text-white bg-blue-700 rounded-sm cursor-pointer">
            آپدیت اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
}
