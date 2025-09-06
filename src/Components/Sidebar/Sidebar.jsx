import React from "react";
import { ClipboardType, FileType, WalletMinimal, Pencil } from "lucide-react";

export default function Sidebar() {
  return (
    <div className=" bg-white flex-col shadow-2xl rounded-sm overflow-hidden hidden md:flex w-64 lg:w-80">
      <div className="bg-[url(/download.jpg)] w-full bg-cover bg-center  h-44 relative ">
        <img
          src="\download (1).jpg"
          className="w-28 h-28 absolute z-20 left-1/2 -translate-x-1/2 -bottom-8 border-6 border-gray-800/50"
        />
      </div>
      <div className="mt-14 flex flex-col items-center">
        <div className="flex-col items-center flex border-b-2 pb-5 w-64 ">
          <h1 className="text-2xl font-bold">سعید ایلات منش</h1>
          <span className="text-sm font-extralight">توسعه دهنده فرانت اند</span>
        </div>

        <div className="flex justify-between  w-64 mt-5 pb-5 border-b-2 items-center ">
          <div className="flex justify-center items-center gap-2">
            <ClipboardType className="w-5 h-5" />

            <p>نام کوچک</p>
          </div>

          <p className="text-blue-500">سعید</p>
        </div>

        <div className="flex justify-between  w-64 mt-5 pb-5 border-b-2 items-center ">
          <div className="flex justify-center items-center gap-2">
            <FileType className="w-5 h-5" />

            <p>نام خانوادگی</p>
          </div>

          <p className="text-red-500">ایلات منش</p>
        </div>

        <div className="flex justify-between  w-64 mt-5 pb-5 border-b-2 items-center ">
          <div className="flex justify-center items-center gap-2">
            <WalletMinimal className="w-5 h-5" />

            <p>تعداد دوره</p>
          </div>

          <p className="text-blue-500">15</p>
        </div>

        <button className="flex gap-1 text-white w-64 justify-center items-center my-5 bg-blue-700 p-3 rounded-lg shadow-lg shadow-blue-800">
          تغییر اطلاعات
          <Pencil className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
