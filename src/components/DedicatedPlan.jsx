import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const DedicatedPlan = () => {
  const plans = [
    { duration: "1 ماهه تک کاربره", price: "۳۹,۰۰۰", oldPrice: "۱۰۹,۰۰۰" },
    { duration: "1 ماهه دو کاربره", price: "۷۴,۰۰۰", oldPrice: "۱۹۸,۰۰۰" },
    { duration: "3 ماهه تک کاربره", price: "۱۵۸,۰۰۰", oldPrice: "۴۹۹,۰۰۰" },
    { duration: "3 ماهه دو کاربره", price: "۱۹۹,۰۰۰", oldPrice: "۴۹۸,۰۰۰" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20 px-4">
      <h1 className="text-2xl font-bold px-4 max-md:text-center">
        سرویس اپلیکیشن نامحدود رد وی پی ان
      </h1>
      <p className="mt-6 text-gray-400 px-4  max-md:text-center">
        با سرویس نامحدود رد وی پی ان برای اندروید، از اینترنت بدون محدودیت و
        بدون قطعی لذت ببرید.
      </p>
      <h2 className="mt-16 text-xl font-semibold">پلن‌های اختصاصی رد</h2>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl text-center shadow-lg"
          >
            <div className="flex justify-between items-center gap-8">
              <h3 className="flex items-center  text-lg py-1">
                {plan.duration}
              </h3>
              <span className="bg-red-600 flex items-center justify-center text-white text-xs px-3 py-1 rounded-full">
                ۲۵٪ تخفیف
              </span>
            </div>
            <p className="mt-10 text-start text-gray-400 line-through">
              {plan.oldPrice} تومان
            </p>
            <p className="text-2xl mt-2 text-start font-bold">
              {plan.price} تومان
            </p>
            <button className="mt-8 bg-red-600 px-6 py-2 rounded-lg text-white font-semibold w-full">
              خرید پلن یک ماهه
            </button>
            <div className="mt-4 flex items-center gap-1">
              <span className="text-gray-400">●</span>
              <div className="flex-1 h-px bg-gray-400"></div>
              <span className="text-gray-300 font-medium px-1">
                ویژگی های پلن
              </span>
              <div className="flex-1 h-px bg-gray-400"></div>
              <span className="text-gray-400">●</span>
            </div>
            <div className="mt-4 text-gray-300 text-sm leading-10 text-start">
              <p>سرورهای متعدد (۳)</p>
              <p>پشتیبانی</p>
              <p>۱۴ روز گارانتی</p>
              <p>اشتراک آی‌پی ثابت</p>
            </div>
            <p className="text-red-500 text-xl mt-6">رد وی پی ان</p>
          </div>
        ))}
      </div>

      <div className="block md:hidden w-full mt-10 px-4">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={8}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 p-6 rounded-xl m-6 text-center shadow-lg">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="flex items-center  text-sm py-1">
                    {plan.duration}
                  </h3>
                  <span className="bg-red-600 flex items-center justify-center text-white text-xs px-3 py-1 rounded-full">
                    ۲۵٪ تخفیف
                  </span>
                </div>
                <p className="mt-7 text-start text-gray-400 line-through">
                  {plan.oldPrice} تومان
                </p>
                <p className="text-2xl mt-2 text-start font-bold">
                  {plan.price} تومان
                </p>
                <button className="mt-6 bg-red-600 px-6 py-2 rounded-lg text-white font-semibold w-full">
                  خرید پلن یک ماهه
                </button>
                <div className="mt-4 flex items-center gap-1">
                  <span className="text-gray-400">●</span>
                  <div className="flex-1 h-px bg-gray-400"></div>
                  <span className="text-gray-300 font-medium px-1">
                    ویژگی های پلن
                  </span>
                  <div className="flex-1 h-px bg-gray-400"></div>
                  <span className="text-gray-400">●</span>
                </div>
                <div className="mt-4 text-gray-300 text-sm leading-8 text-start">
                  <p>سرورهای متعدد (۳)</p>
                  <p>پشتیبانی</p>
                  <p>۱۴ روز گارانتی</p>
                  <p>اشتراک آی‌پی ثابت</p>
                </div>
                <p className="text-red-500 text-xl mt-4">رد وی پی ان</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default DedicatedPlan;
