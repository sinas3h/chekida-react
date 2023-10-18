import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import { BiSolidUser } from "react-icons/bi";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { IoClose, IoMoon } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import { useBooks } from "../Context/BookContext";

const NavUp = ({ handleOpen, open }) => {
  const { name, logout, isAuthenticated } = useAuth();
  const books = useBooks();
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(null);
  const [accountBox, setAccountBox] = useState(false);

  useEffect(() => {
    const searchBooks = books.filter(
      (b) => b.name.includes(input) || b.writer.includes(input)
    );

    if (input && input.length >= 1 && input != " ") setSearch(searchBooks);
    else if (input.length === 0) setSearch(null);
  }, [input]);

  const handleLogout = () => {
    logout();
    toast.success("شما با موفقیت از حساب کاربری خارج شدید", {
      style: {
        color: "white",
        backgroundColor: "#10b981",
      },
      iconTheme: {
        primary: "white",
        secondary: "#10b981",
      },
    });
    setAccountBox(false)
  };

  const handleAccoutBox = () => {
    if (isAuthenticated) setAccountBox(!accountBox);
  };


  return (
    <div className="bg-white w-full lg:static sticky shadow-md top-0 z-20">
      <nav id="nav" className="flex flex-col relative">
        <div className="container xl:max-w-[1100px] flex row justify-between items-center p-6 lg:px-6 lg:pt-4 lg:pb-2 ">
          {/* <!----------------- hamburger menu icon ---------------> */}
          <div
            id="menu"
            onClick={handleOpen}
            className="cursor-pointer transition-all lg:hidden"
          >
            {!open ? (
              <HiMenu size={30} className="text-chekida-slate" />
            ) : (
              <IoClose size={30} className="text-chekida-slate" />
            )}
          </div>
          {/* -------------- chekida icon ------------------- */}
          <Link to="/">
            <svg
              width="110"
              height="46"
              viewBox="0 0 130 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.20391 7.62L4.36391 6.84V21.48L1.84391 22.04L1.20391 7.62ZM9.29078 22.3C8.29078 22.3 7.53745 22.08 7.03078 21.64C6.52411 21.2 6.27078 20.56 6.27078 19.72C6.27078 19.2133 6.32411 18.62 6.43078 17.94C6.53745 17.26 6.68411 16.4733 6.87078 15.58L8.83078 15.84C8.67078 16.7067 8.59078 17.2467 8.59078 17.46C8.59078 17.7667 8.70411 17.9933 8.93078 18.14C9.17078 18.2733 9.52411 18.34 9.99078 18.34C10.6708 18.34 11.2574 18.2733 11.7508 18.14C12.2574 17.9933 12.6774 17.8 13.0108 17.56L10.7308 11.74L13.5508 9.9L16.1308 17.74C16.2641 17.82 16.4708 17.88 16.7508 17.92C17.0308 17.96 17.3441 17.98 17.6908 17.98V22H17.1308C16.5041 22 15.9574 21.8733 15.4908 21.62C15.0241 21.3667 14.6241 20.9733 14.2908 20.44C13.7974 21.0267 13.1574 21.4867 12.3708 21.82C11.5974 22.14 10.5708 22.3 9.29078 22.3ZM17.6908 22C17.3308 22 16.9908 21.9133 16.6708 21.74C16.3641 21.5533 16.1174 21.3067 15.9308 21C15.7574 20.68 15.6708 20.34 15.6708 19.98C15.6708 19.62 15.7574 19.2867 15.9308 18.98C16.1174 18.6733 16.3641 18.4333 16.6708 18.26C16.9908 18.0733 17.3308 17.98 17.6908 17.98C18.0508 17.98 18.3841 18.0733 18.6908 18.26C18.9974 18.4333 19.2374 18.6733 19.4108 18.98C19.5974 19.2867 19.6908 19.62 19.6908 19.98C19.6908 20.34 19.5974 20.68 19.4108 21C19.2374 21.3067 18.9974 21.5533 18.6908 21.74C18.3841 21.9133 18.0508 22 17.6908 22ZM38.3997 17.98C39.1197 17.98 39.6464 17.86 39.9797 17.62C40.313 17.3667 40.5064 16.9867 40.5597 16.48L40.8197 14.12L42.9597 14.34L42.8397 16.4C42.813 16.96 42.9197 17.3667 43.1597 17.62C43.3997 17.86 43.7997 17.98 44.3597 17.98H45.2397V22H44.3597C43.7197 22 43.1397 21.88 42.6197 21.64C42.0997 21.3867 41.7064 21.0333 41.4397 20.58C41.1597 21.0467 40.7597 21.4 40.2397 21.64C39.733 21.88 39.1197 22 38.3997 22V17.98ZM45.2397 22C44.8797 22 44.5397 21.9133 44.2197 21.74C43.913 21.5533 43.673 21.3067 43.4997 21C43.3264 20.6933 43.2397 20.3533 43.2397 19.98C43.2397 19.6333 43.3264 19.3067 43.4997 19C43.673 18.68 43.913 18.4333 44.2197 18.26C44.5397 18.0733 44.8797 17.98 45.2397 17.98C45.5997 17.98 45.933 18.0733 46.2397 18.26C46.5464 18.4333 46.793 18.68 46.9797 19C47.1664 19.3067 47.2597 19.6333 47.2597 19.98C47.2597 20.3533 47.1664 20.6933 46.9797 21C46.793 21.3067 46.5464 21.5533 46.2397 21.74C45.933 21.9133 45.5997 22 45.2397 22ZM17.6797 17.98H38.3997V22H17.6797V17.98ZM36.9597 27.42C36.9597 26.9 36.9597 26.5133 36.9597 26.26C36.9597 26.0067 36.9597 25.62 36.9597 25.1C37.7864 25.1 38.3997 25.1 38.7997 25.1C39.1997 25.1 39.793 25.1 40.5797 25.1C40.5797 25.62 40.5797 26.0067 40.5797 26.26C40.5797 26.5267 40.5797 26.9133 40.5797 27.42C39.7664 27.42 39.153 27.42 38.7397 27.42C38.3397 27.42 37.7464 27.42 36.9597 27.42ZM44.0797 27.42C43.253 27.42 42.6397 27.42 42.2397 27.42C41.8397 27.42 41.2397 27.42 40.4397 27.42C40.4397 26.8867 40.4397 26.4933 40.4397 26.24C40.4397 26 40.4397 25.62 40.4397 25.1C41.2664 25.1 41.8797 25.1 42.2797 25.1C42.6797 25.1 43.2797 25.1 44.0797 25.1C44.0797 25.6333 44.0797 26.0267 44.0797 26.28C44.0797 26.5333 44.0797 26.9133 44.0797 27.42ZM45.2383 17.98H47.1983C47.9716 17.98 48.6849 17.9467 49.3383 17.88C49.9916 17.8133 50.5449 17.68 50.9983 17.48C50.7183 16.72 50.3716 16.0467 49.9583 15.46C49.5449 14.8733 49.0249 14.3267 48.3983 13.82C47.7849 13.3133 47.0316 12.7933 46.1383 12.26L46.7583 8.96L54.8383 6.6V9.98L49.6183 11.32C50.2983 11.8267 50.8783 12.3333 51.3583 12.84C51.8516 13.3333 52.2716 13.8667 52.6183 14.44C52.9649 15.0133 53.2716 15.6533 53.5383 16.36C53.7249 16.8267 53.8916 17.1667 54.0383 17.38C54.1849 17.5933 54.3916 17.7467 54.6583 17.84C54.9249 17.9333 55.3116 17.98 55.8183 17.98V22C55.1916 22 54.6316 21.8933 54.1383 21.68C53.6583 21.4667 53.2716 21.1733 52.9783 20.8C52.4716 21.2267 51.7983 21.5333 50.9583 21.72C50.1183 21.9067 49.1383 22 48.0183 22H45.2383V17.98ZM55.8183 22C55.4583 22 55.1183 21.9133 54.7983 21.74C54.4916 21.5533 54.2449 21.3067 54.0583 21C53.8849 20.68 53.7983 20.34 53.7983 19.98C53.7983 19.62 53.8849 19.2867 54.0583 18.98C54.2449 18.6733 54.4916 18.4333 54.7983 18.26C55.1183 18.0733 55.4583 17.98 55.8183 17.98C56.1649 17.98 56.4916 18.0733 56.7983 18.26C57.1049 18.4333 57.3516 18.6733 57.5383 18.98C57.7249 19.2867 57.8183 19.62 57.8183 19.98C57.8183 20.34 57.7249 20.68 57.5383 21C57.3516 21.3067 57.1049 21.5533 56.7983 21.74C56.4916 21.9133 56.1649 22 55.8183 22ZM55.8047 17.96H69.5847C70.4914 17.96 71.318 17.8733 72.0647 17.7C72.8114 17.5267 73.558 17.26 74.3047 16.9C75.158 16.5133 75.878 16.16 76.4647 15.84C76.1047 15.7467 75.7314 15.6333 75.3447 15.5C74.958 15.3533 74.5314 15.1867 74.0647 15C73.518 14.8133 73.038 14.6667 72.6247 14.56C72.2247 14.44 71.8514 14.38 71.5047 14.38C71.1047 14.38 70.798 14.48 70.5847 14.68C70.3714 14.88 70.178 15.2267 70.0047 15.72L69.8447 16.22L68.2647 15.64L68.5247 14.82C68.898 13.62 69.318 12.78 69.7847 12.3C70.2647 11.8067 70.8714 11.56 71.6047 11.56C72.0714 11.56 72.578 11.6467 73.1247 11.82C73.6714 11.9933 74.4314 12.2733 75.4047 12.66C76.498 13.1 77.4114 13.4333 78.1447 13.66C78.8914 13.8867 79.598 14 80.2647 14L79.9447 16.6C79.4514 16.8133 78.9714 17.0933 78.5047 17.44C78.0514 17.7733 77.558 18.1867 77.0247 18.68L76.6647 19C75.8247 19.7333 75.0314 20.32 74.2847 20.76C73.538 21.1867 72.7447 21.5 71.9047 21.7C71.0647 21.9 70.1047 22 69.0247 22H55.8047V17.96ZM70.1447 27.32C70.1447 26.8 70.1447 26.4133 70.1447 26.16C70.1447 25.9067 70.1447 25.52 70.1447 25C70.9714 25 71.5847 25 71.9847 25C72.3847 25 72.978 25 73.7647 25C73.7647 25.52 73.7647 25.9067 73.7647 26.16C73.7647 26.4267 73.7647 26.8133 73.7647 27.32C72.9514 27.32 72.3447 27.32 71.9447 27.32C71.5447 27.32 70.9447 27.32 70.1447 27.32ZM77.2647 27.32C76.438 27.32 75.8247 27.32 75.4247 27.32C75.0247 27.32 74.4314 27.32 73.6447 27.32C73.6447 26.7867 73.6447 26.3933 73.6447 26.14C73.6447 25.9 73.6447 25.52 73.6447 25C74.458 25 75.0647 25 75.4647 25C75.878 25 76.478 25 77.2647 25C77.2647 25.5333 77.2647 25.9267 77.2647 26.18C77.2647 26.4333 77.2647 26.8133 77.2647 27.32ZM74.9447 30.2C74.9447 29.0267 74.9447 28.1533 74.9447 27.58C74.9447 27.0067 74.9447 26.1467 74.9447 25C75.4647 25 75.8514 25 76.1047 25C76.358 25 76.7447 25 77.2647 25C77.2647 26.1733 77.2647 27.0467 77.2647 27.62C77.2647 28.2067 77.2647 29.0667 77.2647 30.2C76.7314 30.2 76.338 30.2 76.0847 30.2C75.8314 30.2 75.4514 30.2 74.9447 30.2Z"
                fill="#002A32"
              />
              <path
                d="M3.29367 48.612C2.94834 48.612 2.60767 48.5793 2.27167 48.514C1.94501 48.458 1.60901 48.36 1.26367 48.22L1.43167 47.38C1.87967 47.4267 2.24367 47.45 2.52367 47.45C3.48501 47.45 4.27367 47.2167 4.88967 46.75C5.50567 46.2927 5.85567 45.5787 5.93967 44.608L6.17767 44.944H4.39967C3.87701 44.944 3.47101 44.86 3.18167 44.692C2.89234 44.524 2.68701 44.286 2.56567 43.978C2.45367 43.6607 2.39767 43.2687 2.39767 42.802V42.606C2.39767 42.13 2.48634 41.6913 2.66367 41.29C2.84101 40.8793 3.09767 40.5527 3.43367 40.31C3.77901 40.058 4.19434 39.932 4.67967 39.932C5.43567 39.932 6.00501 40.2633 6.38767 40.926C6.77034 41.5793 6.98501 42.452 7.03167 43.544H7.89967V45H7.00367C6.95701 45.616 6.78901 46.1993 6.49967 46.75C6.21034 47.3007 5.79501 47.7487 5.25367 48.094C4.71234 48.4393 4.05901 48.612 3.29367 48.612ZM6.14967 43.796C6.14034 42.872 5.99567 42.172 5.71567 41.696C5.44501 41.2107 5.04834 40.968 4.52567 40.968C4.10567 40.968 3.76967 41.122 3.51767 41.43C3.26567 41.7287 3.13967 42.088 3.13967 42.508C3.13967 42.9 3.23767 43.1707 3.43367 43.32C3.62967 43.4693 3.97501 43.544 4.46967 43.544H6.33167L6.14967 43.796ZM7.89967 45C7.75967 45 7.63367 44.9673 7.52167 44.902C7.40967 44.8367 7.32101 44.748 7.25567 44.636C7.19034 44.524 7.15767 44.4027 7.15767 44.272C7.15767 44.1413 7.19034 44.0247 7.25567 43.922C7.32101 43.81 7.40967 43.7213 7.52167 43.656C7.63367 43.5813 7.75967 43.544 7.89967 43.544C8.02101 43.544 8.13767 43.5813 8.24967 43.656C8.36167 43.7213 8.45034 43.81 8.51567 43.922C8.58101 44.0247 8.61367 44.1413 8.61367 44.272C8.61367 44.4027 8.58101 44.524 8.51567 44.636C8.45034 44.748 8.36167 44.8367 8.24967 44.902C8.13767 44.9673 8.02101 45 7.89967 45ZM7.89453 43.544C8.3892 43.544 8.88386 43.516 9.37853 43.46C9.88253 43.3947 10.2419 43.2827 10.4565 43.124C10.4472 42.676 10.3772 42.2047 10.2465 41.71C10.1159 41.2153 9.92453 40.7533 9.67253 40.324L10.5265 39.54C10.8159 40.072 11.0352 40.6133 11.1845 41.164C11.3339 41.7147 11.4085 42.284 11.4085 42.872C11.4085 43.068 11.4039 43.2593 11.3945 43.446C11.3759 43.6327 11.3245 43.8007 11.2405 43.95C11.1659 44.09 11.0492 44.2253 10.8905 44.356C10.6292 44.5893 10.2419 44.7573 9.72853 44.86C9.22453 44.9533 8.6132 45 7.89453 45V43.544ZM7.89453 43.544H7.90853V45H7.89453V43.544ZM7.88053 37.636C7.93653 37.4027 7.97853 37.23 8.00653 37.118C8.03453 36.9967 8.07653 36.8193 8.13253 36.586C8.49653 36.586 8.7672 36.586 8.94453 36.586C9.12186 36.586 9.38786 36.586 9.74253 36.586C9.71453 36.8193 9.6912 36.9967 9.67253 37.118C9.65386 37.23 9.6352 37.4027 9.61653 37.636C9.2152 37.636 8.9212 37.636 8.73453 37.636C8.54786 37.636 8.2632 37.636 7.88053 37.636ZM11.1845 37.636C10.8205 37.636 10.5499 37.636 10.3725 37.636C10.1952 37.636 9.9292 37.636 9.57453 37.636C9.60253 37.4027 9.6212 37.23 9.63053 37.118C9.6492 36.9967 9.67253 36.8193 9.70053 36.586C10.0925 36.586 10.3819 36.586 10.5685 36.586C10.7645 36.586 11.0539 36.586 11.4365 36.586C11.3805 36.8193 11.3385 36.9967 11.3105 37.118C11.2825 37.23 11.2405 37.4027 11.1845 37.636ZM13.582 51.552L16.816 50.628L16.928 51.16L13.694 52L13.582 51.552ZM14.4796 48.612C14.1902 48.612 13.8916 48.5793 13.5836 48.514C13.2756 48.458 12.9816 48.374 12.7016 48.262L12.8836 47.394C13.1636 47.4407 13.4529 47.464 13.7516 47.464C14.6289 47.464 15.3289 47.2213 15.8516 46.736C16.3742 46.2507 16.6776 45.588 16.7616 44.748C16.7616 44.2907 16.6589 43.7727 16.4536 43.194C16.2482 42.6153 15.9729 41.9853 15.6276 41.304L16.7056 40.646C17.1069 41.5513 17.3822 42.3073 17.5316 42.914C17.6902 43.5207 17.7696 44.1133 17.7696 44.692C17.7696 45.3547 17.6389 45.9847 17.3776 46.582C17.1256 47.1887 16.7476 47.6787 16.2436 48.052C15.7489 48.4253 15.1609 48.612 14.4796 48.612ZM15.0676 38.546C15.1422 38.2753 15.1982 38.0747 15.2356 37.944C15.2729 37.8133 15.3242 37.6127 15.3896 37.342C15.6976 37.342 15.9216 37.342 16.0616 37.342C16.2109 37.342 16.4302 37.342 16.7196 37.342C16.6542 37.6127 16.6029 37.8133 16.5656 37.944C16.5282 38.0747 16.4769 38.2753 16.4116 38.546C16.1036 38.546 15.8749 38.546 15.7256 38.546C15.5856 38.546 15.3662 38.546 15.0676 38.546ZM21.5585 45C20.9612 45 20.4852 44.8787 20.1305 44.636C19.7852 44.384 19.6032 43.9733 19.5845 43.404L19.4025 35.83L20.5785 35.522V43.208C20.6719 43.3387 20.8305 43.4273 21.0545 43.474C21.2879 43.5207 21.5399 43.544 21.8105 43.544H22.3005V45H21.5585ZM22.3005 45C22.1699 45 22.0485 44.9673 21.9365 44.902C21.8245 44.8367 21.7359 44.748 21.6705 44.636C21.6052 44.524 21.5725 44.4027 21.5725 44.272C21.5725 44.1413 21.6052 44.0247 21.6705 43.922C21.7359 43.81 21.8245 43.7213 21.9365 43.656C22.0485 43.5813 22.1699 43.544 22.3005 43.544C22.4312 43.544 22.5479 43.5813 22.6505 43.656C22.7625 43.7213 22.8512 43.81 22.9165 43.922C22.9819 44.0247 23.0145 44.1413 23.0145 44.272C23.0145 44.4027 22.9819 44.524 22.9165 44.636C22.8512 44.748 22.7625 44.8367 22.6505 44.902C22.5479 44.9673 22.4312 45 22.3005 45ZM22.3047 43.544C22.7994 43.544 23.294 43.516 23.7887 43.46C24.2927 43.3947 24.652 43.2827 24.8667 43.124C24.8574 42.676 24.7874 42.2047 24.6567 41.71C24.526 41.2153 24.3347 40.7533 24.0827 40.324L24.9367 39.54C25.226 40.072 25.4454 40.6133 25.5947 41.164C25.744 41.7147 25.8187 42.284 25.8187 42.872C25.8187 43.068 25.814 43.2593 25.8047 43.446C25.786 43.6327 25.7347 43.8007 25.6507 43.95C25.576 44.09 25.4594 44.2253 25.3007 44.356C25.0394 44.5893 24.652 44.7573 24.1387 44.86C23.6347 44.9533 23.0234 45 22.3047 45V43.544ZM22.3047 43.544H22.3187V45H22.3047V43.544ZM23.2287 48.29C23.3034 48.0287 23.3547 47.828 23.3827 47.688C23.42 47.5573 23.476 47.3613 23.5507 47.1C23.8494 47.1 24.0734 47.1 24.2227 47.1C24.372 47.1 24.5914 47.1 24.8807 47.1C24.806 47.3707 24.75 47.5713 24.7127 47.702C24.6847 47.8327 24.6334 48.0287 24.5587 48.29C24.26 48.29 24.036 48.29 23.8867 48.29C23.7374 48.29 23.518 48.29 23.2287 48.29ZM30.8293 45.168C29.7466 45.168 28.9253 45.0747 28.3653 44.888C27.8146 44.692 27.4646 44.356 27.3153 43.88C27.1473 43.5907 27.0773 43.2313 27.1053 42.802C27.1239 42.41 27.2406 41.612 27.4553 40.408L28.2113 40.52C28.0526 41.4067 27.9639 42.0087 27.9453 42.326C27.9359 42.5313 27.9546 42.7087 28.0013 42.858C28.0479 42.998 28.1319 43.1193 28.2533 43.222C28.3746 43.3807 28.5753 43.4973 28.8553 43.572C29.1353 43.6467 29.4759 43.6933 29.8773 43.712C30.2879 43.7307 30.8759 43.74 31.6413 43.74C32.7239 43.74 33.6759 43.712 34.4973 43.656C35.3279 43.5907 35.9019 43.4413 36.2193 43.208C36.2193 42.7227 36.1539 42.228 36.0233 41.724C35.9019 41.2107 35.7059 40.73 35.4353 40.282L36.2473 39.526C36.5459 40.002 36.7699 40.52 36.9193 41.08C37.0686 41.6307 37.1433 42.2093 37.1433 42.816V43.264C37.1433 43.5907 37.0453 43.8753 36.8493 44.118C36.6533 44.3513 36.3639 44.5427 35.9813 44.692C35.5146 44.86 34.9686 44.9813 34.3433 45.056C33.7273 45.1307 32.9479 45.168 32.0053 45.168H30.8293ZM31.2773 48.458C31.3519 48.1873 31.4079 47.9867 31.4453 47.856C31.4826 47.7253 31.5339 47.5293 31.5993 47.268C31.8979 47.268 32.1219 47.268 32.2713 47.268C32.4206 47.268 32.6399 47.268 32.9293 47.268C32.8546 47.5387 32.7986 47.7393 32.7613 47.87C32.7333 48.0007 32.6819 48.1967 32.6073 48.458C32.3086 48.458 32.0846 48.458 31.9353 48.458C31.7859 48.458 31.5666 48.458 31.2773 48.458ZM40.9316 45C40.3342 45 39.8582 44.8787 39.5036 44.636C39.1582 44.384 38.9762 43.9733 38.9576 43.404L38.7756 35.83L39.9516 35.522V43.208C40.0449 43.3387 40.2036 43.4273 40.4276 43.474C40.6609 43.5207 40.9129 43.544 41.1836 43.544H41.6736V45H40.9316ZM41.6736 45C41.5429 45 41.4216 44.9673 41.3096 44.902C41.1976 44.8367 41.1089 44.748 41.0436 44.636C40.9782 44.524 40.9456 44.4027 40.9456 44.272C40.9456 44.1413 40.9782 44.0247 41.0436 43.922C41.1089 43.81 41.1976 43.7213 41.3096 43.656C41.4216 43.5813 41.5429 43.544 41.6736 43.544C41.8042 43.544 41.9209 43.5813 42.0236 43.656C42.1356 43.7213 42.2242 43.81 42.2896 43.922C42.3549 44.0247 42.3876 44.1413 42.3876 44.272C42.3876 44.4027 42.3549 44.524 42.2896 44.636C42.2242 44.748 42.1356 44.8367 42.0236 44.902C41.9209 44.9673 41.8042 45 41.6736 45ZM42.0977 43.544C42.6764 43.544 43.0964 43.4413 43.3577 43.236C43.6191 43.0307 43.7731 42.676 43.8197 42.172L43.9877 40.632L44.7997 40.73L44.6877 42.48C44.6597 42.844 44.7577 43.1147 44.9817 43.292C45.2151 43.46 45.5371 43.544 45.9477 43.544H46.5217V45H45.9477C45.4997 45 45.1217 44.9253 44.8137 44.776C44.5057 44.6267 44.2724 44.384 44.1137 44.048C43.9084 44.3933 43.6471 44.6407 43.3297 44.79C43.0124 44.93 42.6017 45 42.0977 45V43.544ZM46.5217 45C46.3817 45 46.2557 44.9673 46.1437 44.902C46.0317 44.8367 45.9431 44.748 45.8777 44.636C45.8124 44.524 45.7797 44.4027 45.7797 44.272C45.7797 44.1507 45.8124 44.034 45.8777 43.922C45.9431 43.81 46.0317 43.7213 46.1437 43.656C46.2557 43.5813 46.3817 43.544 46.5217 43.544C46.6431 43.544 46.7551 43.5813 46.8577 43.656C46.9697 43.7213 47.0584 43.81 47.1237 43.922C47.1984 44.034 47.2357 44.1507 47.2357 44.272C47.2357 44.4027 47.2031 44.524 47.1377 44.636C47.0724 44.748 46.9837 44.8367 46.8717 44.902C46.7597 44.9673 46.6431 45 46.5217 45ZM41.6777 43.544H42.0977V45H41.6777V43.544ZM41.7197 38.532C41.7664 38.2987 41.8037 38.126 41.8317 38.014C41.8691 37.8927 41.9111 37.7153 41.9577 37.482C42.3311 37.482 42.6064 37.482 42.7837 37.482C42.9611 37.482 43.2271 37.482 43.5817 37.482C43.5537 37.7153 43.5304 37.8927 43.5117 38.014C43.4931 38.126 43.4697 38.2987 43.4417 38.532C43.0497 38.532 42.7604 38.532 42.5737 38.532C42.3871 38.532 42.1024 38.532 41.7197 38.532ZM45.0237 38.532C44.6504 38.532 44.3751 38.532 44.1977 38.532C44.0297 38.532 43.7684 38.532 43.4137 38.532C43.4324 38.2987 43.4511 38.126 43.4697 38.014C43.4884 37.8927 43.5117 37.7153 43.5397 37.482C43.9317 37.482 44.2211 37.482 44.4077 37.482C44.6037 37.482 44.8884 37.482 45.2617 37.482C45.2151 37.7153 45.1731 37.8927 45.1357 38.014C45.1077 38.126 45.0704 38.2987 45.0237 38.532ZM46.5176 43.544H47.9456C48.5149 43.544 49.0469 43.5207 49.5416 43.474C50.0362 43.4273 50.4609 43.3153 50.8156 43.138C50.7782 42.158 50.4189 41.2947 49.7376 40.548C49.0562 39.792 48.1882 39.1013 47.1336 38.476L47.3996 37.16L52.5376 35.494V36.754L48.3236 38.056C49.4436 38.7467 50.3209 39.5027 50.9556 40.324C51.5902 41.1453 51.9076 42.074 51.9076 43.11V43.474C51.9076 44.0433 51.5296 44.44 50.7736 44.664C50.0269 44.888 49.1076 45 48.0156 45H46.5176V43.544ZM59.2188 51.552L62.4528 50.628L62.5648 51.16L59.3308 52L59.2188 51.552ZM59.6646 48.71C58.3859 48.71 57.4292 48.43 56.7946 47.87C56.1599 47.31 55.8426 46.5307 55.8426 45.532C55.8426 45.0187 55.9032 44.4633 56.0246 43.866C56.1459 43.2593 56.2999 42.6667 56.4866 42.088L57.2006 42.284C57.0419 42.9093 56.9252 43.4693 56.8506 43.964C56.7572 44.384 56.7199 44.7807 56.7386 45.154C56.7852 45.882 57.0512 46.4233 57.5366 46.778C58.0219 47.1327 58.7266 47.31 59.6506 47.31C60.3879 47.31 61.0739 47.2213 61.7086 47.044C62.3526 46.8667 62.8846 46.54 63.3046 46.064V44.048C63.3046 43.46 63.2486 42.9327 63.1366 42.466C63.0339 41.99 62.8612 41.612 62.6186 41.332C62.3759 41.052 62.0586 40.912 61.6666 40.912C61.2559 40.912 60.9292 41.0473 60.6866 41.318C60.4532 41.5793 60.3366 41.9433 60.3366 42.41C60.3366 42.83 60.4392 43.124 60.6446 43.292C60.8499 43.46 61.1906 43.544 61.6666 43.544H63.5006V45H61.6246C60.8686 45 60.3412 44.8227 60.0426 44.468C59.7439 44.1133 59.5946 43.628 59.5946 43.012V42.466C59.5946 42.0273 59.6739 41.6167 59.8326 41.234C59.9912 40.842 60.2339 40.5247 60.5606 40.282C60.8872 40.03 61.2886 39.904 61.7646 39.904C62.5486 39.904 63.1366 40.2447 63.5286 40.926C63.9299 41.598 64.1539 42.4707 64.2006 43.544H65.2086V45H64.2006C64.2006 45.336 64.1866 45.658 64.1586 45.966C64.1026 46.526 63.8972 47.0113 63.5426 47.422C63.1879 47.8327 62.6839 48.15 62.0306 48.374C61.3866 48.598 60.5979 48.71 59.6646 48.71ZM65.2086 45C65.0779 45 64.9566 44.9673 64.8446 44.902C64.7326 44.8367 64.6392 44.748 64.5646 44.636C64.4992 44.524 64.4666 44.4027 64.4666 44.272C64.4666 44.1413 64.4992 44.0247 64.5646 43.922C64.6392 43.81 64.7326 43.7213 64.8446 43.656C64.9566 43.5813 65.0779 43.544 65.2086 43.544C65.3299 43.544 65.4466 43.5813 65.5586 43.656C65.6706 43.7213 65.7592 43.81 65.8246 43.922C65.8899 44.0247 65.9226 44.1413 65.9226 44.272C65.9226 44.4027 65.8899 44.524 65.8246 44.636C65.7592 44.748 65.6706 44.8367 65.5586 44.902C65.4466 44.9673 65.3299 45 65.2086 45ZM59.7626 37.804C59.8092 37.5707 59.8466 37.398 59.8746 37.286C59.9119 37.1647 59.9586 36.992 60.0146 36.768C60.3786 36.768 60.6492 36.768 60.8266 36.768C61.0039 36.768 61.2699 36.768 61.6246 36.768C61.5966 37.0013 61.5732 37.174 61.5546 37.286C61.5359 37.398 61.5126 37.5707 61.4846 37.804C61.0926 37.804 60.8032 37.804 60.6166 37.804C60.4299 37.804 60.1452 37.804 59.7626 37.804ZM63.0666 37.804C62.6932 37.804 62.4179 37.804 62.2406 37.804C62.0726 37.804 61.8112 37.804 61.4566 37.804C61.4752 37.5707 61.4939 37.398 61.5126 37.286C61.5312 37.1647 61.5546 36.992 61.5826 36.768C61.9746 36.768 62.2639 36.768 62.4506 36.768C62.6466 36.768 62.9359 36.768 63.3186 36.768C63.2626 37.0013 63.2159 37.174 63.1786 37.286C63.1506 37.398 63.1132 37.5707 63.0666 37.804ZM65.627 43.544C66.2057 43.544 66.6257 43.4413 66.887 43.236C67.1484 43.0307 67.3024 42.676 67.349 42.172L67.517 40.632L68.329 40.73L68.217 42.48C68.189 42.844 68.287 43.1147 68.511 43.292C68.7444 43.46 69.0664 43.544 69.477 43.544H70.051V45H69.477C69.029 45 68.651 44.9253 68.343 44.776C68.035 44.6267 67.8017 44.384 67.643 44.048C67.4377 44.3933 67.1764 44.6407 66.859 44.79C66.5417 44.93 66.131 45 65.627 45V43.544ZM70.051 45C69.911 45 69.785 44.9673 69.673 44.902C69.561 44.8367 69.4724 44.748 69.407 44.636C69.3417 44.524 69.309 44.4027 69.309 44.272C69.309 44.1507 69.3417 44.034 69.407 43.922C69.4724 43.81 69.561 43.7213 69.673 43.656C69.785 43.5813 69.911 43.544 70.051 43.544C70.1724 43.544 70.2844 43.5813 70.387 43.656C70.499 43.7213 70.5877 43.81 70.653 43.922C70.7277 44.034 70.765 44.1507 70.765 44.272C70.765 44.4027 70.7324 44.524 70.667 44.636C70.6017 44.748 70.513 44.8367 70.401 44.902C70.289 44.9673 70.1724 45 70.051 45ZM65.207 43.544H65.627V45H65.207V43.544ZM65.235 48.29C65.291 48.0567 65.333 47.884 65.361 47.772C65.3984 47.66 65.4404 47.4873 65.487 47.254C65.8604 47.254 66.131 47.254 66.299 47.254C66.4764 47.254 66.7424 47.254 67.097 47.254C67.0784 47.4873 67.0597 47.66 67.041 47.772C67.0224 47.8933 66.999 48.066 66.971 48.29C66.579 48.29 66.285 48.29 66.089 48.29C65.9024 48.29 65.6177 48.29 65.235 48.29ZM68.539 48.29C68.175 48.29 67.9044 48.29 67.727 48.29C67.5497 48.29 67.2837 48.29 66.929 48.29C66.957 48.0567 66.9804 47.884 66.999 47.772C67.0177 47.66 67.041 47.4873 67.069 47.254C67.461 47.254 67.7504 47.254 67.937 47.254C68.1237 47.254 68.4084 47.254 68.791 47.254C68.735 47.4873 68.693 47.66 68.665 47.772C68.637 47.8933 68.595 48.066 68.539 48.29ZM70.0469 43.544C71.0549 43.544 71.9135 43.4927 72.6229 43.39C73.3322 43.278 73.8502 43.0727 74.1769 42.774V41.444C73.6729 41.7147 73.1222 41.85 72.5249 41.85C71.8435 41.85 71.3489 41.682 71.0409 41.346C70.7329 41.01 70.5789 40.5387 70.5789 39.932V39.624C70.5789 39.2413 70.6629 38.8633 70.8309 38.49C70.9989 38.1167 71.2462 37.8133 71.5729 37.58C71.9089 37.3373 72.3009 37.216 72.7489 37.216C73.5609 37.216 74.1489 37.5707 74.5129 38.28C74.8862 38.98 75.0729 39.8993 75.0729 41.038V42.298C75.0729 42.7833 74.9795 43.208 74.7929 43.572C74.6062 43.936 74.3075 44.2347 73.8969 44.468C73.4955 44.7013 72.9729 44.8507 72.3289 44.916C71.6662 44.972 70.9055 45 70.0469 45V43.544ZM72.5809 40.716C72.8889 40.716 73.1782 40.6787 73.4489 40.604C73.7195 40.5293 73.9435 40.45 74.1209 40.366C74.0929 39.7033 73.9389 39.19 73.6589 38.826C73.3789 38.4527 73.0335 38.266 72.6229 38.266C72.2495 38.266 71.9415 38.392 71.6989 38.644C71.4562 38.8867 71.3349 39.2087 71.3349 39.61C71.3349 40.0113 71.4329 40.296 71.6289 40.464C71.8249 40.632 72.1422 40.716 72.5809 40.716ZM71.6849 35.116C71.7595 34.8453 71.8155 34.6447 71.8529 34.514C71.8902 34.3833 71.9415 34.1873 72.0069 33.926C72.3055 33.926 72.5295 33.926 72.6789 33.926C72.8282 33.926 73.0475 33.926 73.3369 33.926C73.2622 34.1873 73.2062 34.3833 73.1689 34.514C73.1409 34.6447 73.0895 34.8453 73.0149 35.116C72.7162 35.116 72.4922 35.116 72.3429 35.116C72.1935 35.116 71.9742 35.116 71.6849 35.116ZM76.085 48.612C75.7957 48.612 75.497 48.5793 75.189 48.514C74.881 48.458 74.587 48.374 74.307 48.262L74.489 47.394C74.769 47.4407 75.0584 47.464 75.357 47.464C76.2344 47.464 76.9344 47.2213 77.457 46.736C77.9797 46.2507 78.283 45.588 78.367 44.748C78.367 44.2907 78.2644 43.7727 78.059 43.194C77.8537 42.6153 77.5784 41.9853 77.233 41.304L78.311 40.646C78.7124 41.5513 78.9877 42.3073 79.137 42.914C79.2957 43.5207 79.375 44.1133 79.375 44.692C79.375 45.3547 79.2444 45.9847 78.983 46.582C78.731 47.1887 78.353 47.6787 77.849 48.052C77.3544 48.4253 76.7664 48.612 76.085 48.612Z"
                fill="#002A32"
              />
              <path
                d="M110.755 7C100.25 7 91.7344 15.3342 91.7344 25.6156V29.3387H97.4405V25.6156C97.4405 23.0383 98.2214 20.5189 99.6844 18.376C101.147 16.2331 103.227 14.5629 105.66 13.5766C108.093 12.5903 110.77 12.3323 113.352 12.8351C115.935 13.3379 118.307 14.5789 120.169 16.4013C122.031 18.2238 123.3 20.5456 123.813 23.0734C124.327 25.6011 124.063 28.2212 123.056 30.6023C122.048 32.9834 120.341 35.0186 118.152 36.4504C115.962 37.8823 113.388 38.6465 110.755 38.6465H91.7344V44.2312H110.755C121.26 44.2312 129.775 35.8961 129.775 25.6156C129.775 15.3342 121.26 7 110.755 7Z"
                fill="#43D581"
              />
              <path
                d="M93.3883 51.0018C94.3018 51.0018 95.0423 50.2442 95.0423 49.3095C95.0423 48.3749 94.3018 47.6172 93.3883 47.6172C92.4749 47.6172 91.7344 48.3749 91.7344 49.3095C91.7344 50.2442 92.4749 51.0018 93.3883 51.0018Z"
                fill="#43D581"
              />
              <path
                d="M100.002 51.0018C100.915 51.0018 101.656 50.2442 101.656 49.3095C101.656 48.3749 100.915 47.6172 100.002 47.6172C99.0882 47.6172 98.3477 48.3749 98.3477 49.3095C98.3477 50.2442 99.0882 51.0018 100.002 51.0018Z"
                fill="#43D581"
              />
              <path
                d="M106.617 51.0018C107.53 51.0018 108.271 50.2442 108.271 49.3095C108.271 48.3749 107.53 47.6172 106.617 47.6172C105.703 47.6172 104.963 48.3749 104.963 49.3095C104.963 50.2442 105.703 51.0018 106.617 51.0018Z"
                fill="#43D581"
              />
            </svg>
          </Link>
          {/* <!----------- search input -----------------> */}
          <form
            className={`hidden relative lg:flex w-1/2 border-2 border-gray-200 justify-between p-3 ${
              search ? "rounded-t-xl" : "rounded-xl"
            }`}
          >
            <input
              className="text-xs w-full outline-none"
              placeholder="اسم کتاب، نویسنده یا موضوع رو اینجا جست‌وجو کن"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <RiSearchLine size={20} className="text-chekida-slate" />
            {search && (
              <div className="absolute z-50 bg-white flex flex-col text-sm gap-2 w-full h-auto top-[48px] right-0 border-2 border-gray-200 p-3 rounded-b-xl">
                {search &&
                  search.map((b) => {
                    if (b.name.includes(input))
                      return (
                        <Link
                          className="hover:text-chekida-green"
                          onClick={() => setInput("")}
                          to={`/bookDetail/${b.id}`}
                        >
                          {b.name}
                        </Link>
                      );
                    else if (b.writer.includes(input))
                      return (
                        <Link
                          className="hover:text-chekida-green"
                          onClick={() => setInput("")}
                          to={`/bookDetail/${b.id}`}
                        >
                          {b.writer}
                        </Link>
                      );
                  })}
              </div>
            )}
          </form>
          {/* <!--------------------- account icon ----------------------> */}
          <div className="flex gap-4 relative">
            <a className="group hidden btn btn-primary px-5 lg:flex lg:w-fit lg:h-auto gap-2 justify-center items-center hover:bg-chekida-slate hover:text-white transition-all">
              <PiMedalFill
                size={20}
                className="text-chekida-slate group-hover:fill-white"
              />
              <p className="hidden lg:block text-xs  font-semibold">
                خرید اشتراک
              </p>
            </a>
            <Link
              className={`group w-9 h-9 p-0 ${
                name && "w-fit h-fit p-2"
              } lg:w-fit lg:h-auto btn lg:px-5 lg:bg-white bg-slate-200 flex gap-2 justify-center items-center lg:hover:bg-chekida-slate lg:hover:text-white transition-all border-0 lg:border-2 border-chekida-slate`}
              to={isAuthenticated ? "/" : "/login"}
              onClick={handleAccoutBox}
            >
              {isAuthenticated ? (
                <div className="flex gap-2 items-center">
                  <FiChevronDown />
                  <p className="block lg:hidden">{name}</p>
                </div>
              ) : (
                <BiSolidUser
                  size={20}
                  className="text-5xl lg:hidden text-chekida-slate"
                />
              )}
              {!isAuthenticated ? (
                <LuLogIn className="hidden lg:block w-5 h-auto stroke-chekida-slate group-hover:stroke-white" />
              ) : (
                <FiChevronDown className="hidden lg:block w-5 h-auto stroke-chekida-slate group-hover:stroke-white" />
              )}
              <p className="hidden lg:block text-xs  font-semibold">
                {isAuthenticated ? name : "ورود / ثبت‌نام"}
              </p>
            </Link>
            {isAuthenticated && accountBox && (
              <div className="bg-chekida-slate text-white absolute top-11 lg:top-14 left-0 p-4 flex flex-col gap-4 w-max z-50 rounded-2xl lg:rounded-xl text-sm">
                <div className="flex gap-2 items-center cursor-pointer">
                  <BiSolidUser />
                  <span>پنل کاربری</span>
                </div>
                <div
                  onClick={handleLogout}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <LuLogOut />
                  <span>خروج از حساب</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavUp;
