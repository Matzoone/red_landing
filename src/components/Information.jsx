import close from "../assets/close.svg";

const Information = () => {
  return (
    <div
      className="w-full flex flex-wrap gap-6 bg-gray-950 py-20"
      style={{
        backgroundImage: window.innerWidth >= 640 ? `url(${close})` : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
      }}
    >
      <div className="w-full flex justify-around py-4">
        <div className="w-2/8 p-8 bg-gray-300/10 backdrop-blur-xs rounded-lg leading-9  max-md:hidden">
          <p className="text-center text-gray-50 text-xl leading-loose">12</p>
          <p className="text-center text-gray-50 text-xl leading-loose">
            سرور فعال در کشور های متفاوت{" "}
          </p>
        </div>
        <div className="w-2/8 p-8 bg-gray-300/10 backdrop-blur-xs rounded-lg leading-9 max-md:w-full max-md:mx-12">
          <p className="text-center text-gray-50 text-xl leading-loose">12</p>
          <p className="text-center text-gray-50 text-xl leading-loose">
            پشتیبانی 24 ساعته در 7 روز هفته
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-2/8 p-8 bg-gray-300/10 backdrop-blur-xs rounded-lg leading-9 max-md:w-full max-md:mx-12">
          <p className="text-center text-gray-50 text-xl leading-loose">
            34r1324r1
          </p>
          <p className="text-center text-gray-50 text-xl leading-loose">
            کاربر فعال در اقصا نقاط جهان
          </p>
        </div>
      </div>

      <div className="w-full flex justify-around py-4">
        <div className="w-2/8 p-8 bg-gray-300/10 backdrop-blur-xs rounded-lg leading-9 max-md:hidden">
          <p className="text-center text-gray-50 text-xl leading-loose">12</p>
          <p className="text-center text-gray-50 text-xl leading-loose">
            رمز گذاری پیشرفته برای امنیت بیشتر{" "}
          </p>
        </div>
        <div className="w-2/8 p-8 bg-gray-300/10 backdrop-blur-xs rounded-lg leading-9 max-md:w-full max-md:mx-12">
          <p className="text-center text-gray-50 text-xl leading-loose">12</p>
          <p className="text-center text-gray-50 text-xl leading-loose">
            تجربه در زمینه عبور از فیلترینگ{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
