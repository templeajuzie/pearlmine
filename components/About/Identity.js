import Image from "next/image";
import about from "../../public/src/images/aboutus.jpg"
import who from "../../public/src/images/blog1.jpg"
import product from "../../public/src/images/product.jpg"
import eyefact from "../../public/src/images/eyefact.jpg"
import Link from "next/link";

const Identity = () => {
    return (


        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-3 lg:py-10">
            <div className="grid lg:px-6 gap-6 md:grid-cols-2 lg:grid-cols-5">
                <div className="relative md:col-span-2 lg:col-span-2 ">
                    <div className=" mx-auto lg:mx-0 lg:text-left ">
                        <h2 className="text-3xl font-bold sm:text-4xl">Who we are</h2>

                        <p className="mt-4 text-gray-600 lg:w-[76%]">
                            Pearlmine eye care is an ultra-modern eye clinic resident in the Garden City of Port Harcourt, with a highly trained excellent-driven team creating a culture of preventive eye care as well as corrective eye care, in order to reduce the rapid decline of clear vision in communities. <br /> <br /> Over the years, we have taken our place in ensuring excellent eye care solutions that are effective, affordable and sustainable are provided across various sectors and communities in Rivers State. <br /> <br /> It is our delight to serve you based on your eye care needs and preferences.
                        </p>


                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
                    <div className="rounded border border-1-gray-200 p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                        <Image
                            className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:h-full"
                            src={about}
                            alt=""
                        />
                    </div>

                    <div className="rounded border border-1-gray-200 p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                        <div className="flex items-center mb-1">
                            <h2 className="text-2xl font-bold sm:text-2xl mb-5">Our Core Values</h2>
                        </div>
                        <ol>
                            <li className="mb-4 flex text-base text-body-color">
                                <span
                                    className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                >
                                    1
                                </span>
                                Excellence
                            </li>
                            <li className="mb-4 flex text-base text-body-color">
                                <span
                                    className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                >
                                    2
                                </span>
                                Intergrity
                            </li>
                            <li className="mb-4 flex text-base text-body-color">
                                <span
                                    className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                >
                                    3
                                </span>
                                Teamwork
                            </li>
                            <li className="mb-4 flex text-base text-body-color">
                                <span
                                    className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                >
                                    4
                                </span>
                                Loyalty and Respect
                            </li>

                        </ol>
                    </div>

                    <div className="rounded border border-1-gray-200 p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                        <div className="flex items-center mb-1">
                            <h2 className="text-2xl font-bold sm:text-2xl mb-5">Our Vision</h2>
                        </div>
                        <p className="text-sm text-gray-900">
                            Providing efficient, fit for purpose and sustainable eye care solutions with innovative and up to date clinical practices, in a friendly and conducive environment.
                        </p>
                    </div>

                    <div className="rounded border border-1-gray-200 p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                        <div className="flex items-center mb-1">
                            <h2 className="text-2xl font-bold sm:text-2xl mb-5">Our Mision</h2>
                        </div>
                        <p className="text-sm text-gray-900">
                            To be the Hub of quality and excellent eye care delivery and become the first choice for eye care solutions in Nigeria.
                        </p>
                    </div>

                </div>

            </div>
            <hr className="border border-gray-200 mt-10" />

            <div className="mt-5 mx-auto md:max-w-full lg:max-w-screen-xl lg:px-8 gap-10 mb-16">
                <div className="flex flex-col  justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 ">
                        <div className="max-w-xl mb-6">

                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Why eye care?

                            </h2>

                            <div className="a mt-12">
                                <ol>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            1
                                        </span>
                                        Your eyes are important tools for the job you do right now, and so your job security is key.
                                    </li>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            2
                                        </span>
                                        Your family needs you in proper eye sight, don’t rob them off that opportunity.
                                    </li>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            3
                                        </span>
                                        80% of your child’s school work is presented visually, so we want them to keep excelling.
                                    </li>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            4
                                        </span>
                                        People who lose their vision later in life are 3 times more likely to be depressed, we don’t want you to join that statistics.
                                    </li>

                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            4
                                        </span>
                                        There are so many beautiful things life has to offer, and we want you to see and enjoy it all.
                                    </li>

                                </ol>
                            </div>

                        </div>
                        
                    </div>
                    <div className=" lg:w-1/2">
                        <iframe width="560" className="rounded-xl w-full h-96" height="315" src="https://www.youtube.com/embed/0-QxYRg5Gis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <hr className="border border-gray-200 mt-10" />

                <div className="flex flex-col mt-10 items-center justify-between lg:flex-row ">

                    <div className="w-full lg:w-1/2 ">
                        <Image
                            className="w-full rounded-lg shadow-lg lg:h-[60%] lg:w-[60%]"
                            src={eyefact}
                            alt=""
                        />

                    </div>

                    <div className="w-full mt-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">

                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Facts about your Eye

                            </h2>

                            <div className="a mt-12">
                                <ol>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            1
                                        </span>
                                        Myopia or Nearsightedness – Vision is clear for near but blurry for distance.
                                    </li>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            2
                                        </span>
                                        Hyperopia or Farsightedness – Vision for distance is clear but blurry close up.
                                    </li>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            3
                                        </span>
                                        Presbyopia – Inability to read small prints as a result of aging.
                                    </li>
                                    <li className="mb-4 flex text-base text-body-color">
                                        <span
                                            className="mr-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded-full bg-gray-600 text-sm text-white"
                                        >
                                            4
                                        </span>
                                        Astigmatism – Occurs when the clear front cover of the eye is irregularly shaped because of the curvature of the lens inside the eye causing blurred vision at various distances.
                                    </li>



                                </ol>
                            </div>

                        </div>
                        
                    </div>

                </div>


            </div>

            <hr className="border border-gray-200 mt-5" />


            <div className="justify-between mt-10 lg:flex lg:flex-row lg:gap-32">
                <div className="section1">
                    <div className="rounded border border-1-gray-200 lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                        <Image
                            className="inset-0 object-cover object-bottom w-full h-full rounded-xl shadow-lg lg:h-170"
                            src={product}
                            alt=""
                        />
                    </div>
                </div>
                <div className="section2 flex flex-col md:flex-row gap-10 mt-5 lg:flex lg:flex-row ">

                    <div className="rounded h-fit w-fit p-5 border border-1-gray-200 lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                        <div className="flex items-center mb-1">

                            <h2 className="text-2xl font-bold sm:text-2xl mb-5">Our Product</h2>
                        </div>
                        <div class="mb-12">
                            <ul>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    High quality frames
                                </li>
                                <li class="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Innovative lenses options
                                </li>
                                <li class="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Computer glasses (Cosmetics and Prescription)
                                </li>
                                <li class="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Sunglasses
                                </li>
                                <li class="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Classy and trendy designer frames
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded h-fit w-fit p-5 border border-1-gray-200 lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                        <div className="flex items-center mb-1">
                            <h2 className="text-2xl font-bold sm:text-2xl mb-5">Our Credibility</h2>
                           
                        </div>
                        <div class="">
                            <ul className="grid grid-cols-2">
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    AXA Mansard
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Anchor HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    AIICO Multishield HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Marina HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Health Partners HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Markfema HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Mediplan HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Princeton HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Reliance HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Springtide HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Veritas HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Alliance HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Allaenza HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Philips HMO
                                </li>
                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Clearline HMO
                                </li>

                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Clearline HMO
                                </li>

                                <li className="mb-4 flex text-base text-body-color">
                                    <span
                                        className="mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-indigo-600 text-base"
                                    >
                                    </span>
                                    Clearline HMO
                                </li>

                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default Identity;