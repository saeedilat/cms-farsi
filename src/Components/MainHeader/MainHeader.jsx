import React from "react";
import { UsersRound, BookText, ArchiveRestore, Newspaper } from "lucide-react";

export default function MainHeader() {
  return (
    <div className="w-full flex gap-10 p-5 border-b-2 border-gray-800/50">
      <div className="flex gap-2 items-center">
        <UsersRound className="w-5 h-5" />
        <p>کاربران</p>
      </div>
      <div className="flex gap-2 items-center">
        <BookText className="w-5 h-5" />
        <p>اطلاعات</p>
      </div>
      <div className="flex gap-2 items-center">
        <ArchiveRestore className="w-5 h-5" />
        <p>دوره ها</p>
      </div>
      <div className="flex gap-2 items-center">
        <Newspaper className="w-5 h-5" />
        <p>وبلاگ</p>
      </div>
    </div>
  );
}
