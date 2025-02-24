import { useState, useEffect } from "react";
import Frame from "../assets/Frame.svg";
import { BsPersonCheckFill } from "react-icons/bs";

const features = [
  {
    title: "پشتیبانی ۲۴ ساعته و حرفه‌ای",
    text: "تیم پشتیبانی ما به صورت ۲۴ ساعته و در تمامی روزهای هفته در دسترس است تا به هر سؤال، نگرانی یا مشکلی که دارید پاسخ دهد.",
  },
  {
    title: "امنیت پیشرفته و مطمئن",
    text: "با رمزگذاری قدرتمند، اطلاعات شما از حملات سایبری و تهدیدات آنلاین محافظت می‌شود تا با امنیت خاطر از اینترنت آزاد استفاده کنید.",
  },
  {
    title: "دسترسی نامحدود و آزاد",
    text: "بدون هیچ محدودیتی به تمامی محتواها، سرویس‌های جهانی و شبکه‌های اجتماعی دسترسی داشته باشید.",
  },
  {
    title: "سرعت بی‌نظیر و پایدار",
    text: "تجربه‌ای با سرعت فوق‌العاده برای مرور وب، دانلود فایل‌ها، و استریم ویدیوهای با کیفیت عالی و اتصال پایدار.",
  },
];

const Feature = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="w-full bg-gray-950 px-20 py-40 max-md:px-12  leading-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      style={{
        backgroundImage: window.innerWidth >= 640 ? `url(${Frame})` : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {features
        .slice(0, isMobile ? 2 : features.length)
        .map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 text-gray-50 rounded-lg p-6 flex flex-col items-start h-full max-md:w-full"
          >
            <div className="p-4 bg-gray-900 rounded-full flex justify-start">
              <BsPersonCheckFill size={22} />
            </div>
            <p className="text-xl font-bold pt-6 pb-4">{feature.title}</p>
            <p className="flex-grow">{feature.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Feature;
