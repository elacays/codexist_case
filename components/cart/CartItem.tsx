"use client";
import { addQuantity, reduceQuantity, removeFromCart } from "@/lib/features/cartSlice";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
type Item ={
    item:{
        id: string;
        price: number;
        quantity: number;
        currencyCode: string;
    }
}
  
export default function CartItem({item}:Item) {
    const dispatch = useDispatch();
    const [bookData, setBookData] = useState<any>();
    useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_SINGLE_BOOK_API}${item.id}?&key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => {
        setBookData(res.data);
      });
    }, []);
    return(
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-2/5"> 
            <div className="w-20">
              <Image loader={()=>bookData?.volumeInfo?.imageLinks?.thumbnail} src={bookData?.volumeInfo?.imageLinks?.thumbnail} alt={bookData?.volumeInfo?.title} width={1000} height={1000}/>
            </div>
            <div className="flex flex-col justify-between sm:ml-4 flex-grow">
              <span className="font-bold text-sm">{bookData?.volumeInfo?.title}</span>
              <span className="text-red-500 text-xs">{bookData?.volumeInfo?.subtitle}</span>
              <button className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left mt-3 sm:mt-0" onClick={()=>dispatch(removeFromCart({id:item.id}))}>Remove</button>
            </div>
          </div>
          <div className="flex justify-center w-2/5 sm:w-1/5">
          <button onClick={()=>dispatch(reduceQuantity({id:bookData.id}))}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </button>
            <input className="mx-2 border text-center w-8" type="text" disabled value={item.quantity}/>
            <button onClick={()=>dispatch(addQuantity({id:bookData.id}))}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </button>
          </div>
          <span className="text-center w-2/5 sm:w-1/5 font-semibold text-sm">{(item.price).toFixed(2)} { item.currencyCode==="TRY"&&"₺"}</span>
          <span className="text-center w-1/5 font-semibold text-sm sm:block hidden">{(item.price*item.quantity).toFixed(2) } { item.currencyCode==="TRY"&&"₺"}</span>
        </div>
    )
}