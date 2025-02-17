import logo from "../assets/logo.svg";
import heiro from "../assets/hiro.svg";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#3823db] w-full sticky top-0 z-10">
        <div className="container mx-auto flex justify-center items-center sticky top-0 z-10 w-full">
          <h4 className="p-5">30% تخفیف تا پایان روز</h4>
        </div>
      </div>
      <header className="text-white shadow-md ">
        <div
          className="w-full h-[400px]"
          style={{
            backgroundImage: `url(${heiro})`,
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full">
            <div className="max-w-7xl mx-auto p-8 flex justify-center items-center">
              <div className="max-md:hidden flex items-center max-md:items-start gap-2 absolute right-4">
                <img src={logo} alt="logo" className="w-11 h-11" />
                <span className="text-2xl text-red-500"> رد وی پی ان</span>
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
            {isMenuOpen && (
              <div className="md:hidden bg-gray-800 p-8 rounded-lg absolute top-20 right-4">
                <button
                  className=" p-2 rounded-full absolute top-1 left-1 text-gray-300 hover:text-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✖
                </button>
                <ul className="space-y-4 text-lg leading-10 mt-4">
                  <li>
                    <a
                      href="#robot"
                      className="text-gray-300 hover:text-gray-50 block"
                    >
                      ربات فروش تلگرام
                    </a>
                  </li>
                  <li>
                    <a
                      href="#telegram"
                      className="text-gray-300 hover:text-gray-50 block"
                    >
                      کانال تلگرام
                    </a>
                  </li>
                  <li>
                    <a
                      href="#app"
                      className="text-gray-300 hover:text-gray-50 block"
                    >
                      دانلود اپلیکیشن
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-300 hover:text-gray-50 block"
                    >
                      تماس با ما
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
