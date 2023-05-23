import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const Services = () => {

    const features = [
        {
            name: 'Eye Check',
            description:
                'Our clinic offers comprehensive eye tests and personalized optical services for optimal vision and eye health. From exams to glasses, contact lenses, and more, we have you covered.',
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Contact lens fixing',
            description:
                'Get expert contact lens dispensing and personalized fitting services for comfortable and clear vision. Our experienced optometrists ensure the perfect fit for your eyes and lifestyle.',
            icon: LockClosedIcon,
        },
        {
            name: 'Pediatric Care',
            description:
                'Our dedicated team specializes in providing exceptional care for childrens eye health.From routine check- ups to specialized treatments',
            icon: ArrowPathIcon,
        },
        {
            name: 'Eye Screnning',
            description:
                'We offer reliable screening services for glaucoma and cataracts, two common eye conditions that can affect vision. Early detection is crucial, and our advanced screening techniques help identify potential issues',
            icon: FingerPrintIcon,
        },
        {
            name: 'Eye sensitization',
            description:
                'Promoting eye health awareness is our mission. Through educational campaigns and community outreach programs, we aim to raise awareness about the importance of regular eye exams.',
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Eye Services',
            description:
                'We provide specialized eye care services tailored to the specific needs of professionals in various industries. Our occupational eye care programs focus on preventive measures.',
            icon: LockClosedIcon,
        },
        {
            name: 'Optical repairs',
            description:
                'Our clinic offers a wide range of high-quality optical accessories, including frames, lenses, and contact lens solutions. We also provide reliable repairs for eyeglasses, ensuring that your favorite pair can be restored.',
            icon: ArrowPathIcon,
        },
        {
            name: 'Free eye tests',
            description:
                'Take advantage of our initiative to provide free eye tests on the first Friday of every month, allowing everyone to prioritize their eye health without financial barriers. Dont miss this opportunity.',
            icon: FingerPrintIcon,
        },
    ]

    return (
        <div className="bg-white py-4 lg:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to know
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        From comprehensive eye exams to advanced treatments for complex eye conditions, our experienced and compassionate team of eye care professionals is dedicated to providing the highest quality care in a warm and welcoming environment.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-full">
                    <dl className="grid max-w-auto grid-cols-1 gap-x-8 gap-y-10 lg:max-w-auto lg:grid-cols-3 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative p-8 shadow-xl rounded-lg">
                                <dt className="text-base flex flex-row gap-4 items-center mb-5 font-semibold leading-7 text-gray-900">
                                    <div className=" flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7  text-gray-600 ">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Services;
