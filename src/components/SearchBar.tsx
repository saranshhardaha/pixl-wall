import { cn } from "@/lib/utils";
import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
};

export default function SearchBar({
  className,
  value,
  onChange
}: SearchBarProps) {
  return (
    <div
      className={cn("w-10/12 mx-auto relative flex items-center", className)}
    >
      <IoSearch className="absolute left-5 text-gray-500" />
      <input
        value={value}
        placeholder="Search Images..."
        onChange={onChange}
        type="text"
        className="w-full h-10 transition-all rounded-full pl-12  outline-blue-300 bg-slate-200 dark:bg-neutral-950 "
      />
    </div>
  );
}
