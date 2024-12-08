import React from "react";
import Image from "next/image";

function ContainerFluid() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-8">
      {/* Left Side with Image */}
      <div className="flex-1">
        <Image
          src="/images/asian-woman-man-with-winter-clothes.png" // Replace with your image path
          alt="Main Image"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Right Side with Text and Buttons */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h5 className="text-lg font-bold text-gray-700">SUMMER 2020</h5>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-black">
            Part of the Neural Universe
          </h1>
        </div>

        <div>
          <h4 className="text-xl font-light text-gray-600">
            We know how large objects will act, but things on a small scale.
          </h4>
        </div>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-green-600 text-white rounded-md">
            BUY NOW
          </button>
          <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-md">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContainerFluid;

// import React from "react";

// function ContainerFluid() {
//   return <div>container-fluid</div>;
// }

// export default ContainerFluid;
