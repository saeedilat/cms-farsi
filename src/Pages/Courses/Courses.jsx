import React, { useEffect } from "react";
import MainHeader from "../../Components/MainHeader/MainHeader";
import CourseBox from "../../Components/CourseBox/CourseBox";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromServer } from "../../Redux/store/courses";

export default function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCoursesFromServer("courses"));
  }, []);
  console.log(courses);

  return (
    <div className="relative w-full pb-20 bg-white rounded-sm shadow-2xl h-fit">
      <MainHeader />

      {courses.map((course) => (
        <CourseBox key={course._id} {...course} />
      ))}

      <div className="absolute bottom-0 flex items-center justify-between w-full h-16 px-3 bg-gray-400">
        <div className="flex gap-2">
          <button className="p-2 text-sm text-white bg-blue-600 rounded-sm shadow-xl h-fit shadow-blue-950">
            افزودن دوره جدید
          </button>
          <button className="p-2 text-sm text-white bg-red-600 rounded-sm shadow-xl h-fit shadow-red-900">
            اعمال تخفیف
          </button>
        </div>
        <button className="p-2 text-sm text-white bg-green-600 rounded-sm shadow-xl h-fit shadow-green-900">
          افزودن دسته بندی
        </button>
      </div>
    </div>
  );
}
