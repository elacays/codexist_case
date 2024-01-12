"use client";

import BookCard from "./bookCard";

export default function FeaturedBooksContainer() {
  return (
    <div className="grid grid-cols-3  max-w-7xl mt-12">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
