import React from "react";
import MainHeader from "../../Components/MainHeader/MainHeader";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";

export default function Articles() {
  return (
    <>
      <div className="relative w-full pb-20 bg-white rounded-sm shadow-2xl h-fit">
        <MainHeader />

        <ArticleBox />

        <div className="absolute bottom-0 flex items-center w-full h-16 bg-gray-400">
          <button className="p-2 mr-5 text-white bg-blue-700 rounded-sm shadow-xl shadow-blue-900">
            افزودن مقاله جدید
          </button>
        </div>
      </div>
    </>
  );
}
