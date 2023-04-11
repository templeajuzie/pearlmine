import Image from "next/image";
import Link from "next/link";
import pic1 from "../../public/src/images/blog1.jpg"

const Why = () => {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 gap-10 mb-16">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
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
                    {/* <div className="flex flex-col items-left md:flex-col ">
                        <h2 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none mt-6">How often should you check your eyes?</h2>
                        <p className="mt-2 text-gray-600 lg:w-[76%]">If you already have an underlying eye condition, twice a year is recommended, otherwise, once a year is perfect for a routine eye check.</p>
                    </div> */}
                </div>
                <div className="relative lg:w-1/2">
                    <Image
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={pic1}
                        alt=""
                    />
                    <Link
                        href="/"
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                    >
                        <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                            <svg
                                className="w-10 text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between lg:flex-row lg:mt-20">
                <div className="relative lg:w-1/2 ">
                    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 ">
                        <div className="flex items-start sm:gap-8">
                            <div>
                                <strong
                                    className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                                >
                                    Facts about your Eye
                                </strong>

                                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                    <a href="" className="hover:underline"> Some Interesting the Eye </a>
                                </h3>

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



                                {/* <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>

                                        <p className="text-xs font-medium">48:32 minutes</p>
                                    </div>

                                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                    <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                        Featuring <a href="#" className="underline hover:text-gray-700">Barry</a>,
                                        <a href="#" className="underline hover:text-gray-700">Sandra</a> and
                                        <a href="#" className="underline hover:text-gray-700">August</a>
                                    </p>
                                </div> */}
                            </div>

                            <div
                                className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                                aria-hidden="true"
                            >
                                <div className="flex items-center gap-1">
                                    <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                    <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                    <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                    <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                    <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                </div>
                            </div>


                        </div>
                    </article>

                </div>

                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">

                        <div className="flex flex-col items-left md:flex-col mt-10">
                            <h2 className="max-w-lg mb-2 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none mt-6">How often should you check your eyes?</h2>
                            <p className="mt-2 text-gray-600 lg:w-[76%]">If you already have an underlying eye condition, twice a year is recommended, otherwise, once a year is perfect for a routine eye check.</p>
                        </div>

                        <div className="a mt-12">

                        </div>

                    </div>

                </div>
                
            </div>


        </div>

    );
}

export default Why;