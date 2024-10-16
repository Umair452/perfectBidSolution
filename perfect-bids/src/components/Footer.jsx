import mail from "../assets/images/mail.svg";
import { Link } from "react-router-dom";
import location from "../assets/images/location.svg";
import arrows from "../assets/images/double-arrow.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-footerBlue text-bright flex flex-wrap justify-between bg-footer-bg bg-no-repeat bg-contain bg-bottom p-4 sm:px-14 sm:py-16 gap-7 lg:gap-0">
        {/* <div>
  
  
  <a className="peer text-bright h-2" href="">
      check one
  </a>
  <div className="opacity-0 peer-hover:opacity-100 text-bright">Div one</div>
  </div>
  
  
  <div>
  <a className="peer text-bright "href="">
      check two
  </a>
  
  <div className="text-bright opacity-0 peer-hover:opacity-100 transition ease-in-out duration-700">Div two</div>
  </div> */}

        <div className="hidden  w-1/4 xl:flex flex-col justify-between">
          <div>
            <img
              className="object-contain max-h-14 sm:max-h-20"
              src="/logoWhite.png"
              alt="logo"
            />
          </div>
          <div className="max-w-52 text-justify">
            <p>
              Calculating perfect bids and satisfying our clients since 2022
            </p>
          </div>
        </div>

        <div className="xl:w-1/4 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl text-heading">Quick Links</h1>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-1">
              <img src={arrows} alt="" />
              <Link
                to="/"
                className="hover:scale-110 hover:transition ease-in-out duration-500 "
              >
                Home
              </Link>
            </div>
            <div className="flex gap-1">
              <img src={arrows} alt="" />
              <Link
                to="services"
                className="hover:scale-110 hover:transition ease-in-out duration-500 "
              >
                Services
              </Link>
            </div>
            <div className="flex gap-1">
              <img src={arrows} alt="" />
              <a
                href="#aboutus"
                className="hover:scale-110 hover:transition ease-in-out duration-500 "
              >
                About Us
              </a>
            </div>
            <div className="flex gap-1">
              <img src={arrows} alt="" />
              <Link
                to="/portfolio"
                className="hover:scale-110 hover:transition ease-in-out duration-500 "
              >
                Portfolio
              </Link>
            </div>

            <div className="flex gap-1">
              <img src={arrows} alt="" />
              <Link
                to="/contact-us"
                className="hover:scale-110 hover:transition ease-in-out duration-500 "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:w-1/4 flex flex-col justify-between gap-3">
          <div>
            <h1 className="font-bold text-2xl text-heading">Contact info</h1>
          </div>
          <div className="flex  items-start gap-2">
            <div className="">
              <img src={location} alt="location" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-heading font-bold">Our location:</div>
              <div>
                <p className="w-[244px]  cursor-pointer">
                  {" "}
                  975 Liberty Ave, Union, NJ 07083, USA
                </p>
              </div>
            </div>
          </div>

          <div className="flex  items-start gap-2">
            <div className="">
              <img src={mail} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-heading font-bold">Email Us:</div>
              <div className=" cursor-pointer">
                <p>support@perfectbidsolutions.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
