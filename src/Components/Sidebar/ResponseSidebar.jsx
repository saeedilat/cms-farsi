import React from "react";
import {
  ClipboardType,
  FileType,
  WalletMinimal,
  Pencil,
  LogOut,
} from "lucide-react";

export default function ResponseSidebar({ flag, SetFlag }) {
  return (
    <div
      className={`fixed h-full lg:hidden transform transition-transform duration-700 ease-in-out bg-black/40  top-0 w-full right-0 z-50 ${flag ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex flex-col overflow-hidden bg-white rounded-sm shadow-2xl w-80 ">
        <div className="bg-[url(/download.jpg)] w-full bg-cover bg-center  h-44 relative ">
          <LogOut
            onClick={() => SetFlag(false)}
            className="absolute w-5 h-5 text-white cursor-pointer top-1 right-1"
          />
          <img
            src="\download (1).jpg"
            className="absolute z-20 -translate-x-1/2 w-28 h-28 left-1/2 -bottom-8 border-6 border-gray-800/50"
          />
        </div>
        <div className="flex flex-col items-center mt-14">
          <div className="flex flex-col items-center w-64 pb-5 border-b-2 ">
            <h1 className="text-2xl font-bold">سعید ایلات منش</h1>
            <span className="text-sm font-extralight">
              توسعه دهنده فرانت اند
            </span>
          </div>

          <div className="flex items-center justify-between w-64 pb-5 mt-5 border-b-2 ">
            <div className="flex items-center justify-center gap-2">
              <ClipboardType className="w-5 h-5" />

              <p>نام کوچک</p>
            </div>

            <p className="text-blue-500">سعید</p>
          </div>

          <div className="flex items-center justify-between w-64 pb-5 mt-5 border-b-2 ">
            <div className="flex items-center justify-center gap-2">
              <FileType className="w-5 h-5" />

              <p>نام خانوادگی</p>
            </div>

            <p className="text-red-500">ایلات منش</p>
          </div>

          <div className="flex items-center justify-between w-64 pb-5 mt-5 border-b-2 ">
            <div className="flex items-center justify-center gap-2">
              <WalletMinimal className="w-5 h-5" />

              <p>تعداد دوره</p>
            </div>

            <p className="text-blue-500">15</p>
          </div>

          <button className="flex items-center justify-center w-64 gap-1 p-3 my-5 text-white bg-blue-700 rounded-lg shadow-lg shadow-blue-800">
            تغییر اطلاعات
            <Pencil className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
