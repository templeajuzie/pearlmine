import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoimg from "./../../public/src/images/logoimage.png"


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Blog", href: "/blog" }, { name: "Services", href: "services" }, { name: "Team", href: "/team" }, { name: "FAQ", href: "/faq" }]

    return (
        <>
            <div className="sticky top-0 z-[22] border-gray-100">
                {/* className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100" */}

                <header className=" bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 border-b border-gray-100 inset-x-0 top-0 z-50 px-6 sm:px-7">
                    <nav className="flex items-center justify-between py-4" >
                        <div className="flex lg:flex-1 flex-row items-center gap-1">
                            <Link href="/" className="">

                                <Image
                                    className="h-14 w-auto"
                                    src={logoimg}
                                    alt=""
                                    height={60}
                                    width={80}
                                />

                            </Link>

                        </div>
                        <div className="lg:hidden xlg:hidden flex lg: border border-gray-400 rounded-lg">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-11 w-auto" aria-hidden="true" />
                            </button>
                        </div>
                        
                        <div className="hidden lg:flex gap-10 items-center lg:justify-end">
                            <div className="hidden lg:flex lg:gap-x-8">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className="text-base font-medium leading-6 text-gray-900">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <Link href="/contact" className=" py-3 px-5 w-fit text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                                Contact us <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <div className="a">

                                </div>
                                <div className="flex lg: border border-gray-400 rounded-lg">
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-11 w-auto" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <Link href="/contact" className=" rounded-lg bg-blue-600 py-3 px-2 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-4 xl:px-4">
                                            Contact us <span aria-hidden="true">&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
            </div>
        </>
    );
}

export default Navbar;
