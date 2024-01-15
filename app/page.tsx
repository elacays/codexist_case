"use client"
import FeaturedBooksContainer from "@/components/book/card/featuredBooksContainer";
import { fetchBooks } from "@/lib/features/bookSlice";
import { AppDispatch } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <main className="flex flex-col items-center h-full w-full relative">
      <FeaturedBooksContainer />
    </main>

  );
}
