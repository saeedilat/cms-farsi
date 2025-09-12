import React, { useEffect } from "react";
import MainHeader from "../../Components/MainHeader/MainHeader";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "../../Redux/store/articles";

export default function Articles() {
  const articles = useSelector((state) => state.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesFromServer("articles/"));
  }, []);

  const reverseArticles = [...articles].reverse();

  return (
    <>
      <div className="relative w-full pb-20 bg-white rounded-sm shadow-2xl h-fit">
        <MainHeader />
        <div className="w-full h-[450px] overflow-auto">
          {reverseArticles.map((article) => (
            <ArticleBox key={article._id} {...article} />
          ))}

          <div className="absolute bottom-0 flex items-center w-full h-16 bg-gray-400">
            <button className="p-2 mr-5 text-white bg-blue-700 rounded-sm shadow-xl shadow-blue-900">
              افزودن مقاله جدید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
