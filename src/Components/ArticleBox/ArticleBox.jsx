import React from "react";
import { WalletCards, FolderClosed, Boxes, icons } from "lucide-react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { removeArticleFromServer } from "../../Redux/store/articles";

export default function ArticleBox({ title, desc, category, views, _id }) {
  const dispatch = useDispatch();

  const removeArticleHandller = () => {
    Swal.fire({
      text: "آیااز حذف اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "خیر",
      confirmButtonText: "بله",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeArticleFromServer(`articles/${_id}`));
        Swal.fire({
          text: "مقاله با موفقیت حذف شد!",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="relative flex mx-5 mt-10 mb-20 shadow-2xl shadow-black">
      <div className="h-52 w-72">
        <img src="/images.png" className="w-full h-full" />
      </div>

      <div className="flex flex-col justify-between w-full mr-3">
        <div className="flex flex-col gap-3 mt-5 ">
          <h1 className="text-2xl font-extrabold text-amber-500">{title}</h1>
          <p className="text-md font-extralight">{desc}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 text-sm text-blue-600">
            <p className="flex gap-1">
              <FolderClosed className="w-5 h-5" />
              دسته بندی:{category}
            </p>
            <p className="flex gap-1">
              <Boxes className="w-5 h-5" />
              تعداد بازدید:{views}
            </p>
          </div>
          <div className="flex gap-1 mb-1 ml-2">
            <button
              className="p-2 text-sm text-white bg-red-600 rounded-sm cursor-pointer"
              onClick={removeArticleHandller}
            >
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
