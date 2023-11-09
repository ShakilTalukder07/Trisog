import backgroundImage from '../../../assets/3.jpg';
import { MdSlowMotionVideo, MdOutlineParagliding } from 'react-icons/md';
import { FaTree, FaUmbrellaBeach } from 'react-icons/fa';
import { GiLevelFourAdvanced } from 'react-icons/gi';
import image5 from '../../../assets/5.png'
import image6 from '../../../assets/6.png'
import image7 from '../../../assets/7.png'
import image8 from '../../../assets/8.png'
import image9 from '../../../assets/9.png'


const Contact = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row lg:flex-row justify-evenly'
                style={{
                    background: `url(${backgroundImage})`,
                    backgroundSize: 'cover'
                }}
            >

                <div className='my-10'>
                    <MdSlowMotionVideo></MdSlowMotionVideo>
                    <h3 className='font-bold text-yellow-300 font-[Agbalumo] my-2'>Are you ready to travel?</h3>
                    <h1 className='text-white text-3xl font-bold mb-2'>Tevily Is a World Leading <br /> Online Tour Booking <br /> Platform.</h1>
                    <button className='px-2 py-1 bg-transparent rounded-md border border-white text-white'>Contact Us</button>
                </div>

                <div className='grid grid-cols-2 gap-4 my-10'>
                    <div className='bg-white h-32 w-32 flex flex-col justify-center items-center'>
                        <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                            <FaTree></FaTree>
                        </div>
                        <h2 className='font-bold text-center'>Wildlife <br /> Tours</h2>
                    </div>
                    <div className='bg-white h-32 w-32 flex flex-col justify-center items-center'>
                        <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                            <MdOutlineParagliding></MdOutlineParagliding>
                        </div>
                        <h2 className='font-bold text-center'>Paragliding <br /> Tours</h2>
                    </div>
                    <div className='bg-white h-32 w-32 flex flex-col justify-center items-center'>
                        <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                            <GiLevelFourAdvanced></GiLevelFourAdvanced>
                        </div>
                        <h2 className='font-bold text-center'>Adventure <br /> Tours</h2>
                    </div>
                    <div className='bg-white h-32 w-32 flex flex-col justify-center items-center'>
                        <div className='bg-yellow-300 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                            <FaUmbrellaBeach></FaUmbrellaBeach>
                        </div>
                        <h2 className='font-bold text-center'>Beaches <br /> Tours</h2>
                    </div>
                </div>

            </div>
            <div className='bg-blue-600 py-10'>
                <h2 className='text-yellow-300 font-[Agbalumo] text-center mb-5 text-xl'>Our Trusted Partners</h2>
                <div className='flex justify-center items-center flex-wrap gap-5'>
                    <img src={image5} alt="" className='w-40 h-24' />
                    <img src={image6} alt="" className='w-40 h-24'/>
                    <img src={image7} alt="" className='w-40 h-24'/>
                    <img src={image8} alt="" className='w-40 h-24'/>
                    <img src={image9} alt="" className='w-40 h-24'/>
                </div>
            </div>
        </>
    );
};

export default Contact;