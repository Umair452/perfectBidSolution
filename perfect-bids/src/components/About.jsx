import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function About() {


  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds (optional)
      offset: 200,    // Offset from the original trigger point (optional)
      once: true,     // Whether animation should happen only once (optional)
    });
  }, []);


  return (
   
    <>
    
    <div  className="relative gap-5 px-2 lg:px-28 py-12 packageContainer flex flex-col justify-center items-center text-center  bg-backgroundBlue text-headerBlue bg-fixed">
        
    {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        <div className="lg:w-2/3">
            {/* <h1 className="text-heading text-3xl">Our Company</h1> */}
            <h1 className=" transition ease-in duration-500  text-4xl lg:text-6xl font-bold">Who are we?</h1>
            <h1 className="text-xl text-dark">At <span className="text-2xl font-bold text-headerBlue">PerfectBids</span> Solutions we've experts who 
            optimizes the bid and give you the chance to stand out, our estimation team has worked with big giants
            and gained the experience of how to simplify a project and make it easy for the contracters to bid.</h1>
        </div>



        <div className="flex flex-col lg:flex-row w-full">



        <div  className="lg:w-[45%] p-10 text-center  gap-4 lg:text-start bg-bright text-black flex flex-col justify-start">
        <h1 className="text-4xl font-bold">How we proceed</h1>
        <p className="text-xl">
        We proceed in a simplified manner in order to deliver the client what he / she desires.</p>
        {/* <p className="text-2xl font-bold text-heading">35$ <span className="text-xl text-black">/hour</span></p>
        <button className="text-2xl bg-slate p-6 lg:w-2/4 text-bright font-bold rounded-full hover:transition-color ease-in-out duration-500 hover:text-bright hover:bg-black">Read more</button> */}
        </div>




        <div   className="flex flex-col lg:flex-row lg:pb-32 justify-end bg-no-repeat bg-cover bg-center 
                        lg:w-[55%]">
        
        
        <div className=" flex flex-col justify-between items-start p-8 bg-headerBlue text-bright lg:bg-heading lg:w-[54%] text-xl font-bold">
            <a className="hover:transition-color ease-in-out duration-700 bg-heading hover:lg:bg-bright  hover:text-black w-full flex p-3" href="#">01. </a>
            <a className="hover:transition-color ease-in-out duration-700 hover:text-black w-full flex p-3 hover:lg:bg-bright" href="#">02. </a>
            <a className="hover:transition-color ease-in-out duration-700 hover:text-black w-full flex p-3 hover:lg:bg-bright" href="#">03. </a>
            <a className="hover:transition-color ease-in-out duration-700 hover:text-black w-full flex p-3 hover:lg:bg-bright" href="#">04. </a>
            <a className="hover:transition-color ease-in-out duration-700 hover:text-black w-full flex p-3 hover:lg:bg-bright" href="">05. </a>
        </div>
        </div>



        
        
        </div>


    </div>
    
    </>
  )
}
