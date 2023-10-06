import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { bookContext } from "../Context/BookContext";
import AboutBook from "../About/AboutBook";

const BookDetails = () => {
  const booksContext = useContext(bookContext);
  console.log(booksContext);
  const { id } = useParams();
  const book = booksContext.find((b) => b.id === Number(id));
  console.log(book);

  return (
    <div>
      <div class="container xl:max-w-[1100px] flex flex-col md:flex-row items-center gap-4 md:items-start md:justify-between mt-6">
        <div></div>
        {/* <!-- image of book --> */}
        <div class="flex flex-col md:w-1/3 md:pr-12 lg:pr-24 md:gap-4 md:sticky md:top-28 lg:top-28">
          <img id="imageBook" class="rounded-xl" alt="" src={book.img} />
          {/* <!-- download button --> */}
          <div class="hidden md:flex md:flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:justify-evenly bg-emerald-400 rounded-xl p-2 py-3 md:text-sm xl:text-base">
            <a class="flex gap-1 font-medium" href="">
              <svg
                class="w-4 h-auto"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 18.75C3.09 18.75 2.75 18.41 2.75 18V7C2.75 2.59 4.09 1.25 8.5 1.25H15.5C19.91 1.25 21.25 2.59 21.25 7V17C21.25 17.16 21.25 17.31 21.24 17.47C21.21 17.88 20.84 18.2 20.44 18.17C20.03 18.14 19.71 17.78 19.74 17.37C19.75 17.25 19.75 17.12 19.75 17V7C19.75 3.43 19.08 2.75 15.5 2.75H8.5C4.92 2.75 4.25 3.43 4.25 7V18C4.25 18.41 3.91 18.75 3.5 18.75Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M17 22.75H7C4.66 22.75 2.75 20.84 2.75 18.5V17.85C2.75 15.86 4.37 14.25 6.35 14.25H20.5C20.91 14.25 21.25 14.59 21.25 15V18.5C21.25 20.84 19.34 22.75 17 22.75ZM6.35 15.75C5.19 15.75 4.25 16.69 4.25 17.85V18.5C4.25 20.02 5.48 21.25 7 21.25H17C18.52 21.25 19.75 20.02 19.75 18.5V15.75H6.35Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M13 11.25H8C7.59 11.25 7.25 10.91 7.25 10.5C7.25 10.09 7.59 9.75 8 9.75H13C13.41 9.75 13.75 10.09 13.75 10.5C13.75 10.91 13.41 11.25 13 11.25Z"
                  fill="#002A32"
                ></path>
              </svg>
              <p>خلاصه متنی</p>
            </a>
            <a class="flex gap-1 font-medium" href="">
              <svg
                class="w-4 h-auto"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5V6C7.25 3.38 9.38 1.25 12 1.25C14.62 1.25 16.75 3.38 16.75 6V11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 2.75C10.21 2.75 8.75 4.21 8.75 6V11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5V6C15.25 4.21 13.79 2.75 12 2.75Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M11.9996 19.7504C7.36961 19.7504 3.59961 15.9804 3.59961 11.3504V9.65039C3.59961 9.24039 3.93961 8.90039 4.34961 8.90039C4.75961 8.90039 5.09961 9.24039 5.09961 9.65039V11.3504C5.09961 15.1504 8.19961 18.2504 11.9996 18.2504C15.7996 18.2504 18.8996 15.1504 18.8996 11.3504V9.65039C18.8996 9.24039 19.2396 8.90039 19.6496 8.90039C20.0596 8.90039 20.3996 9.24039 20.3996 9.65039V11.3504C20.3996 15.9804 16.6296 19.7504 11.9996 19.7504Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M13.3899 7.18031C13.3099 7.18031 13.2199 7.17031 13.1299 7.14031C12.3999 6.87031 11.5999 6.87031 10.8699 7.14031C10.4799 7.28031 10.0499 7.08031 9.90988 6.69031C9.76988 6.30031 9.96988 5.87031 10.3599 5.73031C11.4199 5.35031 12.5899 5.35031 13.6499 5.73031C14.0399 5.87031 14.2399 6.30031 14.0999 6.69031C13.9799 6.99031 13.6899 7.18031 13.3899 7.18031Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M12.8001 9.30031C12.7301 9.30031 12.6701 9.29031 12.6001 9.27031C12.2001 9.16031 11.7901 9.16031 11.3901 9.27031C10.9901 9.38031 10.5801 9.14031 10.4701 8.74031C10.3601 8.35031 10.6001 7.94031 11.0001 7.83031C11.6501 7.65031 12.3501 7.65031 13.0001 7.83031C13.4001 7.94031 13.6401 8.35031 13.5301 8.75031C13.4401 9.08031 13.1301 9.30031 12.8001 9.30031Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z"
                  fill="#002A32"
                ></path>
              </svg>
              <p>خلاصه صوتی</p>
            </a>
          </div>
        </div>
        {/* <!-- details wrapper --> */}
        <div class="flex flex-col gap-4 md:items-start md:w-2/3 md:order-first">
          {/* <!-- title of book --> */}
          <div class="flex flex-col items-center md:items-start gap-2 md:gap-4 my-4">
            <div>
              <h1 class="text-xl md:text-4xl text-center md:text-right font-bold md:inline">
                خلاصه کتاب {book.name}
              </h1>
              <h1
                id="nameBook"
                class="text-xl md:text-4xl text-center font-bold md:inline"
              ></h1>
            </div>
            <p id="titleBook" class="font-medium md:text-lg"></p>
            <p id="writerBook" class="text-sm md:text-base text-gray-500"></p>
          </div>
          {/* <!-- details --> */}
          <div class="flex w-full md:gap-4 md:justify-start justify-evenly items-center text-xs lg:text-base">
            <div class="flex w-1/3 md:w-fit flex-col md:flex-row items-center gap-1 md:border border-slate-900 md:p-2 rounded-xl md:justify-center">
              <div>
                <div class="border-2 md:border-0 w-fit rounded-xl border-slate-900 p-2 md:p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p>{book.category}</p>
            </div>
            <div class="flex w-1/3 md:w-fit flex-col md:flex-row items-center gap-1 md:border border-slate-900 md:p-2 rounded-xl md:justify-center">
              <div>
                <div class="border-2 md:border-0 w-fit rounded-xl border-slate-900 p-2 md:p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p>{book.time} دقیقه</p>
            </div>
            <div class="flex w-1/3 md:w-fit flex-col md:flex-row items-center gap-1 md:border border-slate-900 md:p-2 rounded-xl md:justify-center">
              <div>
                <div class="border-2 md:border-0 w-fit rounded-xl border-slate-900 p-2 md:p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </div>
              </div>
              <p>{book.page} صفحه</p>
            </div>
          </div>

          {/* <!-- download button --> */}
          <section class="w-full md:hidden sticky top-28 z-10 my-8">
            <div class="flex justify-around bg-emerald-400 rounded-xl p-4">
              <a class="flex gap-2 font-medium" href="">
                <svg
                  class="w-5 h-auto"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 18.75C3.09 18.75 2.75 18.41 2.75 18V7C2.75 2.59 4.09 1.25 8.5 1.25H15.5C19.91 1.25 21.25 2.59 21.25 7V17C21.25 17.16 21.25 17.31 21.24 17.47C21.21 17.88 20.84 18.2 20.44 18.17C20.03 18.14 19.71 17.78 19.74 17.37C19.75 17.25 19.75 17.12 19.75 17V7C19.75 3.43 19.08 2.75 15.5 2.75H8.5C4.92 2.75 4.25 3.43 4.25 7V18C4.25 18.41 3.91 18.75 3.5 18.75Z"
                    fill="#002A32"
                  ></path>
                  <path
                    d="M17 22.75H7C4.66 22.75 2.75 20.84 2.75 18.5V17.85C2.75 15.86 4.37 14.25 6.35 14.25H20.5C20.91 14.25 21.25 14.59 21.25 15V18.5C21.25 20.84 19.34 22.75 17 22.75ZM6.35 15.75C5.19 15.75 4.25 16.69 4.25 17.85V18.5C4.25 20.02 5.48 21.25 7 21.25H17C18.52 21.25 19.75 20.02 19.75 18.5V15.75H6.35Z"
                    fill="#002A32"
                  ></path>
                  <path
                    d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z"
                    fill="#002A32"
                  ></path>
                  <path
                    d="M13 11.25H8C7.59 11.25 7.25 10.91 7.25 10.5C7.25 10.09 7.59 9.75 8 9.75H13C13.41 9.75 13.75 10.09 13.75 10.5C13.75 10.91 13.41 11.25 13 11.25Z"
                    fill="#002A32"
                  ></path>
                </svg>
                <p>خلاصه متنی</p>
              </a>
              <a class="flex gap-2 font-medium" href="">
                <svg
                  class="w-5 h-auto"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5V6C7.25 3.38 9.38 1.25 12 1.25C14.62 1.25 16.75 3.38 16.75 6V11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 2.75C10.21 2.75 8.75 4.21 8.75 6V11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5V6C15.25 4.21 13.79 2.75 12 2.75Z"
                    fill="#002A32"
                  ></path>
                  <path
                    d="M11.9996 19.7504C7.36961 19.7504 3.59961 15.9804 3.59961 11.3504V9.65039C3.59961 9.24039 3.93961 8.90039 4.34961 8.90039C4.75961 8.90039 5.09961 9.24039 5.09961 9.65039V11.3504C5.09961 15.1504 8.19961 18.2504 11.9996 18.2504C15.7996 18.2504 18.8996 15.1504 18.8996 11.3504V9.65039C18.8996 9.24039 19.2396 8.90039 19.6496 8.90039C20.0596 8.90039 20.3996 9.24039 20.3996 9.65039V11.3504C20.3996 15.9804 16.6296 19.7504 11.9996 19.7504Z"
                    fill="#002A32"
                  ></path>
                  <path
                    d="M13.3899 7.18031C13.3099 7.18031 13.2199 7.17031 13.1299 7.14031C12.3999 6.87031 11.5999 6.87031 10.8699 7.14031C10.4799 7.28031 10.0499 7.08031 9.90988 6.69031C9.76988 6.30031 9.96988 5.87031 10.3599 5.73031C11.4199 5.35031 12.5899 5.35031 13.6499 5.73031C14.0399 5.87031 14.2399 6.30031 14.0999 6.69031C13.9799 6.99031 13.6899 7.18031 13.3899 7.18031Z"
                    fill="#002A32"
                  ></path>
                  <path
                    d="M12.8001 9.30031C12.7301 9.30031 12.6701 9.29031 12.6001 9.27031C12.2001 9.16031 11.7901 9.16031 11.3901 9.27031C10.9901 9.38031 10.5801 9.14031 10.4701 8.74031C10.3601 8.35031 10.6001 7.94031 11.0001 7.83031C11.6501 7.65031 12.3501 7.65031 13.0001 7.83031C13.4001 7.94031 13.6401 8.35031 13.5301 8.75031C13.4401 9.08031 13.1301 9.30031 12.8001 9.30031Z"
                    fill="#002A32"
                  ></path>
                  <path
                    d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z"
                    fill="#002A32"
                  ></path>
                </svg>
                <p>خلاصه صوتی</p>
              </a>
            </div>
          </section>

          {/* <!-- about book --> */}
          <AboutBook props={true} about={book.about} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
