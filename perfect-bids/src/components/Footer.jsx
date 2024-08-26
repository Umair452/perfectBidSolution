import phone from '../assets/images/phone.svg'
import location from '../assets/images/location.svg'

export default function Footer() {
    return (
  
      <>
      <div className="bg-gray text-dark flex flex-wrap justify-between bg-footer-bg bg-no-repeat bg-contain bg-bottom p-4 sm:px-14 sm:py-16 gap-7 lg:gap-0">
          
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
          <img className="" src="/logo.png" alt="logo" />
          </div>
          <div className="max-w-52 text-justify"><p>Calculating perfect bids and satisfying our clients since 2022
          </p>
          </div>
          
          </div>
  
          <div className="xl:w-1/4 flex flex-col  justify-between">
              <div>
                  <h1 className="font-bold text-2xl text-heading">Quick Links</h1>
              </div>
              <div className="flex flex-col gap-2">
                      <div className="flex ">
                      
                      <a href="#" className="hover:text-orange-500 hover:transition ease-in-out duration-500 ">Home</a>
                      </div>
                      <div className="flex">
                      
                      <a href="#" className="hover:text-orange-500 hover:transition ease-in-out duration-500 ">Blog</a>
                      </div>
                      <div className="flex">
                      
                      <a href="#" className="hover:text-orange-500 hover:transition ease-in-out duration-500 ">Products</a>
                      </div>
                      <div className="flex">
                      
                      <a href="#" className="hover:text-orange-500 hover:transition ease-in-out duration-500 ">Contact Us</a>
                      </div>
                  
                  
                 
              </div>
          </div>
  
  
          <div className="xl:w-1/4 flex flex-col justify-between gap-3">
              <div>
                  <h1 className="font-bold text-2xl text-heading">Contact info</h1>
              </div>
              <div className="flex  items-start gap-2">
                  <div className="mt-1">
                      <img src = {location} alt="location" />
                  </div>
                  <div className="flex flex-col gap-2">
                      <div className="text-heading font-bold">
                      Our location:
                      </div>
                      <div>
                      <p className="w-[244px] hover:text-orange-500  hover:transition ease-in-out duration-500 cursor-pointer"> 975 Liberty Ave, Union, NJ 07083, USA</p>
                      </div>
                  </div>
              </div>
  
              <div className="flex  items-start gap-2">
                  <div className="mt-1">
                      <img src = {phone} alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
  
                      <div className="text-heading font-bold">
                      Phones:
                      </div>
                      <div className="hover:text-orange-500  hover:transition ease-in-out duration-500 cursor-pointer">
                      <p>+49078-039-23-11 </p>
                      <p>+49078-039-23-11 </p>
                      </div>
  
                  </div>
              </div>
          </div>
         
         
          
  
  
  
      </div>
  
     
  
  
  
  
  
  
   
  </>
  
  
  
  
  
  
  
  
  
    )
  }