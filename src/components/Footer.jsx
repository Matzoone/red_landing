import "../index.css";
import icon from "../assets/icon.png";
import icon1 from "../assets/icon (1).png";
import icon2 from "../assets/icon (2).png";

const Footer = () => {
  return (
    <footer className="footer text-white ">
      <div className="container mx-auto w-4/5 my-6">
        <div className="w-full flex flex-col md:flex-row justify-between items-center p-4 border border-gray-600 rounded-xl gap-6">
          <div className="flex items-center md:w-1/3 justify-center md:justify-start text-center md:text-right">
            <div className="flex items-center gap-4">
              <img src={icon} alt="Phone Icon" className="w-8 h-8" />
              <div className="pr-4">
                <p className="text-white text-sm font-semibold">ارتباط با ما</p>
                <p className="text-gray-300 text-sm">0912-3456789</p>
              </div>
            </div>
          </div>

          {/* خط جداکننده */}
          <div className="hidden md:block w-px bg-gray-600 h-12"></div>

          <div className="flex items-center md:w-1/3 justify-center text-center md:text-right">
            <div className="flex items-center gap-4">
              <img src={icon1} alt="Email Icon" className="w-8 h-8" />
              <div className="pr-4">
                <p className="text-white text-sm font-semibold">ایمیل</p>
                <p className="text-gray-300 text-sm">support1@info.com</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px bg-gray-600 h-12"></div>

          <div className="flex items-center md:w-1/3 justify-center md:justify-end text-center md:text-right">
            <div className="flex items-center gap-4">
              <img src={icon2} alt="Location Icon" className="w-8 h-8" />
              <div className="pr-4">
                <p className="text-white text-sm font-semibold">آدرس</p>
                <p className="text-gray-300 text-sm">گلستان - گرگان</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  text-center md:text-right items-center mt-2 w-full">
          <div className="">
            <p className="text-gray-300 text-sm leading-6">
              اکسیژن با رویکرد اعتماد به مشتری، با در اختیار داشتن متنوع‌ترین
              سرورها متشکل از انواع آی‌پی‌های اقتصادی تا تجاری در سراسر کشور
              ایران آماده خدمت‌رسانی به مشتریان است.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-6">
            <h5 className="text-lg font-semibold mb-4 text-white">
              دسترسی آسان
            </h5>
            <ul className="space-y-2 text-gray-400 flex flex-col items-start max-sm:items-center">
              <li>
                <a href="#" className="hover:text-white">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  درباره ما
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start px-6 ">
            <h5 className="text-lg font-semibold mb-4 text-white">خبرنامه</h5>
            <form className="flex items-center  max-w-sm flex-row max-md:ml-8">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-grow px-4 py-2 rounded-r-lg border border-gray-600 bg-gray-800 text-gray-200 focus:outline-none w-3/5"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-l-lg "
              >
                ارسال
              </button>
            </form>
          </div>
        </div>

        <div className="text-right text-sm mt-4 border-t border-gray-600 ">
          <p className="text-md text-[#9A9A9A]">
            &copy;تمامی حقوق این وبسایت متعلق به اکسیژن می‌باشد
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
