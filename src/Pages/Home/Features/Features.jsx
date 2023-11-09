import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.jpg'


const Features = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center lg:justify-evenly items-center gap-4 mb-5'>
                <div className='my-10'>
                    <h3 className='font-bold text-blue-900 font-[Agbalumo] my-2'>Why We Are Best</h3>
                    <h1 className=' text-3xl font-bold mb-2'>Keep Things <br /> Flexible</h1>
                    <button className='px-2 py-1 bg-transparent rounded-md border border-black'>Contact Us</button>

                    <div className="grid grid-cols-2 gap-6 mt-4">
                        <div>
                            <h2 className="font-2xl font-[Agbalumo]"><span className='bg-yellow-300 rounded-full w-10 h-10'>12</span>0+</h2>
                            <p className="text-sm text-gray-400">Total Destination</p>
                        </div>
                        <div>
                            <h2 className="font-2xl font-[Agbalumo]"><span className="bg-yellow-300 rounded-full w-10 h-10">12</span>K+</h2>
                            <p className="text-sm text-gray-400">Total Travelers</p>
                        </div>
                        <div>
                            <h2 className="font-2xl font-[Agbalumo]"><span className="bg-yellow-300 rounded-full w-10 h-10">50</span>0+</h2>
                            <p className="text-sm text-gray-400">Travel Packages</p>
                        </div>
                        <div>
                            <h2 className="font-2xl font-[Agbalumo] "> <span className="bg-yellow-300 rounded-full w-10 h-10">7K</span>+</h2>
                            <p className="text-sm text-gray-400">Positive Reviews</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-1/2 relative'>
                        <img src={image1} alt='' className=" w-3/5 h-full shadow-2xl" />
                        <img src={image2} alt='' className=" absolute top-1/2 right-1 w-4/5 border-2 border-white shadow-2xl" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Features;