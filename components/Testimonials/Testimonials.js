import Image from "next/image";
import testimg1 from "../../public/images/test3.jpg";
import testimg2 from "../../public/images/test1.jpg";
import testimg3 from "../../public/images/test2.jpg";
import testimg4 from "../../public/images/test3.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
        <div className=" mb-10 lg:max-w-xl lg:text-left sm:text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Testimonials</h2>
          <p className="text-base text-gray-700 md:text-lg">
            Discover the Positive Experiences of Our Customers through their
            testimonials.
          </p>
        </div>
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                I received excellent eye care services from Pearlmine Eye Care.
                Dr. Onyinyechi was professional and knowledgeable, and the staff
                was friendly and helpful. I highly recommend this clinic.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={testimg1}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Bimpe Adekunle</p>
                <p className="mt-1">Banker</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Dr. Joy at Pearlmine Eye Care was fantastic. She conducted a
                thorough examination and took the time to answer all my
                questions. {`I'`}m grateful for the great service I received.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={testimg2}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Emeka Okorie</p>
                <p className="mt-1">Entrepreneur</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                The staff at Pearlmine Eye Care was warm and welcoming, and Dr.
                Onyinyechi was patient and professional. {`I'`}m happy to say
                that my new glasses have made a huge difference in my vision.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={testimg1}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Tunde Adeniyi</p>
                <p className="mt-1">Sales Representative</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                I had a great experience at Pearlmine Eye Care. The clinic is
                clean and modern, and the staff is friendly and efficient. Dr.
                Joy was excellent and provided me with top-notch eye care
                services.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={testimg3}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Grace Obi</p>
                <p className="mt-1">Lawyer</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                The team at Pearlmine Eye Care went above and beyond to help me
                with my vision needs. They were patient and understanding and
                provided me with the best possible care.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={testimg4}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Ahmed Ibrahim</p>
                <p className="mt-1">Engineer</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                I had an emergency situation with my eyes and was able to get an
                appointment at Pearlmine Eye Care right away. Dr. Onyinyechi was
                quick to diagnose the issue and provided me with excellent care.{" "}
                {`I'`}m thankful for their expertise and professionalism.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={testimg1}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Chika Ikenna</p>
                <p className="mt-1">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
