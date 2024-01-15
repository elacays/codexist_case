"use client";

import { addToCart } from "@/lib/features/cartSlice";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";

export default function BookDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState<any>();
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_SINGLE_BOOK_API}${id}?&key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        setBookData(res.data);
      });
  }, [id]);
  const dex = bookData?.volumeInfo?.description;
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: bookData.id,
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
    <div className=" text-black mt-12 bg-white rounded-lg shadow-2xl mb-6">
      <div className="container px-5  mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center align-middle">
          <div className="w-1/2 h-1/4 mt-8">
            <Image
              loader={() => bookData?.volumeInfo?.imageLinks?.thumbnail}
              src={bookData?.volumeInfo?.imageLinks?.thumbnail}
              alt={bookData?.volumeInfo?.title || "book"}
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col align-middle justify-center">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {bookData?.volumeInfo?.title}
            </h1>
            <h2 className="text-xl title-font text-gray-700 tracking-widest">
              {bookData?.volumeInfo?.subtitle}
            </h2>

            <div className="flex my-4">
              {bookData?.volumeInfo?.authors?.map(
                (author: any, index: number) => {
                  return (
                    <div key={index}>
                      <p className="text-pink-500 text-base font-medium border-b-2">
                        {author}
                        {index > 0 ? ", " : ""}
                      </p>
                      <p className="text-lg">
                        {bookData?.volumeInfo?.publisher}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
            <div className="leading-relaxed text-black">
              <div dangerouslySetInnerHTML={{ __html: dex }} />
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {bookData?.saleInfo?.retailPrice?.amount
                  ? bookData?.saleInfo?.retailPrice?.amount
                  : ""}
                {bookData?.saleInfo?.retailPrice?.amount
                  ? bookData?.saleInfo?.retailPrice?.currencyCode === "TRY" &&
                    "₺"
                  : ""}
              </span>
              <button className="rounded-full ml-auto w-10 h-10 p-0 border-0 inline-flex items-center justify-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 hover:fill-red-600 hover:stroke-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#000000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button
                className="flex ms-4  border-0 py-2 px-6 mb-6 focus:outline-none bg-pink-500 rounded"
                onClick={addToCartHandler}
                disabled={
                  bookData?.saleInfo?.retailPrice?.amount ? false : true
                }
              >
                <a className=" flex items-center" href="#">
                  {bookData?.saleInfo?.retailPrice?.amount ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-200 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                  <p className="ms-2 text-white">
                    {bookData?.saleInfo?.retailPrice?.amount
                      ? "Buy"
                      : "Out of stock"}
                  </p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
