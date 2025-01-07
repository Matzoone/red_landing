import Header from "./Header";
import Footer from "./Footer";
import PricingCard from "./PricingCard";
import svg1 from "../assets/1.svg";
import svg2 from "../assets/2.svg";
import svg3 from "../assets/3.svg";

const CompanyRed = () => {
  return (
    <div>
      <Header />
      <section className="bg-red-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">به سایت رد سرور خوش آمدید</h1>
          <p className="text-lg mb-6">
            رد سرور یک بستر مناسب برای عبور از فیلترینگ با سرعت بالا، بدون قطعی
            و با نازل‌ترین قیمت.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            تست رایگان
          </button>
        </div>
      </section>

      {/* Main Content */}

      <div className="bg-gray-100">
        <div className="container mx-auto space-y-10 flexs justify-around m-auto">
          {/* سطر 1: SVG سمت راست */}

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 ">
            <div className="w-full flex items-center justify-around">
              <div className="text ">
                <h2 className="text-2xl font-bold text-red-600 mb-2">
                  سرعت بالا و قیمت مناسب
                </h2>
                <p className=" text-lg text-gray-600">
                  سرعت بالا: رد سرور با به‌کارگیری از سرورهای قدرتمند
                  <br /> بهترین سرعت را در اختیار شما قرار خواهد داد.
                </p>
                <p className="text-lg text-gray-600">
                  قیمت مناسب: تیم رد سرور در این شرایط بد اقتصادی، <br />
                  بهترین قیمت سرور را در اختیار شما قرار می‌دهد.{" "}
                </p>
              </div>
              <img className="" src={svg1} />
            </div>
          </div>

          {/* سطر 2: SVG سمت چپ */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 ">
            <div className="w-full flex items-center justify-around flex-row-reverse">
              <div className="text ">
                <h2 className="text-2xl font-bold text-red-600 mb-2">
                  اپلیکیشن اختصاصی و مصرف نیم‌بها
                </h2>
                <p className="text-lg text-gray-600">
                  اپلیکیشن اختصاصی: با استفاده از اپلیکیشن رد سرور به بیش از{" "}
                  <br /> 50 سرور از لوکیشن‌های مختلف متصل شوید.
                </p>
                <p className="text-lg text-gray-600">
                  مصرف نیم‌بها: با استفاده از سرورهای ما مصرف اینترنت شما در{" "}
                  <br />
                  سایت‌ها و اپلیکیشن‌های ایرانی به صورت نیم‌بها حساب می‌شود.
                </p>
              </div>
              <img className="" src={svg2} />
            </div>
          </div>
        </div>

        {/* سطر 3: SVG سمت چپ */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 ">
          <div className="w-full flex items-center justify-around">
            <div className="text ">
              <h2 className="text-2xl font-bold text-red-600 mb-2">
                ایپی ثابت و پشتیبانی
              </h2>
              <p className="text-lg text-gray-600">
                ایپی ثابت: سرورهای ما دارای آی‌پی ثابت هستند و مناسب <br />
                برای کارهای حساس و ترید نیز می‌باشند.
              </p>
              <p className="text-lg text-gray-600">
                پشتیبانی: تیم فنی رد سرور همیشه در کنار شما خواهد بود <br />
                تا در صورت بروز مشکل آن را به سرعت رفع کند.
              </p>
            </div>
            <img className="" src={svg3} />
          </div>
        </div>
      </div>

      <div>
        {/* این قسمت قراره بگیره */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 flex justify-center gap-10 max-2xl:flex-nowrap max-xl:flex-wrap">
            <div className="max-w-sm w-full">
              <PricingCard
                title="3 ماه حجم 120 گیگ"
                type="حرفه‌ای"
                price="۲۴۰,۰۰۰"
                features={[
                  "سرعت پایدار",
                  "آی‌پی ثابت",
                  "پشتیبانی پس از فروش",
                  "قیمت مناسب",
                ]}
              />
            </div>
            <div className="max-w-sm w-full">
              <PricingCard
                title="3 ماه حجم 120 گیگ"
                type="V2RAY"
                price="۲۴۰,۰۰۰"
                features={[
                  "سرعت پایدار",
                  "آی‌پی ثابت",
                  "پشتیبانی پس از فروش",
                  "قیمت مناسب",
                ]}
              />
            </div>
            <div className="max-w-sm w-full">
              <PricingCard
                title="6 ماه حجم 240 گیگ"
                type="اقتصادی"
                price="۴۵۰,۰۰۰"
                features={[
                  "سرعت عالی",
                  "آی‌پی ثابت",
                  "پشتیبانی فوری",
                  "قیمت مناسب",
                ]}
              />
            </div>
            <div className="max-w-sm w-full">
              <PricingCard
                title="12 ماه حجم 500 گیگ"
                type="پیشرفته"
                price="۹۵۰,۰۰۰"
                features={[
                  "سرعت فوق‌العاده",
                  "آی‌پی دائمی",
                  "پشتیبانی 24/7",
                  "قیمت ویژه",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyRed;
