import Image from "next/image";
import home1 from "../../public/src/images/home1.png"
import 'swiper/css';
import { CalendarIcon } from "@heroicons/react/24/outline";


const Header = () => {
    return (

        
        <div className="px-5">
            <div className="overflow-hidden ">
                <div className="container mx-auto">
                    <div className=" flex flex-wrap flex-row items-center sm:px-2 ">
                        <div className="w-full lg:w-[40%]  my-8 mt-10 lg:mt-16">
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
                            <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">Innovative solutions for your eye health.</h1>
                            <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">Providing efficient, fit for purpose and sustainable eye care solutions with innovative and up to date clinical practices, in a friendly and conducive environment.</p>
                            <div className="flex flex-wrap -m-2.5 lg:mb-20">
                                <div className="w-full md:w-auto p-2.5">
                                    <div className="block">
                                        <button className="py-4 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">  Book Appointment</button>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto p-2.5">
                                    <div className="block">
                                        <button className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200" type="button">
                                            <div className="flex flex-wrap justify-center items-center -m-1">
                                                {/* <div className="w-auto p-1">
                                                    <svg width="19" height="18" viewbox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div> */}
                                                <div className="w-auto p-1">
                                                    <span>Learn more...</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full lg:w-[55%] lg:ml-10">
                            <Image
                                src={home1}
                                alt="hero"
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                height={480}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;