import React from "react";
import Image from "next/image";

function ProductCards10() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      {/* Parent Div */}
      <div className="space-y-8">
        {/* First Row */}
        <div className="flex flex-col space-y-4">
          {/* First Section */}
          <div className="text-center">
            <h4 className="text-lg font-montserrat font-bold text-gray-800">
              Featured Products
            </h4>
          </div>

          {/* Second Section */}
          <div className="text-center">
            <h2 className="text-2xl font-montserrat font-bold text-gray-800">
              BESTSELLER PRODUCTS
            </h2>
          </div>

          {/* Third Section */}
          <div className="text-center">
            <h4 className="text-lg font-montserrat text-gray-600">
              Problems trying to resolve the conflict between
            </h4>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="space-y-4">
              {/* Image */}
              <div className="relative w-full h-[550px]">
                <Image
                  src={`/images/product-${item}.png`}
                  alt={`Product ${item}`}
                  layout="fill"
                  objectFit="cover"
                  // className="rounded-lg"
                />
              </div>

              {/* Details */}
              <div className="space-y-2">
                {/* Title */}
                <h2 className="text-lg font-montserrat font-bold text-gray-800">
                  Graphic Design
                </h2>

                {/* Subtitle */}
                <h4 className="text-sm font-montserrat text-gray-600">
                  English Department
                </h4>

                {/* Pricing */}
                <div className="text-md font-montserrat flex items-center space-x-2">
                  <span className="line-through text-gray-400">$16.48</span>
                  <span className="text-green-500 font-bold">$6.48</span>
                </div>

                {/* Color Options */}
                <div className="flex space-x-2">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-black rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[5, 6, 7, 8].map((item) => (
            <div key={item} className="space-y-4">
              {/* Image */}
              <div className="relative w-full h-[550px]">
                <Image
                  src={`/images/product-${item}.png`}
                  alt={`Product ${item}`}
                  layout="fill"
                  objectFit="cover"
                  // className="rounded-lg"
                />
              </div>

              {/* Details */}
              <div className="space-y-2">
                {/* Title */}
                <h2 className="text-lg font-montserrat font-bold text-gray-800">
                  Graphic Design
                </h2>

                {/* Subtitle */}
                <h4 className="text-sm font-montserrat text-gray-600">
                  English Department
                </h4>

                {/* Pricing */}
                <div className="text-md font-montserrat flex items-center space-x-2">
                  <span className="line-through text-gray-400">$16.48</span>
                  <span className="text-green-500 font-bold">$6.48</span>
                </div>

                {/* Color Options */}
                <div className="flex space-x-2">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-black rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCards10;

// import React from "react";
// import Image from "next/image";

// function ProductCards10() {
//   return (
//     <div className="container mx-auto py-12 px-4 md:px-8">
//       {/* Parent Div */}
//       <div className="space-y-8">
//         {/* First Row */}
//         <div className="flex justify-between items-center">
//           {/* First Section */}
//           <div className="text-left">
//             <h4 className="text-lg font-montserrat font-bold text-gray-800">
//               Featured Products
//             </h4>
//           </div>

//           {/* Second Section */}
//           <div className="text-center">
//             <h2 className="text-2xl font-montserrat font-bold text-gray-800">
//               BESTSELLER PRODUCTS
//             </h2>
//           </div>

//           {/* Third Section */}
//           <div className="text-right">
//             <h4 className="text-lg font-montserrat text-gray-600">
//               Problems trying to resolve the conflict between
//             </h4>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {[1, 2, 3, 4].map((item) => (
//             <div key={item} className="space-y-4">
//               {/* Image */}
//               <div className="relative w-full h-[200px]">
//                 <Image
//                   src={`/images/product-${item}.png`}
//                   alt={`Product ${item}`}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>

//               {/* Details */}
//               <div className="space-y-2">
//                 {/* Title */}
//                 <h2 className="text-lg font-montserrat font-bold text-gray-800">
//                   Graphic Design
//                 </h2>

//                 {/* Subtitle */}
//                 <h4 className="text-sm font-montserrat text-gray-600">
//                   English Department
//                 </h4>

//                 {/* Pricing */}
//                 <div className="text-md font-montserrat flex items-center space-x-2">
//                   <span className="line-through text-gray-400">$16.48</span>
//                   <span className="text-green-500 font-bold">$6.48</span>
//                 </div>

//                 {/* Color Options */}
//                 <div className="flex space-x-2">
//                   <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
//                   <span className="w-4 h-4 bg-green-500 rounded-full"></span>
//                   <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
//                   <span className="w-4 h-4 bg-black rounded-full"></span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Third Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {[5, 6, 7, 8].map((item) => (
//             <div key={item} className="space-y-4">
//               {/* Image */}
//               <div className="relative w-full h-[200px]">
//                 <Image
//                   src={`/images/product-${item}.png`}
//                   alt={`Product ${item}`}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>

//               {/* Details */}
//               <div className="space-y-2">
//                 {/* Title */}
//                 <h2 className="text-lg font-montserrat font-bold text-gray-800">
//                   Graphic Design
//                 </h2>

//                 {/* Subtitle */}
//                 <h4 className="text-sm font-montserrat text-gray-600">
//                   English Department
//                 </h4>

//                 {/* Pricing */}
//                 <div className="text-md font-montserrat flex items-center space-x-2">
//                   <span className="line-through text-gray-400">$16.48</span>
//                   <span className="text-green-500 font-bold">$6.48</span>
//                 </div>

//                 {/* Color Options */}
//                 <div className="flex space-x-2">
//                   <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
//                   <span className="w-4 h-4 bg-green-500 rounded-full"></span>
//                   <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
//                   <span className="w-4 h-4 bg-black rounded-full"></span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCards10;
