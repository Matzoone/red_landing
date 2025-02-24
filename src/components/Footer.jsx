import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { RxTwitterLogo } from "react-icons/rx";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-14 px-16">
      <div className=" w-full container mx-auto flex flex-col items-start  md:flex-row justify-between  gap-4">
        <div className="w-1/3 text-right max-md:w-full">
          <h3 className="flex text-xl items-center font-bold text-red-500">
            <span>
              <img src={logo} alt="Red VPN Logo" className="w-10 h-10" />
            </span>
            <span className="bg-gradient-to-l from-red-700 to-red-300 text-transparent bg-clip-text">
              {" "}
              رد وی پی ان
            </span>
          </h3>
          <p className="text-gray-300 text-sm mt-2 leading-6 flex flex-wrap ">
            رد سرور با رویکرد اعتماد به مشتری، با در اختیار داشتن متنوع‌ترین
            سرور ها، از انواع آی‌پی‌های اقتصادی تا تجاری در سراسر کشور ایران
            آماده خدمت‌رسانی به مشتریان است.
          </p>
        </div>

        <div className="text-right flex flex-col space-y-2 pt-2 leading-10 max-md:leading-7">
          <p className="cursor-pointer hover:text-red-500 transition">
            درباره ما
          </p>
          <p className="cursor-pointer hover:text-red-500 transition">
            تماس با ما
          </p>
          <p className="cursor-pointer hover:text-red-500 transition">
            سوالات متداول
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-center max-md:hidden">
          <img src={logo} alt="Red VPN Logo" className="w-28 h-auto" />
        </div>
      </div>

      <div className="flex justify-center md:justify-start  space-x-4 text-gray-400 mt-5 max-md:w-full- max-md:justify-between">
        <LiaTelegramPlane className="text-xl ml-3 cursor-pointer hover:text-white" />
        <FaInstagram className="text-xl cursor-pointer hover:text-white" />
        <RxTwitterLogo className="text-xl cursor-pointer hover:text-white" />
        <FaWhatsapp className="text-xl ml-3 cursor-pointer hover:text-white" />
      </div>
      <div className="text-right text-gray-500 text-sm mt-6 border-t-2 border-gray-800 pt-4">
        تمامی حقوق این وب‌سایت متعلق به رد سرور می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;
