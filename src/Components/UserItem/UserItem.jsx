import React from "react";
import { useDispatch } from "react-redux";
import { removeUserFromServer } from "../../Redux/store/users";
import Swal from "sweetalert2";

export default function UserItem({ firstname, lastname, email, _id }) {
  const dispatch = useDispatch();
  const removeUserHandller = () => {
    dispatch(removeUserFromServer(`users/${_id}`));
  };

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
        <button
          className="p-3 text-white bg-red-700 cursor-pointer"
          onClick={() => {
            Swal.fire({
              text: "آیا از حذف کاربر اطمینان دارید؟",
              icon: "warning",
              showCloseButton: true,
              showCancelButton: true,
              confirmButtonText: "بله",
              cancelButtonText: "خیر",
            })
              .then((result) => {
                if (result.isConfirmed) {
                  removeUserHandller();
                  return true;
                } else {
                  return false;
                }
              })
              .then((result) => {
                if (result) {
                  Swal.fire({
                    text: "کاربر با موفقیت حذف شد",
                    icon: "success",
                  });
                }
              });
          }}
        >
          حذف
        </button>
      </div>
    </div>
  );
}
