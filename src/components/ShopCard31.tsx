import React from "react";
import Image from "next/image";

function ShopCard31() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      {/* Parent Div */}
      <div className="space-y-8">
        {/* First Row */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            EDITOR PICK
          </h2>
          <p className="text-md md:text-lg text-gray-600">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* First Column */}
          <div className="relative w-full h-[300px] md:h-[400px] mx-auto">
            <Image
              src="/images/filter.png"
              alt="Single Image"
              layout="fill"
              // objectFit="cover"
            />
          </div>

          {/* Second Column */}
          <div className="relative w-[240px] h-[500px] md:h-[400px] mx-auto">
            <Image
              src="/images/media-cover.png"
              alt="Second Column Image"
              layout="fill"
              // height={500}
              // width={240}
              // objectFit="cover"
            />
          </div>

          {/* Third Column */}
          <div className="grid grid-rows-2 gap-4">
            {/* Upper Image */}
            <div className="relative w-[239px] h-[242px] md:h-[200px]">
              <Image
                src="/images/media-cover1.png"
                alt="Upper Image"
                layout="fill"
                // objectFit="cover"
              />
            </div>

            {/* Lower Image */}
            <div className="relative w-[239px] h-[242px] md:h-[200px]">
              <Image
                src="/images/media-cover2.png"
                alt="Lower Image"
                layout="fill"
                // objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard31;
