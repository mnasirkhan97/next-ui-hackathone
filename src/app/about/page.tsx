import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Navbar */}

      {/* About Us Section */}
      <section className="py-16 px-6 lg:px-32 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section (Image) */}
          <div className="relative flex justify-center">
            <Image
              src="/images/about-pic.jpg"
              alt="Shopping Lady"
              width={1440}
              height={719}
              className="rounded-lg"
            />
          </div>

          {/* Right Section (Content) */}
          <div>
            <h3 className="text-blue-500 uppercase font-semibold mb-2">
              About Company
            </h3>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small
              scale&apos;s.
            </p>

            {/* Section 1 */}
            <h5 className="text-xl text-gray-800">SUMMER 2020</h5>

            {/* Section 2 */}
            <h1 className="text-3xl font-bold text-gray-800 mt-4">
              Part of the Neural Universe
            </h1>

            {/* Section 3 */}
            <h4 className="text-xl font-light text-gray-600 mt-4">
              We know how large objects will act, but things on a small scale.
            </h4>

            {/* Section 4 (Buttons) */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300">
                BUY NOW
              </button>
              <button className="border border-green-500 text-green-500 px-6 py-3 rounded hover:bg-green-500 hover:text-white transition duration-300">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="bg-gray-100 py-12 px-6 lg:px-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-8">
          {[
            { title: "15K", subtitle: "Happy Customers" },
            { title: "150K", subtitle: "Monthly Visitors" },
            { title: "15", subtitle: "Countries Worldwide" },
            { title: "100+", subtitle: "Top Partners" },
          ].map((stat, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-gray-800">{stat.title}</h2>
              <p className="text-gray-600">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-6 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="bg-[#2A7CC7] text-white p-8 rounded-lg flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold">Work With Us</h3>
            <h2 className="text-3xl font-bold mt-2">
              Now Let&apos;s Grow Yours
            </h2>
            <p className="text-white text-opacity-80 mt-4">
              The gradual accumulation of information about atomic and small
              scale behaviour...
            </p>
            <button className="bg-white text-blue-500 px-6 py-3 mt-6 rounded hover:bg-gray-100">
              Get Started
            </button>
          </div>

          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/pink-lady.png"
              alt="Feature Image"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

// import React from "react";
// import Image from "next/image";

// const About: React.FC = () => {
//   return (
//     <div className="bg-white font-sans">
//       {/* Navbar */}

//       {/* About Us Section */}
//       <section className="py-16 px-6 lg:px-32 text-center lg:text-left">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left Section (Image) */}
//           <div className="relative flex justify-center">
//             <Image
//               src="/images/about-pic.jpg"
//               alt="Shopping Lady"
//               width={1440}
//               height={719}
//               className="rounded-lg"
//             />
//           </div>

//           {/* Right Section (Content) */}
//           <div>
//             <h3 className="text-blue-500 uppercase font-semibold mb-2">
//               About Company
//             </h3>
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
//             <p className="text-gray-600 mb-6">
//               We know how large objects will act, but things on a small scale.
//             </p>

//             {/* Section 1 */}
//             <h5 className="text-xl text-gray-800">SUMMER 2020</h5>

//             {/* Section 2 */}
//             <h1 className="text-3xl font-bold text-gray-800 mt-4">
//               Part of the Neural Universe
//             </h1>

//             {/* Section 3 */}
//             <h4 className="text-xl font-light text-gray-600 mt-4">
//               We know how large objects will act, but things on a small scale.
//             </h4>

//             {/* Section 4 (Buttons) */}
//             <div className="mt-6 flex space-x-4">
//               <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300">
//                 BUY NOW
//               </button>
//               <button className="border border-green-500 text-green-500 px-6 py-3 rounded hover:bg-green-500 hover:text-white transition duration-300">
//                 READ MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Sections */}
//       <section className="bg-gray-100 py-12 px-6 lg:px-32">
//         <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-8">
//           {[
//             { title: "15K", subtitle: "Happy Customers" },
//             { title: "150K", subtitle: "Monthly Visitors" },
//             { title: "15", subtitle: "Countries Worldwide" },
//             { title: "100+", subtitle: "Top Partners" },
//           ].map((stat, index) => (
//             <div key={index}>
//               <h2 className="text-3xl font-bold text-gray-800">{stat.title}</h2>
//               <p className="text-gray-600">{stat.subtitle}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="py-16 px-6 lg:px-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
//           <div className="bg-[#2A7CC7] text-white p-8 rounded-lg flex flex-col justify-between h-full">
//             <h3 className="text-xl font-semibold">Work With Us</h3>
//             <h2 className="text-3xl font-bold mt-2">Now Let's Grow Yours</h2>
//             <p className="text-white text-opacity-80 mt-4">
//               The gradual accumulation of information about atomic and small
//               scale behaviour...
//             </p>
//             <button className="bg-white text-blue-500 px-6 py-3 mt-6 rounded hover:bg-gray-100">
//               Get Started
//             </button>
//           </div>

//           <div className="flex justify-center items-center h-full">
//             <Image
//               src="/images/pink-lady.png"
//               alt="Feature Image"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
