"use client";
import { addQuantity, reduceQuantity } from "@/lib/features/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
interface IBookItem{
    id:string
  
    }
  
export default function CartItem({id}:IBookItem) {
    const dispatch = useDispatch();
    const [bookData, setBookData] = useState<any>();
    useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_SINGLE_BOOK_API}${id}?&key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => {
        console.log(res.data);
        setBookData(res.data);
      });
    }, []);
    return(
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">With Fabric and Thread</span>
              <span className="text-red-500 text-xs">Joanna Figueroa</span>
              <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
          <button onClick={()=>dispatch(reduceQuantity({id:1}))}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </button>
            <input className="mx-2 border text-center w-8" type="text" disabled value={bookData.quantity}/>
            <button onClick={()=>dispatch(addQuantity({id:1}))}>
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </button>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">${(bookData.price).toFixed(2)}</span>
          <span className="text-center w-1/5 font-semibold text-sm">${(bookData.price*bookData.quantity).toFixed(2) }</span>
        </div>
    )
}