import React from "react";
import { UsersRound, BookText, ArchiveRestore, Newspaper } from "lucide-react";
import { Link, Links } from "react-router-dom";

export default function MainHeader() {
  return (
    <div className="flex w-full gap-10 p-5 border-b-2 border-gray-800/50">
      <div className="flex items-center gap-2">
        <UsersRound className="w-5 h-5" />
        <Link to="/users">کاربران</Link>
      </div>
      <div className="flex items-center gap-2">
        <BookText className="w-5 h-5" />
        <Link to="/infos">اطلاعات</Link>
      </div>
      <div className="flex items-center gap-2">
        <ArchiveRestore className="w-5 h-5" />
        <Link to="/courses">دوره ها</Link>
      </div>
      <div className="flex items-center gap-2">
        <Newspaper className="w-5 h-5" />
        <Link to="/articles">وبلاگ</Link>
      </div>
    </div>
  );
}
