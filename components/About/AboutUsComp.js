import Image from "next/image";
import pic1 from "../../public/src/images/eyeclinic.jpg"
import Link from "next/link";
import mision from "../../public/src/images/1.png"
import vision from "../../public/src/images/2.png"
import core from "../../public/src/images/3.png"
import eyefact from "../../public/src/images/eyefact.jpg"
import about from "../../public/src/images/aboutus.jpg"


const AboutUsComp = () => {



    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6 lg:pr-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            About Pearlmine.
                        </h2>
                        
                        <p className="text-sm text-gray-700 md:text-lg">
                            Pearlmine eye care is an ultra-modern eye clinic resident in the Garden City of Port Harcourt, with a highly trained excellent-driven team creating a culture of preventive eye care as well as corrective eye care, in order to reduce the rapid decline of clear vision in communities. <br /> <br /> Over the years, we have taken our place in ensuring excellent eye care solutions that are effective, affordable and sustainable are provided across various sectors and communities in Rivers State. <br /> It is our delight to serve you based on your eye care needs and preferences.
                        </p>

                        <Link href="/contact" className="mt-5 py-3 px-5 w-fit text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                            Read More <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                    {/* <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                        <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                    I${`'`}ll be sure to note that in my log
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                                    to go on account heave down.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                    A business big enough that it could be listed
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Those options are already baked in with this model shoot me an
                                    email clear.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="relative">
                    <Image
                        className="object-cover w-full h-40 rounded shadow-lg sm:h-96"
                        src={pic1}
                        alt=""
                    />

                    <span className="absolute lg:top-4 lg:right-4">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                                width="52"
                                height="24"
                            />
                        </svg>

                    </span>{' '}
                </div>
            </div>           

            <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className=" max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    
                    
                    
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            More about us
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        
                        Our Purpose and Values
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Discover our journey, explore our vision and mission statements, and get acquainted with our core values that shape every aspect of our work. Gain insights into our commitment to integrity, innovation, collaboration, and excellence, as we strive to make a positive impact and create a better future. 
                    </p>
                </div>
                <div className="grid gap-8 row-gap-10 lg:grid-cols-3">

                    

                <div className="max-w-md flex flex-col items-center sm:mx-auto sm:text-center">
                        
                        <Image
                            className="object-cover shadow-lg rounded-full mb-5 p-2"
                            src={mision}
                            alt=""
                            height="150"
                            width="150"
                        />
                        <h6 className="mb-3 text-xl font-bold leading-5">Our Mission</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            To be the Hub of quality and excellent eye care delivery and become the first choice for eye care solutions in Nigeria.
                        </p>
                        <Link
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                </div>
                    <div className="max-w-md flex flex-col items-center sm:mx-auto sm:text-center">
                        <Image
                            className="object-cover shadow-lg rounded-full mb-5"
                            src={vision}
                            alt=""
                            height="150"
                            width="150"
                        />

                        <h6 className="mb-3 text-xl font-bold leading-5">Our Vision</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            Providing efficient, fit for purpose and sustainable eye care solutions with innovative and up to date clinical practices, in a friendly and conducive environment.
                        </p>
                        <Link
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                    </div>
                    <div className="max-w-md flex flex-col items-center sm:mx-auto sm:text-center">
                        <Image
                            className="object-cover shadow-lg rounded-full mb-5"
                            src={core}
                            alt=""
                            height="150"
                            width="150"
                        />
                        <h6 className="mb-3 text-xl font-bold leading-5">Our Core Values</h6>
                        <p className="mb-3 text-sm text-gray-900">
                           At our core, we strive to uphold a strong set of guiding principles: Excellence, Intergrity, Teamwork, Loyalty and Respect
                        </p>
                        <Link
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </Link>
                    </div>
                    
                </div>

                <span className="absolute lg:top-44 lg:left-44">
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                            <pattern
                                id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                            >
                                <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                            width="52"
                            height="24"
                        />
                    </svg>

                </span>{' '}
            </div>

            <div className="flex flex-col mt-16 gap-10 items-center justify-between lg:flex-row md:flex-col-reverse">

                <div className="mb-10 lg:max-w-lg lg:pr-10 lg:mb-0 ">
                    <div className="max-w-xl mb-6">

                        <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                            Who we are

                        </h2>

                        <div className="a mt-8">
                            <ol>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        1
                                    </span>
                                    Myopia or Nearsightedness – Vision is clear for near but blurry for distance.
                                </li>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        2
                                    </span>
                                    Hyperopia or Farsightedness – Vision for distance is clear but blurry close up.
                                </li>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        3
                                    </span>
                                    Presbyopia – Inability to read small prints as a result of aging.
                                </li>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        4
                                    </span>
                                    Astigmatism – Occurs when the clear front cover of the eye is irregularly shaped because of the curvature of the lens inside the eye causing blurred vision at various distances.
                                </li>
                                

                            </ol>
                        </div>

                    </div>

                </div>

                <div className="w-full flex flex-col lg:w-1/2 lg:flex-row gap-5  ">
                    <Image
                        className="w-full rounded-lg shadow-lg lg:h-[95%] lg:w-[60%]"
                        src={eyefact}
                        alt=""
                    />

                    <Image
                        className="w-full rounded-lg shadow-lg lg:h-[95%] lg:w-[60%]"
                        src={about}
                        alt=""
                    />

                </div>

            </div>

            <div className="flex flex-col-reverse mt-14 lg:mt-32 justify-between lg:flex-row">

                <div className=" lg:w-1/2">
                    <iframe width="560" className="rounded-xl w-[100%] lg:w-[90%] h-96" height="315" src="https://www.youtube.com/embed/0-QxYRg5Gis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="mb-10 lg:max-w-lg lg:pr-10 lg:mb-0 ">
                    <div className="max-w-xl mb-6">

                        <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                            Why eye care?

                        </h2>

                        <div className="a mt-8">
                            <ol>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        1
                                    </span>
                                    Your eyes are important tools for the job you do right now, and so your job security is key.
                                </li>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        2
                                    </span>
                                    Your family needs you in proper eye sight, don’t rob them off that opportunity.
                                </li>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        3
                                    </span>
                                    80% of your child’s school work is presented visually, so we want them to keep excelling.
                                </li>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        4
                                    </span>
                                    People who lose their vision later in life are 3 times more likely to be depressed, we don’t want you to join that statistics.
                                </li>
                                <li className="mb-4 flex items-center gap-5 text-base text-body-color">
                                    <span
                                        className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-blue-600 text-sm text-white"
                                    >
                                        5
                                    </span>
                                    There are so many beautiful things life has to offer, and we want you to see and enjoy it all.
                                </li>

                            </ol>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutUsComp;
