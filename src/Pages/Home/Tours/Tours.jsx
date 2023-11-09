import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.jpg'
import image3 from '../../../assets/3.jpg'
import image4 from '../../../assets/4.jpg'
import { AiFillStar } from 'react-icons/ai'
import { LiaStopwatchSolid } from 'react-icons/lia'
import { AiOutlineHeart } from 'react-icons/ai'


const Tours = () => {
    return (
        <div className="bg-blue-900 p-10">
            <div className="text-center text-white my-6">
                <h3 className="font-[Agbalumo] text-sm">Tours</h3>
                <h1 className="font-bold text-2xl">Featured Tours</h1>
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={true}
                    breakpoints={{
                        360: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                    }}
                    autoplay={{
                        delay: 1500
                    }}
                    // navigation
                    // loop={true}
                    modules={[Pagination, Navigation, Autoplay]}

                    className="mySwiper max-w-screen-xl  mx-auto"

                >
                    <SwiperSlide>
                        <div className="flex flex-col w-48 h-80">
                            <div className="relative">
                                <img src={image3} alt="" />
                                <span className="absolute right-2 top-2 bg-white p-1 rounded-full"><AiOutlineHeart></AiOutlineHeart></span>
                            </div>
                            <div className="bg-white p-2">
                                <p className="text-sm text-gray-400 mb-1">Budapest, Hungry</p>
                                <p className="font-bold text-sm mb-2">Wonders of the west coast & Kimberley.</p>
                                <div className="flex justify-evenly text-sm text-gray-400">
                                    <p className="flex justify-center items-center bg-orange-400 p-[1px] rounded-md"><span><AiFillStar></AiFillStar></span> 4.5</p>
                                    <p>15 reviews</p>
                                    <p className="flex justify-center items-center"> <span><LiaStopwatchSolid></LiaStopwatchSolid></span> 7 days</p>
                                </div>
                                <hr className="mx-2 my-2" />
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-400">Starting from</p>
                                    <p className="font-[Agbalumo]">$520</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col w-48 h-80">
                            <div className="relative">
                                <img src={image1} alt="" />
                                <span className="absolute right-2 top-2 bg-white p-1 rounded-full"><AiOutlineHeart></AiOutlineHeart></span>
                            </div>
                            <div className="bg-white p-2">
                                <p className="text-sm text-gray-400 mb-1">Budapest, Hungry</p>
                                <p className="font-bold text-sm mb-2">Wonders of the west coast & Kimberley.</p>
                                <div className="flex justify-evenly text-sm text-gray-400">
                                    <p className="flex justify-center items-center bg-orange-400 p-[1px] rounded-md"><span><AiFillStar></AiFillStar></span> 4.5</p>
                                    <p>15 reviews</p>
                                    <p className="flex justify-center items-center"> <span><LiaStopwatchSolid></LiaStopwatchSolid></span> 7 days</p>
                                </div>
                                <hr className="mx-2 my-2" />
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-400">Starting from</p>
                                    <p className="font-[Agbalumo]">$520</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col w-48 h-80">
                            <div className="relative">
                                <img src={image2} alt="" />
                                <span className="absolute right-2 top-2 bg-white p-1 rounded-full"><AiOutlineHeart></AiOutlineHeart></span>
                            </div>
                            <div className="bg-white p-2">
                                <p className="text-sm text-gray-400 mb-1">Budapest, Hungry</p>
                                <p className="font-bold text-sm mb-2">Wonders of the west coast & Kimberley.</p>
                                <div className="flex justify-evenly text-sm text-gray-400">
                                    <p className="flex justify-center items-center bg-orange-400 p-[1px] rounded-md"><span><AiFillStar></AiFillStar></span> 4.5</p>
                                    <p>15 reviews</p>
                                    <p className="flex justify-center items-center"> <span><LiaStopwatchSolid></LiaStopwatchSolid></span> 7 days</p>
                                </div>
                                <hr className="mx-2 my-2" />
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-400">Starting from</p>
                                    <p className="font-[Agbalumo]">$520</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col w-48 h-80">
                            <div className="relative">
                                <img src={image4} alt="" />
                                <span className="absolute right-2 top-2 bg-white p-1 rounded-full"><AiOutlineHeart></AiOutlineHeart></span>
                            </div>
                            <div className="bg-white p-2">
                                <p className="text-sm text-gray-400 mb-1">Budapest, Hungry</p>
                                <p className="font-bold text-sm mb-2">Wonders of the west coast & Kimberley.</p>
                                <div className="flex justify-evenly text-sm text-gray-400">
                                    <p className="flex justify-center items-center bg-orange-400 p-[1px] rounded-md"><span><AiFillStar></AiFillStar></span> 4.5</p>
                                    <p>15 reviews</p>
                                    <p className="flex justify-center items-center"> <span><LiaStopwatchSolid></LiaStopwatchSolid></span> 7 days</p>
                                </div>
                                <hr className="mx-2 my-2" />
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-400">Starting from</p>
                                    <p className="font-[Agbalumo]">$520</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col w-48 h-80">
                            <div className="relative">
                                <img src={image1} alt="" />
                                <span className="absolute right-2 top-2 bg-white p-1 rounded-full"><AiOutlineHeart></AiOutlineHeart></span>
                            </div>
                            <div className="bg-white p-2">
                                <p className="text-sm text-gray-400 mb-1">Budapest, Hungry</p>
                                <p className="font-bold text-sm mb-2">Wonders of the west coast & Kimberley.</p>
                                <div className="flex justify-evenly text-sm text-gray-400">
                                    <p className="flex justify-center items-center bg-orange-400 p-[1px] rounded-md"><span><AiFillStar></AiFillStar></span> 4.5</p>
                                    <p>15 reviews</p>
                                    <p className="flex justify-center items-center"> <span><LiaStopwatchSolid></LiaStopwatchSolid></span> 7 days</p>
                                </div>
                                <hr className="mx-2 my-2" />
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-400">Starting from</p>
                                    <p className="font-[Agbalumo]">$520</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex flex-col w-48 h-80">
                            <div className="relative">
                                <img src={image2} alt="" />
                                <span className="absolute right-2 top-2 bg-white p-1 rounded-full"><AiOutlineHeart></AiOutlineHeart></span>
                            </div>
                            <div className="bg-white p-2">
                                <p className="text-sm text-gray-400 mb-1">Budapest, Hungry</p>
                                <p className="font-bold text-sm mb-2">Wonders of the west coast & Kimberley.</p>
                                <div className="flex justify-evenly text-sm text-gray-400">
                                    <p className="flex justify-center items-center bg-orange-400 p-[1px] rounded-md"><span><AiFillStar></AiFillStar></span> 4.5</p>
                                    <p>15 reviews</p>
                                    <p className="flex justify-center items-center"> <span><LiaStopwatchSolid></LiaStopwatchSolid></span> 7 days</p>
                                </div>
                                <hr className="mx-2 my-2" />
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-400">Starting from</p>
                                    <p className="font-[Agbalumo]">$520</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Tours;