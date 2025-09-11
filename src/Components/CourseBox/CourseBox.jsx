import React from "react";
import { WalletCards, FolderClosed, Boxes } from "lucide-react";

export default function CourseBox({
  title,
  desc,
  price,
  category,
  registersCount,
  discount,
}) {
  return (
    <div className="relative flex mx-5 mt-10 mb-20 shadow-2xl shadow-black group">
      <div className="absolute flex items-center justify-center w-12 h-12 text-white duration-300 -rotate-45 cursor-default group-hover:-rotate-12 -left-2 -top-2 rounded-xl bg-amber-900">
        {discount}%
      </div>
      <div className="h-52">
        <img src="/images.jfif" className="w-full h-full" />
      </div>

      <div className="flex flex-col justify-between w-full mr-3">
        <div className="flex flex-col gap-3 mt-5 ">
          <h1 className="text-2xl font-extrabold text-amber-500">{title}</h1>
          <p className="text-md font-extralight">{desc}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 text-sm text-blue-600">
            <p className="flex gap-1">
              <WalletCards className="w-5 h-5" />
              قیمت:{price}
            </p>
            <p className="flex gap-1">
              <FolderClosed className="w-5 h-5" />
              دسته بندی:{category}
            </p>
            <p className="flex gap-1">
              <Boxes className="w-5 h-5" />
              تعداد فروش:{registersCount}
            </p>
          </div>
          <div className="flex gap-1 mb-1 ml-2">
            <button className="p-2 text-sm text-white bg-red-600 rounded-sm">
              حذف
            </button>
            <button className="p-2 text-sm text-white bg-blue-600 rounded-sm">
              ویرایش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
