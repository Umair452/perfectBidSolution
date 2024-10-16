import drawerButton from "../assets/images/drawerButton.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const header = document.querySelector("#header");

    function onScrollChanger() {
      if (window.scrollY > 0) {
        header.style.backgroundColor = "#00a8a5";
        console.log(`I am executed`);
      } else {
        header.style.backgroundColor = "transparent";
      }
    }

    if (header) {
      onScrollChanger();
      window.addEventListener("scroll", onScrollChanger);
    }

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", onScrollChanger);
    };
  }, []);

  return (
    <div
      id="header"
      className="bg-transperent fixed z-20 flex transition-colors duration-700 ease headerDiv items-center justify-between p-3 lg:py-6 lg:px-14  top-0 left-0 w-full"
    >
      <section className="">
        <Link to="/">
          <img
            className="object-contain max-h-12 sm:max-h-14"
            src="/logoWhite.png"
            alt="logo"
          />
        </Link>
      </section>

      <div className=" xl:flex hidden relative items-center text-xl  justify-around text-bright gap-12">
        <Link
          to="/"
          className="hover:scale-110 hover:transition-colors ease-in-out duration-700 flex items-end home "
        >
          Home
        </Link>

        <a
          href="#aboutus"
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHoverTwo"
          data-dropdown-trigger="hover"
          className="hover:scale-110 hover:transition ease-in-out duration-500 hover:text-heading flex items-end"
          type="button"
        >
          About
        </a>

        <Link
          to="/services"
          className="hover:scale-110  flex items-end hover:text-heading hover:transition ease-in-out duration-500"
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHoverThree"
          data-dropdown-trigger="hover"
          type="button"
        >
          Services
        </Link>

        <Link
          to="/portfolio"
          className="hover:scale-110 flex items-end hover:text-heading hover:transition ease-in-out duration-500"
        >
          Portfolio
        </Link>

        <div className="hover:scale-110 hover:text-heading hover:transition ease-in-out duration-500">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>

      <div className="flex xl:hidden text-center text-black">
        <button
          className=""
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <img src={drawerButton} alt="icon" />
        </button>
      </div>

      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-7 overflow-y-auto transition-transform translate-x-full bg-black w-full sm:w-3/5  text-white"
        // eslint-disable-next-line react/no-unknown-property
        tabeindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="flex flex-row justify-between">
          <Link to="/">
            <img
              className="object-contain  max-h-14 sm:max-h-20"
              src="/logoWhite.png"
              alt="logo"
            />
          </Link>

          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <div className="my-2 border-b-2 border-white/35">
          <button
            type="button"
            className="text-2xl focus:bg-heading focus:text-white bg-dark-bg flex items-center w-full p-2   transition duration-75 rounded-lg group "
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <Link
              to="/"
              className="font-bold  ms-3 text-left rtl:text-right whitespace-nowrap"
            >
              Home
            </Link>
            {/* <svg className="ml-2 -rotate-90 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                 </svg> */}
          </button>
          {/* <ul id="dropdown-example" className="hidden py-2 space-y-2 text-xl">
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Studio</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       DJ</a>
                 </li>
                 
           </ul> */}

          <button
            type="button"
            className="text-2xl focus:bg-heading focus:text-white bg-dark-bg flex items-center w-full p-2   transition duration-75 rounded-lg group "
            aria-controls="dropdown-exampleTwo"
            data-collapse-toggle="dropdown-exampleTwo"
          >
            <a
              href="#aboutus"
              className="font-bold  ms-3 text-left rtl:text-right whitespace-nowrap"
            >
              About Us
            </a>
            {/* <svg className="ml-2 w-3 h-3 -rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                 </svg> */}
          </button>
          {/* <ul id="dropdown-exampleTwo" className="hidden py-2 space-y-2 text-xl">
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Testimonials</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Team</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       FAQ</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Gallery</a>
                 </li>
                 
           </ul> */}

          <button
            type="button"
            className="text-2xl focus:bg-heading focus:text-white bg-dark-bg flex items-center w-full p-2   transition duration-75 rounded-lg group "
            aria-controls="dropdown-exampleThree"
            data-collapse-toggle="dropdown-exampleThree"
          >
            <Link
              to="/services"
              className="font-bold  ms-3 text-left rtl:text-right whitespace-nowrap"
            >
              Services
            </Link>
            {/* <svg className="ml-2 w-3 h-3 -rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                 </svg> */}
          </button>
          {/* <ul id="dropdown-exampleThree" className="hidden text-xl py-2 space-y-2">
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Shop</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Cart</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Checkout</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       My account</a>
                 </li>
                 
           </ul> */}

          <button
            type="button"
            className="text-2xl focus:bg-heading focus:text-white bg-dark-bg flex items-center w-full p-2   transition duration-75 rounded-lg group "
            aria-controls="dropdown-exampleFour"
            data-collapse-toggle="dropdown-exampleFour"
          >
            <Link
              to="/portfolio"
              className="font-bold  ms-3 text-left rtl:text-right whitespace-nowrap"
            >
              Portfolio
            </Link>
            {/* <svg className="ml-2 w-3 h-3 -rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                 </svg> */}
          </button>
          {/* <ul id="dropdown-exampleFour" className="hidden py-2 space-y-2 text-xl">
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Blog with sidebar</a>
                 </li>
                 <li>
                    <a href="#" className="flex items-center w-full p-2 text-white  transition ease-in-out duration-800 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                       Blog without sidebar</a>
                 </li>
                
                 
           </ul> */}

          <button
            type="button"
            className="text-2xl focus:bg-heading focus:text-white bg-dark-bg flex items-center w-full p-2   transition duration-75 rounded-lg group "
          >
            <Link
              to="/contact-us"
              className="font-bold  ms-3 text-left rtl:text-right whitespace-nowrap"
            >
              Contact Us
            </Link>
          </button>
        </div>

        {/* <div className="flex flex-col gap-5 my-5">
    <div className="flex flex-row-reverse justify-between w-full ">

        <img src="/profile.svg" alt="profile logo" />
        <img src="/shopping.svg" alt="cart" />
        
    </div>

    
        <button className="flex rounded-full justify-between items-center w-full bg-white">
            <input className="rounded-full  border-none focus:ring-0 text-dark-bg" placeholder="Search..." type="text" />
            <img className="p-4 rounded-full bg-heading" src="/search.svg" alt="search" />
        </button>
        </div>
  */}
      </div>
    </div>
  );
}
