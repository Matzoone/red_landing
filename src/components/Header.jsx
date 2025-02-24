import logo from "../assets/logo.svg";
import heiro from "../assets/hiro.svg";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MenuBar from "./MenuBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#221681] w-full sticky top-0 z-10">
        <div className="container mx-auto flex justify-center items-center sticky top-0 z-10 w-full">
          <h4 className="p-3 text-gray-50">30% تخفیف تا پایان روز</h4>
        </div>
      </div>
      <header className="text-white shadow-md ">
        <div
          className="w-full h-[520px] max-md:h[300px]"
          style={{
            backgroundImage: `url(${heiro})`,
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full">
            <div className="w-full mx-auto p-8 flex justify-center items-center bg-black-300/10 backdrop-blur-sm">
              <div className="max-md:hidden flex items-center max-md:items-start gap-2 absolute right-4">
                <img src={logo} alt="logo" className="w-11 h-11" />
                <span className="text-2xl bg-gradient-to-l from-red-700 to-red-300 text-transparent bg-clip-text"> رد وی پی ان</span>
              </div>

              {!isMenuOpen && (
                <button
                  className="md:hidden bg-gray-500 text-white p-2 rounded-lg absolute right-4"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <IoMdMenu size={28} />
                </button>
              )}

              <ul className="max-md:hidden flex space-x-8 rtl:space-x-reverse text-lg">
                <li>
                  <a href="#robot" className="hover:text-gray-300">
                    ربات فروش تلگرام
                  </a>
                </li>
                <li>
                  <a href="#telegram" className="hover:text-gray-300">
                    کانال تلگرام
                  </a>
                </li>
                <li>
                  <a href="#app" className="hover:text-gray-300">
                    دانلود اپلیکیشن
                  </a>
                </li>
                <li>
                  <a href="#app" className="hover:text-gray-300">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>

            <div className="mx-44 my-16 max-md:m-8 bg-gray-300/10 backdrop-blur-md rounded-2xl p-8">
              <div className="flex flex-col items-center text-center leading-8">
                <p>مفتخریم به اینکه بیش از 7,000 کاربر به ما اعتماد کرده اند</p>
                <p className="text-3xl py-6 font-extrabold bg-gradient-to-l from-red-700 to-red-300 text-transparent bg-clip-text">
                  رد وی پی ان{" "}
                </p>
                <p className="max-md:hidden">
                  با سرعت بالا، حریم خصوصی قدرتمند، و دسترسی به تمامی محتواهای
                  جهانی، تجربه ای بی نقص با پایین ترین قیمت{" "}
                </p>
              </div>
              <div className="flex justify-center gap-10 mt-8 max-md:flex-col max-md:items-center">
                <button className="bg-red-600 py-2 px-4 rounded-3xl ">
                  تست رایگان اپ اختصاصی رد
                </button>
                <button className="py-1 px-4 border border-gray-100 rounded-3xl">
                  تست رایگان سرورها
                </button>
              </div>
            </div>
            {isMenuOpen && <MenuBar setIsMenuOpen={setIsMenuOpen} />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
