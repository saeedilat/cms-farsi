import React from "react";

export default function UserItem({ firstname, lastname, email }) {
  return (
    <div className="flex items-center justify-between mx-10 mt-10 border-2 rounded-sm border-gray-800/50">
      <div className="flex items-center gap-2 ">
        <img src="\download (1).jpg" className="w-20 h-20" />
        <div>
          <p className="text-lg font-bold">
            {firstname} {lastname}
          </p>
          <span className="text-sm font-extralight xs:hidden sm:block md:hidden lg:block">
            {email}
          </span>
        </div>
      </div>
      <div className="flex gap-2 ml-5">
        <button className="p-3 text-white bg-gray-700">پیام ها</button>
        <button className="p-3 text-white bg-blue-500">اطلاعات</button>
        <button className="p-3 text-white bg-red-700">حذف</button>
      </div>
    </div>
  );
}
