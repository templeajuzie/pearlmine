const FAQComp = () => {
    return (


        <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div
                className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16"
            >
                <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                    <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>

                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                        aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                        Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                        Obcaecati, autem.
                    </p>

                    <a
                        href="#"
                        className="mt-8 inline-block rounded-xl bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring "
                    >
                        Lets Talk
                    </a>
                </div>

                <div className="space-y-4 w-fit">
                    <details
                        className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                        open
                    >
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h2 className="font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing?
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 sm:leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                            earum similique!
                        </p>
                    </details>

                    <details
                        className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h2 className="font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing?
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                            earum similique!
                        </p>
                    </details>

                </div>
            </div>
        </div>

    );
}

export default FAQComp;