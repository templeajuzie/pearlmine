import Image from "next/image";
import team1 from "../../public/src/images/team1.jpg";
import team2 from "../../public/src/images/team2.jpg";
import team3 from "../../public/src/images/team3.jpg";
import team4 from "../../public/src/images/team4.jpg";
import Link from "next/link";

const Team = () => {

    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            image: {team4},
        },

        {
            name: 'Peter Samuel',
            role: 'Co-Founder / CEO',
            image: { team1 }
        },

        {
            name: 'George Smith',
            role: 'Co-Founder / CEO',
            image: { team2 }
        },

        {
            name: 'Leslie Cage',
            role: 'Co-Founder / CEO',
            image: { team3 }
        },

        {
            name: 'Henry Alexander',
            role: 'Co-Founder / Sales Manager',
            image: { team4 }
        },
        
    ]


    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <span class="mb-2 block text-lg font-semibold text-primary">
                        Our Team
                    </span>
                    <h2 className="text-3xl font-bold sm:text-4xl">Meet Our Team</h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium.
                    </p>
                </div>

                <section class="pt-6 pb-10 lg:pt-[10px] lg:pb-10">
                    <div class="container mx-auto">

                        <div class="-mx-4 flex flex-wrap justify-center">
                            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                                <div class="mx-auto mb-10 w-full max-w-[370px]">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={team1}
                                            alt="image"
                                            class="w-full"
                                        />
                                        <div class="absolute bottom-5 left-0 w-full text-center">
                                            <div
                                                class="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
                                            >
                                                <h3 class="text-base font-semibold text-dark">
                                                    Coriss Ambady
                                                </h3>
                                                <p class="text-sm text-body-color">Web Developer</p>
                                                <div>
                                                    <span class="absolute left-0 bottom-0">
                                                        <svg
                                                            width="61"
                                                            height="30"
                                                            viewBox="0 0 61 30"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="16"
                                                                cy="45"
                                                                r="45"
                                                                fill="#13C296"
                                                                fill-opacity="0.11"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span class="absolute top-0 right-0">
                                                        <svg
                                                            width="20"
                                                            height="25"
                                                            viewBox="0 0 20 25"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="0.706257"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                                <div class="mx-auto mb-10 w-full max-w-[370px]">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={team2}
                                            alt="image"
                                            class="w-full"
                                        />
                                        <div class="absolute bottom-5 left-0 w-full text-center">
                                            <div
                                                class="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
                                            >
                                                <h3 class="text-base font-semibold text-dark">
                                                    Glorius Cristian
                                                </h3>
                                                <p class="text-sm text-body-color">App Developer</p>
                                                <div>
                                                    <span class="absolute left-0 bottom-0">
                                                        <svg
                                                            width="61"
                                                            height="30"
                                                            viewBox="0 0 61 30"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="16"
                                                                cy="45"
                                                                r="45"
                                                                fill="#13C296"
                                                                fill-opacity="0.11"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span class="absolute top-0 right-0">
                                                        <svg
                                                            width="20"
                                                            height="25"
                                                            viewBox="0 0 20 25"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="0.706257"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                                <div class="mx-auto mb-10 w-full max-w-[370px]">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={team3}
                                            alt="image"
                                            class="w-full"
                                        />
                                        <div class="absolute bottom-5 left-0 w-full text-center">
                                            <div
                                                class="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
                                            >
                                                <h3 class="text-base font-semibold text-dark">
                                                    Jackie Sanders
                                                </h3>
                                                <p class="text-sm text-body-color">UI/UX Designer</p>
                                                <div>
                                                    <span class="absolute left-0 bottom-0">
                                                        <svg
                                                            width="61"
                                                            height="30"
                                                            viewBox="0 0 61 30"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="16"
                                                                cy="45"
                                                                r="45"
                                                                fill="#13C296"
                                                                fill-opacity="0.11"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span class="absolute top-0 right-0">
                                                        <svg
                                                            width="20"
                                                            height="25"
                                                            viewBox="0 0 20 25"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="0.706257"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
                                <div class="mx-auto mb-10 w-full max-w-[370px]">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <Image
                                            src={team4}
                                            alt="image"
                                            class="w-full"
                                        />
                                        <div class="absolute bottom-5 left-0 w-full text-center">
                                            <div
                                                class="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
                                            >
                                                <h3 class="text-base font-semibold text-dark">
                                                    Nikolas Brooten
                                                </h3>
                                                <p class="text-sm text-body-color">Sales Manager</p>
                                                <div>
                                                    <span class="absolute left-0 bottom-0">
                                                        <svg
                                                            width="61"
                                                            height="30"
                                                            viewBox="0 0 61 30"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="16"
                                                                cy="45"
                                                                r="45"
                                                                fill="#13C296"
                                                                fill-opacity="0.11"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span class="absolute top-0 right-0">
                                                        <svg
                                                            width="20"
                                                            height="25"
                                                            viewBox="0 0 20 25"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="0.706257"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="24.3533"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 24.3533)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="18.6624"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 18.6624)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="12.9717"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 12.9717)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="7.28077"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 7.28077)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="0.706257"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 0.706257 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="6.39669"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 6.39669 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="12.0881"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 12.0881 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="17.7785"
                                                                cy="1.58989"
                                                                r="0.646687"
                                                                transform="rotate(-90 17.7785 1.58989)"
                                                                fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Team;