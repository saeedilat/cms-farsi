import React from "react";
import { WalletCards, FolderClosed, Boxes } from "lucide-react";

export default function CourseBox() {
  return (
    <div className="relative flex mx-5 mt-10 mb-20 shadow-2xl shadow-black group">
      <div className="absolute flex items-center justify-center w-12 h-12 text-white duration-300 -rotate-45 cursor-default group-hover:-rotate-12 -left-2 -top-2 rounded-xl bg-amber-900">
        30%
      </div>
      <div className="h-52 w-72">
        <img src="/images.jfif" className="w-full h-full" />
      </div>

      <div className="flex flex-col justify-between mr-3">
        <div className="flex flex-col gap-3 mt-5 ">
          <h1 className="text-2xl font-extrabold text-amber-500">دوره تخصصی</h1>
          <p className="text-md font-extralight">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 text-sm text-blue-600">
            <p className="flex gap-1">
              <WalletCards className="w-5 h-5" />
              قیمت:3500
            </p>
            <p className="flex gap-1">
              <FolderClosed className="w-5 h-5" />
              دسته بندی:فرانت اند
            </p>
            <p className="flex gap-1">
              <Boxes className="w-5 h-5" />
              تعداد فروش:15
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
