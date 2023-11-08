import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {

    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white lg:mt-10 py-2 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-yellow-400 mr-1 pt-2'>
                        <ion-icon name="invert-mode-outline"></ion-icon>
                    </span>
                    Trisog
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden lg:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white  text-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>

                    <a href="/"> <li className='md:ml-6 text-sm md:my-0 my-4 hover:text-orange-400'>Home</li> </a>
                    <a href="/"> <li className='md:ml-6 text-sm md:my-0 my-4 hover:text-orange-400'>About</li> </a>
                    <a href="/"> <li className='md:ml-6 text-sm md:my-0 my-4 hover:text-orange-400'>Tour</li> </a>
                    <a href="/"> <li className='md:ml-6 text-sm md:my-0 my-4 hover:text-orange-400'>Destination</li></a>
                    <a href="/"> <li className='md:ml-6 text-sm md:my-0 my-4 hover:text-orange-400'>Blog</li> </a>
                    <a href="/"> <li className='md:ml-6 text-sm md:my-0 my-4 hover:text-orange-400'>Pages</li> </a>
                    <a href="/"> <li className='md:ml-6 text-sm md:my-0 my-4 hover:text-orange-400'>Contact</li></a>

                    <div className="flex justify-center items-center gap-1 lg:ml-8 md:0 sm:0">
                        <AiOutlineUser className="font-semibold"></AiOutlineUser>
                        <a href="/" className='text-sm md:my-0 my-4 hover:text-orange-400 font-semibold'>Login</a>
                        <p>/</p>
                        <a href="/"className=' text-sm md:my-0 my-4 hover:text-orange-400 font-semibold'>Signup</a>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;