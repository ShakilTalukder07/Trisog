import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.jpg'
import image3 from '../../../assets/3.jpg'
import image4 from '../../../assets/4.jpg'
import { motion } from 'framer-motion'

const Updates = () => {
    return (
        <div className="mt-20">
            <div className="text-center mb-10">
                <h3 className="text-blue-400 text-xl font-[Agbalumo]">Updates</h3>
                <h1 className="font-bold text-3xl">Latest Travel Guide</h1>
            </div>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">

                <div className='flex gap-2'>
                    <img src={image4} alt="tour image" className='w-60 h-40' />
                    <div>
                        <p className='text-gray-500 text-sm'>July 13, 2023 <span>- Admin</span></p>
                        <p className='font-bold'>The impact of covid-19 on <br /> travel & tourism industry.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <img src={image2} alt="tour image" className='w-60 h-40' />
                    <div>
                        <p className='text-gray-500 text-sm'>July 13, 2023 <span>- Admin</span></p>
                        <p className='font-bold'>The impact of covid-19 on <br /> travel & tourism industry.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <img src={image3} alt="tour image" className='w-60 h-40' />
                    <div>
                        <p className='text-gray-500 text-sm'>July 13, 2023 <span>- Admin</span></p>
                        <p className='font-bold'>The impact of covid-19 on <br /> travel & tourism industry.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <img src={image4} alt="tour image" className='w-60 h-40' />
                    <div>
                        <p className='text-gray-500 text-sm'>July 13, 2023 <span>- Admin</span></p>
                        <p className='font-bold'>The impact of covid-19 on <br /> travel & tourism industry.</p>
                    </div>
                </div>
            </motion.div>

            <hr className='mx-10 mt-10 ' />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 20 }}
                viewport={{ once: true }}
                className='flex flex-wrap justify-center items-center gap-4 my-10'>
                <p className='font-bold [writing-mode:vertical-rl]'>@trisog</p>
                <img src={image1} alt="" className='w-40 h-40' />
                <img src={image2} alt="" className='w-40 h-40' />
                <img src={image3} alt="" className='w-40 h-40' />
                <img src={image4} alt="" className='w-40 h-40' />
                <img src={image1} alt="" className='w-40 h-40' />
            </motion.div>
        </div>
    );
};

export default Updates;