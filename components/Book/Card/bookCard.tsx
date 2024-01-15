"use client";
import { addToCart } from "@/lib/features/cartSlice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IBook {
  book: {
    id: string;
    volumeInfo: {
      title: string;
      imageLinks: {
        thumbnail: string;
      };
    };
    selfLink: string;
  };
}
export default function BookCard({ book }: IBook) {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState<any>();
  useEffect(() => {
    //carttan gelen id ile kitabı getir
    axios
      .get(
        `${process.env.NEXT_PUBLIC_SINGLE_BOOK_API}${book.id}?&key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setBookData(res.data);
      });
  }, []);
  const addToCartHandler = () => {
    //kitabı sepete'a ekle
    dispatch(
      addToCart({
        id: book.id,
        quantity: 1,
        price: bookData?.saleInfo?.retailPrice?.amount,
        currencyCode: bookData?.saleInfo?.retailPrice?.currencyCode,
      })
    );
    toast("Successfully added to cart.", {
      position: "top-right",
      autoClose: 1500,
      draggable: false,
      progress: undefined,
      theme: "light",
      progressStyle: { backgroundColor: "#FF008E" },
      transition: Bounce,
    });
  };
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex w-full min-h-[12rem] max-h-[14rem]  md:max-h-[12rem] max-w-[26rem] sm:min-w-[26rem] min-w-[20rem] mx-5 sm:mx-0 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <Image
            loader={() => book?.volumeInfo?.imageLinks?.thumbnail}
            src={book?.volumeInfo?.imageLinks?.thumbnail}
            alt={book?.volumeInfo?.title || "book"}
            width={1000}
            height={1000}
          />
          <div className="absolute top-2 left-2 bg-white rounded-xl px-1">
            <p className="flex items-center gap-0.5 font-sans text-sm font-semibold text-black leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {bookData?.volumeInfo?.averageRating
                ? (bookData?.volumeInfo?.averageRating).toFixed(1)
                : "0"}
            </p>
          </div>
        </div>
        <div className="p-4 w-full h-auto flex flex-col justify-between">
          <div>
            <h6 className="block font-sans text-md leading-5 font-bold uppercase  tracking-normal  antialiased">
              {book.volumeInfo.title}
            </h6>
            <h4 className="mb-2 mt-1.5 block font-sans text-base leading-5 font-semibold tracking-normal  text-blue-gray-900 antialiased">
              {bookData?.volumeInfo?.subtitle}
            </h4>
          </div>
          <div className="flex flex-row justify-between align-bottom ">
            <div className="flex flex-row justify-between align-middle mt-1">
              <button onClick={addToCartHandler}>
                {bookData?.saleInfo?.retailPrice?.amount ? (
                  <p className="cursor-pointer group  transition-all rounded-full -ms-1 p-1 hover:bg-pink-500/40 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </p>
                ) : (
                  <p className="cursor-pointer group  transition-all rounded-full -ms-1 p-1 hover:bg-pink-500/90 hover:text-white active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Out of stock
                  </p>
                )}
              </button>
              <p className="my-auto text-black text-sm font-medium  ms-1">
                {" "}
                {bookData?.saleInfo?.retailPrice?.amount}{" "}
                {bookData?.saleInfo?.retailPrice?.currencyCode === "TRY" && "₺"}
              </p>
            </div>
            <div>
              <Link
                href={{
                  pathname: "/bookdetail",
                  query: {
                    id: book.id,
                  },
                }}
              >
                <span className="inline-block m-auto mt-1">
                  <button
                    className="flex select-none items-center justify-center align-middle gap-2 mt-2 bg-pink-500  h-6 w-6 rounded-full text-center font-sans text-xs font-bold uppercase  transition-all hover:bg-pink-500/40 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="white"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
