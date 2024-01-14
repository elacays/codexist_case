"use client";

import { useSelector } from "react-redux";
import BookCard from "./bookCard";
import { RootState } from "@/lib/store";

export default function FeaturedBooksContainer() {
  const bookItems = useSelector((state: RootState) => state.book); 
  console.log(bookItems)
  return (
    <div className="grid grid-cols-3  max-w-7xl mt-12">
      {bookItems&&bookItems.books.map((book)=>{
        return <BookCard key={book.id} book={book} />
      })}
      
    </div>
  );
}
