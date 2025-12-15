import Image from "next/image";
import Blog1 from "../../public/images/blog1.jpg";
import Blog2 from "../../public/images/blog2.jpg";
import Blog3 from "../../public/images/blog3.jpg";

const BlogComp = () => {
  return (
    <>
      <div className=" pb-10 lg:py-[80px] lg:pb-20 lg:px-16">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px] rounded-lg border border-gray-100 shadow-sm">
                <div className=" overflow-hidden rounded">
                  <img src={Blog3} alt="image" className="w-full" />
                </div>
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                  </a>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>

                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition group-hover:translate-x-0.5"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px] rounded-lg border border-gray-100 shadow-sm">
                <div className=" overflow-hidden rounded">
                  <img src={Blog1} alt="image" className="w-full" />
                </div>
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                  </a>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>

                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition group-hover:translate-x-0.5"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px] rounded-lg border border-gray-100 shadow-sm">
                <div className=" overflow-hidden rounded">
                  <img src={Blog2} alt="image" className="w-full" />
                </div>
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="text-lg font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                  </a>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>

                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition group-hover:translate-x-0.5"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
