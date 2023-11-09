import image1 from '../../../assets/1.png'
import image4 from '../../../assets/3.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className="bg-blue-900 flex flex-col md:flex-row lg:flex-row justify-center lg:justify-evenly items-center gap-4 py-10 z-10">
                <div className='mb-10'>
                    <h3 className="font-bold font-[Agbalumo] text-xl text-yellow-300">Explore The</h3>
                    <h2 className="font-bold text-5xl font-white text-white mb-1">Travel & <br /> Adventures</h2>
                    <p className="text-sm text-white">Find awesome, tour, car and activities in London.</p>
                </div>
                <div className='flex gap-5 z-0'>
                    <img src={image1} alt="" className='h-56 w-48' />
                    <img src={image4} alt="" className='h-[350px] w-56 ' />
                </div>
            </div>
            <div className=' flex flex-wrap gap-4 justify-center items-center bg-white p-3 rounded-md mx-auto -mt-28 absolute'>
                <div className='flex flex-col '>
                    <label className='text-sm font-[Agbalumo]' htmlFor="">Destination</label>
                    <input className='border border-gray-300 rounded-md px-3 py-1' type="text" placeholder='Where to go?' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-[Agbalumo]' htmlFor="">Type</label>
                    <input className='border border-gray-300 rounded-md px-3 py-1' type="text" placeholder='Activity' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-[Agbalumo]' htmlFor="">When</label>
                    <input className='border border-gray-300 rounded-md px-3 py-1' type="" placeholder='Date' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-[Agbalumo]' htmlFor="">Gusts</label>
                    <input className='border border-gray-300 rounded-md px-2 py-1' type="number" placeholder='0' />
                </div>
                
                <button className='text-black bg-yellow-300 border border-black rounded-md px-3 py-1 mt-5'>Search</button>
            </div>
        </div>
    );
};

export default Banner;