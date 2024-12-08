import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function DarkNavbar() {
  return (
    <div className="bg-[#252B42] text-white w-full h-[58px] flex items-center">
      {/* // <div className="bg-[#252B42] text-white w-[1437px]l h-[58px] flex items-center"> */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Left Div */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span className="text-sm">(255)555-0118</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span className="text-sm">michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center Div */}
        <div className="text-center">
          <h6 className="font-montserrat text-sm">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        {/* Right Div */}
        <div className="flex items-center space-x-4">
          <h6 className="text-sm font-semibold">Follow us</h6>
          <div className="flex space-x-3">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-white hover:text-gray-400"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
