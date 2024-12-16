import Link from "next/link";
import { FaUser, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

export default function LightNavbar() {
  return (
    // <div className="bg-white text-[#252B42] w-[1437px] h-[58px] shadow-md">
    <div className="bg-white flex items-center  w-full h-[58px] shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Brand Name */}
        <div className="text-lg text-[#252B42] font-bold font-montserrat">
          <Link href="/">Bandage</Link>
        </div>

        {/* Middle Links + Dropdown */}
        <div className="flex items-center space-x-6 ">
          <div className="text-[#454e70] flex space-x-4 w-[361px] h-[25px] text-xs">
            <Link href="/" className="flex items-center hover:text-gray-600">
              Home
            </Link>
            <Link
              href="/shop"
              className="flex items-center hover:text-gray-600"
            >
              Shop <AiFillCaretDown className="ml-1" />
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-600 flex items-center"
            >
              About
            </Link>
            <Link href="/#" className="hover:text-gray-600 flex items-center">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-600 flex items-center"
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="hover:text-gray-600 flex items-center"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Right Icons + Login/Register */}
        <div className="flex items-center space-x-6 text-xs text-[#23A6F0]">
          {/* Login/Register */}
          <div className="flex items-center space-x-2">
            <FaUser />
            <Link href="/login" className="hover:text-gray-600">
              Login /
            </Link>
            <Link href="/signup" className="hover:text-gray-600">
              Register
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/#" className="hover:text-gray-600">
              <FaSearch />
            </Link>
            <Link href="/#" className="hover:text-gray-600">
              <FaShoppingCart />
            </Link>
            <Link href="/#" className="hover:text-gray-600">
              <FaHeart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
