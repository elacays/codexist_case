"use client";

import { useSelector } from "react-redux";
import BookCard from "./bookCard";
import { RootState } from "@/lib/store";
import LoadingScreen from "@/components/LoadingScreen";

export default function FeaturedBooksContainer() {
  const bookItems = useSelector((state: RootState) => state.book); 
  const loading = useSelector((state: RootState) => state.book.isLoading);
  if(loading) return (<LoadingScreen/>)
  return (
    <div className="grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5 max-w-7xl mt-12">
      {bookItems.books?.map((book)=>{
        return <BookCard key={book.id} book={book} />
      })}
      
    </div>
  );
}
