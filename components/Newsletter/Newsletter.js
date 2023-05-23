import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const Newsletter = () => {
    return (
    
        <div className="relative isolate overflow-hidden shadow-xl py-5 sm:py-8 lg:py-8 bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-base leading-8 text-gray-100">
                            Stay Up-to-Date with Our Newsletter: Crafting Eye-Catching Headers
                        </p>
                        
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-gray/5 px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-blue/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-black p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-gray-100">Weekly articles</dt>
                            <span className="mt-2 leading-7 text-gray-100 text-sm">
                                Stay current on Eye healthcare trends with our Weekly Article newsletter. Each week, our experts share a thought-provoking article.
                                </span>
                            </div>
                            <div className="flex flex-col items-start">
                            <div className="rounded-md bg-black p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                            <dt className="mt-4 font-semibold text-gray-100">No spam</dt>
                                <span className="mt-2 leading-7 text-gray-100 text-sm">
                                Our curated No Spam newsletter delivers the latest news and promotions, without cluttering your inbox.
                                </span>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
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

export default Newsletter;