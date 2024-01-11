"use client";
export default function BookCard() {
  return (
    <div className="flex p-10 items-center justify-center">
      <div className="relative flex w-full max-h-[16rem] max-w-[28rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white rounded-xl px-1">
            <p className="flex items-center gap-0.5 font-sans text-base font-semibold text-black leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              5.0
            </p>
          </div>
        </div>
        <div className="p-4 w-full">
          <h6 className="block font-sans text-lg font-bold uppercase leading-relaxed tracking-normal  antialiased">
            HARRY POTTER
          </h6>
          <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal  text-blue-gray-900 antialiased">
            AND THE PHILOSOPHER'S STONE
          </h4>
          <p className="mb-4 block font-sans text-sm font-normal leading-relaxed text-gray-700 antialiased">
            Uğur hikmet KÖSE
          </p>
          <div className="flex flex-row justify-between align-middle">
            <div className="flex flex-row justify-between align-middle">
              <p className="cursor-pointer group  transition-all rounded-full p-1 hover:bg-pink-500/40 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </p>
              <p className="my-auto ms-1"> 9.99$</p>
            </div>

            <a className="inline-block my-auto" href="#">
              <button
                className="flex select-none items-center ms-auto gap-2 rounded-lg py-1 px-2 text-center font-sans text-xs font-bold uppercase  transition-all hover:bg-pink-500/40 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>

          {/* <a className="inline-block" href="#">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a> */}
        </div>
      </div>
    </div>
  );
}
