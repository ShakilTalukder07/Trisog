import imageOne from '../../../assets/10.png'
import { TiTickOutline } from 'react-icons/ti'

const ChooseUs = () => {
    return (
        <div className='my-20'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10'>

                <div className='bg-blue-800 w-60 h-60 relative'>
                    <div className='bg-yellow-400 w-48 h-48 absolute right-0'>
                        <div className='absolute w-[200px] h-[300px] left-28'>
                            <img className='-m-28' src={imageOne} alt="" />
                        </div>
                    </div>
                    <h2 className='absolute top-52 left-12 text-white font-[Agbalumo] '>10+ Years of Experience.</h2>
                </div>


                <div>
                    <h3 className='font-bold text-blue-800 font-[Agbalumo] my-2'>Why Choose Us</h3>
                    <h1 className='text-black text-2xl font-bold mb-2'>Plan Your Trip <br /> With Trisog.</h1>
                    <p className='text-sm text-gray-400'>Holisticly optimise proactive strategic theme <br /> areas rather than effective manufactured <br /> products create.</p>
                    <div className='grid grid-cols-2 gap-2 my-4'>
                        <p className='flex item-center'><span><TiTickOutline></TiTickOutline></span> Travel Plan</p>
                        <p className='flex item-center'><span><TiTickOutline></TiTickOutline></span>Cheap Rates</p>
                        <p className='flex item-center'><span><TiTickOutline></TiTickOutline></span>Hand-picked Tour</p>
                        <p className='flex item-center'><span><TiTickOutline></TiTickOutline></span>Travel Guide</p>
                    </div>
                    <button className='px-3 py-2 bg-white rounded-md border border-black text-black text-sm'>Contact Us</button>

                </div>
            </div>
        </div>
    );
};

export default ChooseUs;