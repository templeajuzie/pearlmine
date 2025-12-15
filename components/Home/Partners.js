import Image from "next/image";
import brand1 from "../../public/images/brand1.svg";
import brand2 from "../../public/images/brand2.svg";
import brand3 from "../../public/images/brand3.svg";
import brand4 from "../../public/images/brand4.svg";

const Partner = () => {
  return (
    <div className="bg-white mt-5">
      <div className="mx-auto max-w-7xl px-6 mt-5 lg:px-14 sm:px-6">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="flex flex-wrap gap-10 mt-5">
          <img
            className="col-span-2 max-h-9 w-full object-contain lg:col-span-1"
            src={brand1}
            alt="Transistor"
            width={108}
            height={25}
          />
          <img
            className="col-span-2 max-h-9 w-full object-contain lg:col-span-1"
            src={brand2}
            alt="Reform"
            width={108}
            height={25}
          />
          <img
            className="col-span-2 max-h-9 w-full object-contain lg:col-span-1"
            src={brand3}
            alt="Tuple"
            width={108}
            height={25}
          />
          <img
            className="col-span-2 max-h-7 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={brand4}
            alt="SavvyCal"
            width={108}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Partner;
