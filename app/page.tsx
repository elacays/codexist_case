"use client";
import FeaturedBooksContainer from "@/components/book/card/featuredBooksContainer";
import { fetchBooks } from "@/lib/features/bookSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const bookItems = useSelector((state: RootState) => state.book.books);
  useEffect(() => {
    //eğer kitaplar yoksa kitapları getir
    !bookItems[1] && dispatch(fetchBooks());
  }, []);
  return (
    <main className="flex flex-col items-center h-full w-full relative">
      <FeaturedBooksContainer />
    </main>
  );
}
