import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router";

const ProductPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <div className=" h-screen bg-red-200 pt-52 max-md:pt-4 max-md:h-screen">
      <div className="m-auto w-[55%] max-md:w-[95%]">
        <button
          onClick={handleBackClick}
          className="flex mb-3 rounded-xl bg-slate-100 py-1 px-4 hover:scale-105 hover:text-slate-100 hover:bg-slate-700 text-bg-slate-700 transition duration-500"
        >
          <ArrowRightIcon width={24} hanging={24} />
          بازگشت
        </button>
      </div>
      <div className="w-[55%] max-md:flex-col rounded-3xl m-auto h-[22rem] flex overflow-hidden max-md:h-auto  max-md:w-[95%]">
        <div className="bg-red-600 max-md:w-auto w-[53%] grid justify-end">
          <div className="mr-10 mt-7 w-[80%]  max-md:mb-4">
            <div className="text-4xl font-bold text-white">
              همین حالا VPN خودتو بگیر!
            </div>
            <div className="text-white mt-8 text-base font-normal max-md:mb-4">
              دیگه نگران محدودیت‌های اینترنت نباش! با وی‌پی‌ان سریع و امن ما
              می‌تونی به راحتی به هر چیزی که می‌خواهی دسترسی پیدا کنی، بدون هیچ
              دردسری. امنیت آنلاین‌ت هم با ما تضمینه، پس با خیال راحت وب‌گردی
              کن.
            </div>
          </div>
          <div className="w-full">
            <div className=" bg-green-600 max-md:w-auto w-fit rounded-2xl h-fit py-3 px-6 text-white mb-4 mx-auto">
              پشتیبانی 24 ساعته
            </div>
          </div>
        </div>
        <div className="bg-red-50 max-md:w-auto w-[47%] flex">
          <div className="w-[80%] m-auto mt-8 max-md:mb-4">
            <div className="">
              <h2 className="text-3xl font-extrabold text-red-600">
                خریدتو نهایی کن
              </h2>
              <p className="text-gray-400 text-base mt-2 max-md:w-52">
                تو فرم زیر ایمیلتو بزن تا بتونی بری به صفحه پرداخت
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-gray-700"
              >
                آدرس ایمیل خود را وارد کنید
              </label>
              <input
                type="email"
                id="email"
                placeholder="exaple@gmail.com"
                className="px-4 py-2 transition rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 text-gray-700 w-64"
              />
            </div>
            <div className="mt-14 text-sm text-slate-100 bg-green-500 py-3 rounded-2xl flex items-center justify-center md:hidden">
              پشتیبانی 24 ساعته
            </div>
            <div className="mt-[70px] text-sm text-slate-600 justify-center max-md:hidden mr-4">
              <ul className="list-disc flex gap-8">
                <li>sghl</li>
                <li>o,fd</li>
                <li>lkl o,fl</li>
                <li>alh ]ofv</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[55%] m-auto mt-10">
        <button className="bg-red-600 rounded-3xl w-full text-white h-20 text-3xl font-extrabold  max-md:mb-4  max-md:w-full  max-md:px-4 hover:scale-105 transition duration-500 hover:text-red-600 hover:bg-white">
          نهایی کردن خرید!
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
