import Image from "next/image";
import home1 from "../../public/src/images/home1.png"
import 'swiper/css';
import { CalendarIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import slider1 from "../../public/src/images/slider1.png"
import slider2 from "../../public/src/images/slider2.png"
import slider3 from "../../public/src/images/slider3.png"
import { Autoplay, Pagination, } from "swiper";


const Header2 = () => {

    // const swiper = new Swiper('.swiper', {
    //     direction: 'horizontal',
    //     loop: true,
    // });

    
    return (
        <div className="overflow-hidden relative bg-gray-900">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="px-4  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                                <div className="inline-block mb-6 py-1 px-4 font-semibold bg-green-100 rounded-full">
                                    <div class="flex flex-wrap items-center -m-1">
                                        <div className=" p-1"><a className="text-sm" href="">&#x1F44B; Your Eyes is your window to the world.</a></div>
                                        <div className=" p-1">
                                            <svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Innovative solutions <br className="hidden md:block" />
                                    for your eye{' '}
                                    <span className="text-teal-accent-400">health</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-base">
                                    Providing efficient, fit for purpose and sustainable eye care solutions with innovative and up to date clinical practices, in a friendly and conducive environment.
                                </p>


                                <button className="py-4 px-5 w-fit text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">  Book Appointment</button>


                            </div>
                            <div className="w-fit max-w-xl xl:w-5/12">
                                <Image
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    src={slider1}
                                    alt=""
                                />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="px-4  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                                <div className="inline-block mb-6 py-1 px-4 font-semibold bg-green-100 rounded-full">
                                    <div class="flex flex-wrap items-center -m-1">
                                        <div className=" p-1"><a className="text-sm" href="">&#x1F44B; Your Eyes is your window to the world.</a></div>
                                        <div className=" p-1">
                                            <svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                   Free Eye care every last<br className="hidden md:block" />
                                   friday of the month{' '}
                                    <span className="text-teal-accent-400">health</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-base">
                                    Providing efficient, fit for purpose and sustainable eye care solutions with innovative and up to date clinical practices, in a friendly and conducive environment.
                                </p>


                                <button className="py-4 px-5 w-fit text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">  Book Appointment</button>


                            </div>
                            <div className="w-fit max-w-xl xl:w-5/12">
                                <Image
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    src={slider2}
                                    alt=""
                                />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="px-4  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                                <div className="inline-block mb-6 py-1 px-4 font-semibold bg-green-100 rounded-full">
                                    <div class="flex flex-wrap items-center -m-1">
                                        <div className=" p-1"><a className="text-sm" href="">&#x1F44B; Your Eyes is your window to the world.</a></div>
                                        <div className=" p-1">
                                            <svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Innovative solutions <br className="hidden md:block" />
                                    for your eye{' '}
                                    <span className="text-teal-accent-400">health</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-base">
                                    Providing efficient, fit for purpose and sustainable eye care solutions with innovative and up to date clinical practices, in a friendly and conducive environment.
                                </p>


                                <button className="py-4 px-5 w-fit text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">  Book Appointment</button>


                            </div>
                            <div className="w-fit max-w-xl xl:w-5/12">
                                <Image
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    src={slider3}
                                    alt=""
                                />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>

            <div className="absolute right-20 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0000FF] to-[#0000FF] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            
        </div>
    );
}

export default Header2;