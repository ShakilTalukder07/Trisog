import { FaCity } from 'react-icons/fa'
import { FaUmbrellaBeach, FaHiking } from 'react-icons/fa';
import { PiBowlFoodLight } from 'react-icons/pi';
import { GiShoonerSailboat, GiLevelFourAdvanced } from 'react-icons/gi';
import { motion } from "framer-motion";


const Category = () => {
    return (
        <div>
            <div className='text-center mt-14 mb-10'>
                <h3 className='font-[Agbalumo] text-blue-500'>Browse By Category</h3>
                <h1 className='text-3xl font-bold'>Pick A Tour Type</h1>
            </div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className=' flex gap-4 justify-center items-center mb-10'>
                <div className='bg-white h-32 w-32 flex flex-col justify-center items-center shadow-2xl'>
                    <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                        <FaCity></FaCity>
                    </div>
                    <h2 className='font-bold text-center'>City Tours</h2>
                    <p className="text-sm text-gray-300">10+ Tour+</p>
                </div>
                <div className='bg-white h-32 w-32 flex flex-col justify-center items-center shadow-2xl'>
                    <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                        <FaUmbrellaBeach></FaUmbrellaBeach>
                    </div>
                    <h2 className='font-bold text-center'>Beaches</h2>
                    <p className="text-sm text-gray-300">10+ Tour+</p>
                </div>
                <div className='bg-white h-32 w-32 flex flex-col justify-center items-center shadow-2xl'>
                    <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                        <GiShoonerSailboat></GiShoonerSailboat>
                    </div>
                    <h2 className='font-bold text-center'>Boat Tours</h2>
                    <p className="text-sm text-gray-300">10+ Tour+</p>
                </div>
                <div className='bg-white h-32 w-32 flex flex-col justify-center items-center shadow-2xl'>
                    <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                        <GiLevelFourAdvanced></GiLevelFourAdvanced>
                    </div>
                    <h2 className='font-bold text-center'>Adventure</h2>
                    <p className="text-sm text-gray-300">10+ Tour+</p>
                </div>
                <div className='bg-white h-32 w-32 flex flex-col justify-center items-center shadow-2xl'>
                    <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                        <PiBowlFoodLight></PiBowlFoodLight>
                    </div>
                    <h2 className='font-bold text-center'>Food</h2>
                    <p className="text-sm text-gray-300">10+ Tour+</p>
                </div>
                <div className='bg-white h-32 w-32 flex flex-col justify-center items-center shadow-2xl'>
                    <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                        <FaHiking></FaHiking>
                    </div>
                    <h2 className='font-bold text-center'>Hiking</h2>
                    <p className="text-sm text-gray-300">10+ Tour+</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Category;