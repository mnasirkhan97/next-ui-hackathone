import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[716px]">
        <Image
          src="/images/shop-hero-1-product-slide-1.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0">
          <div
            className="absolute"
            style={{
              left: "197.5px",
              top: "250px",
            }}
          >
            <div className="w-full max-w-[1044px] h-auto px-4 md:px-8 flex flex-col justify-center space-y-4">
              <div className="text-left space-y-4 font-montserrat">
                <h5 className="text-xs md:text-sm lg:text-base text-white">
                  SUMMER 2020
                </h5>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
                  NEW COLLECTION
                </h1>

                <h4 className="text-sm md:text-md lg:text-lg text-white leading-relaxed">
                  We Know how large objects will act, <br /> but things on a
                  small scale.
                </h4>

                <button className="mt-4 bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-600 transition duration-200">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
