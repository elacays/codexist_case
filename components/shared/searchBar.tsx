"use client";
import { fetchBooks } from "@/lib/features/bookSlice";
import { fetchSearchBooks } from "@/lib/features/searchBookSlice";
import { AppDispatch, RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const router = useRouter();
  const searchItems = useSelector(
    (state: RootState) => state.searchBook.searchBooks
  );
  const dispatch = useDispatch<AppDispatch>();
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) {
      dispatch(fetchSearchBooks(e.target.value));
    }
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      dispatch(fetchBooks(event.target.value));
      router.replace("/");
    }
  };

  return (
    <div className="flex items-center border-b-2 pb-1 mt-1 w-full  sm:ml-auto sm:w-1/3 border-gray-400 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 pt-0.5 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <div className="relative group w-full">
        <input
          className="ml-2 w-full outline-none bg-transparent text-gray-200 "
          type="text"
          name="search"
          id="search"
          placeholder="Search the book..."
          onChange={searchHandler}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <div className="absolute mt-4 md:-ml-11 w-72 overflow-hidden rounded-md bg-white group-focus-within:block hidden">
          {searchItems?.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  href={{
                    pathname: "/bookdetail",
                    query: {
                      id: item.id,
                    },
                  }}
                >
                  <div className="flex cursor-pointer py-1 px-3 hover:bg-slate-100">
                    <Image
                      loader={() => item?.volumeInfo?.imageLinks?.thumbnail}
                      src={item?.volumeInfo?.imageLinks?.thumbnail}
                      alt={item?.volumeInfo?.title || "book"}
                      width={70}
                      height={80}
                    />
                    <div className="cursor-pointer py-2 px-2 w-full  overflow-hidden">
                      <p className="text-sm font-medium text-gray-600">
                        {item.volumeInfo.title}
                      </p>
                      <p className="text-xs text-gray-500 line-clamp-3">
                        {item.volumeInfo.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
