// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { EyeDropperIcon, EyeIcon } from "@heroicons/react/24/outline";
import who from "../../public/src/images/blog1.jpg"
import Image from "next/image";

const Services = () => {


    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div
                    className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                    <div className="w-full mx-auto lg:flex lg:flex-col lg:mx-0 lg:text-left md:flex md:flex-row md:items-center md:gap-10">

                        <div className="a lg:w-full">
                            <h2 className="text-3xl font-bold sm:text-3xl my-5">What makes us special</h2>

                            <div className="section1 lg:mb-0 mb-8">
                                <div className="rounded border border-1-gray-200 lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                                    <Image
                                        className="inset-0 object-cover  object-bottom w-full h-56 rounded shadow-lg lg:h-170"
                                        src={who}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="b lg:w-full md:w-[50%]">
                            <p className="mt-4 text-gray-600">
                                From comprehensive eye exams to advanced treatments for complex eye conditions, our experienced and compassionate team of eye care professionals is dedicated to providing the highest quality care in a warm and welcoming environment.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm  hover:border-gray-200 bg-indigo-100 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="mt-2 font-bold">Eye Check</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Comprehensive eye test and optical services.
                            </p>
                        </div>

                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-100 hover:bg-indigo-100 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="mt-2 font-bold">Contact lens fixing</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Contact lens dispensing and fitting.
                            </p>
                        </div>

                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:bg-indigo-100 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="mt-2 font-bold">Pediatric Care</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Pediatric patient care and management.
                            </p>
                        </div>

                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:bg-indigo-100 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="mt-2 font-bold">Eye Screnning</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Glaucoma and cataract screening.
                            </p>
                        </div>

                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:bg-indigo-100 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="mt-2 font-bold">Eye sensitization</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Eye health sensitization and promotion.
                            </p>
                        </div>

                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:bg-indigo-100 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="mt-2 font-bold">Eye Services</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Occupation eye care services.
                            </p>
                        </div>

                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:bg-indigo-100 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >
                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>

                            <h2 className="mt-2 font-bold">Optical repairs</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Optical accessories and repairs.
                            </p>
                        </div>

                        <div
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:bg-indigo-100 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

                        >

                            <div className="eye inline-block rounded-lg bg-gray-800 p-3">
                                <EyeIcon className="h-6 w-6 text-white" />
                            </div>



                            <h2 className="mt-2 font-bold">Free eye tests</h2>

                            <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Free eye tests every first Friday of the month.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Services;