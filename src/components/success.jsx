import {
  ArrowTurnLeftDownIcon,
  DocumentDuplicateIcon,
  LinkIcon,
  ShieldExclamationIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SuccessPage() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const trueOrFalse = randomNumber % 2 !== 0 ? true : false;

  const navigate = useNavigate();
  const config = [
    {
      user: "kjasfkshfjs",
      pass: "123456",
      config: "hdfjashfiuafsafasfnskjhvilsgfihkbvyigvklsdasdgfishdflsafdsafsaf",
    },
  ];

  const copyToClipboard = (text, field) => {
    let fieldMessage;

    if (field === "user") {
      fieldMessage = "یوزرنیم کپی شد !";
    } else if (field === "pass") {
      fieldMessage = "پسوورد کپی شد !";
    } else if (field === "config") {
      fieldMessage = "کانفیگ کپی شد !";
    } else {
      fieldMessage = "محتوا کپی شد !";
    }

    navigator.clipboard.writeText(text).then(() => {
      toast.success(fieldMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div>
      <div className="bg-green-50 text font-extrabold text-7xl text-green-500 h-52 flex items-center justify-center md:hidden">
        <SparklesIcon width={80} className="text-green-400" />
        <p className="w-min"> تراکنش موفق</p>
      </div>
      <div className="bg-green-50 text font-extrabold text-7xl text-green-500 h-80 flex items-center justify-center max-md:hidden">
        <SparklesIcon width={80} className="text-green-400" /> تراکنش موفق
      </div>
      {/* /// */}
      <div className="flex justify-center mt-10">
        <div className="w-[448px] flex justify-center max-md:hidden">
          <ShieldExclamationIcon className="w-60 text-green-500 ml-[111px]" />
        </div>
        {!trueOrFalse && (
          <div className="flex flex-col items-start justify-center gap-6 mt-8 w-[448px] max-w-md">
            <div className="gap-4 grid max-md:m-auto m-auto">
              <label
                htmlFor="user"
                className="text-green-700 font-medium text-lg w-28 flex"
              >
                نام کاربری
                <ArrowTurnLeftDownIcon width={24} />
              </label>
              <div className="flex items-center gap-6">
                <input
                  name="user"
                  value={config[0].user}
                  readOnly
                  className="flex-1 px-4 py-2 text-lg border-b border-green-500 text-gray-800 rounded-lg shadow-md focus:ring-2 focus:outline-none"
                  onClick={(e) => e.target.select()}
                />
                <button
                  onClick={() => copyToClipboard(config[0].user, "user")}
                  className="text-green-500"
                >
                  <DocumentDuplicateIcon
                    title="کپی"
                    className="w-8 h-8 text-green-500"
                  />
                </button>
              </div>
            </div>
            <div className="gap-4 grid max-md:m-auto m-auto">
              <label
                htmlFor="pass"
                className="text-green-700 font-medium text-lg w-28 flex"
              >
                رمز عبور
                <ArrowTurnLeftDownIcon width={24} />
              </label>
              <div className="flex items-center gap-6">
                <input
                  name="pass"
                  value={config[0].pass}
                  readOnly
                  type="password"
                  className="flex-1 px-4 py-2 text-lg border-b border-green-500 text-gray-800 rounded-lg shadow-md focus:ring-2 focus:outline-none"
                  onClick={(e) => e.target.select()}
                />
                <button
                  onClick={() => copyToClipboard(config[0].pass, "pass")}
                  className="text-green-500"
                >
                  <DocumentDuplicateIcon
                    title="کپی"
                    className="w-8 h-8 text-green-500"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
        {trueOrFalse && (
          <div className="flex flex-col items-start justify-center gap-6 mt-8 w-[448px] max-w-md">
            <div className="gap-4 grid max-md:m-auto m-auto">
              <label
                htmlFor="config"
                className="text-green-700 font-medium text-lg w-28 flex"
              >
                کانفیگ <ArrowTurnLeftDownIcon width={24} />
              </label>
              <div className="flex items-center gap-6">
                <input
                  name="config"
                  value={config[0].config}
                  readOnly
                  type="text"
                  className="flex-1 px-4 py-2 text-lg border-b border-green-500 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-0"
                  onClick={(e) => e.target.select()}
                />

                <button
                  onClick={() => copyToClipboard(config[0].pass, "config")}
                  className="text-white"
                >
                  <DocumentDuplicateIcon
                    title="کپی"
                    className="w-8 h-8 text-green-500"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[44%] flex justify-between m-auto items-center md:!mt-40 max-md:!mt-16 max-md:flex-col">
        <div className="w-auto flex flex-col items-start gap-6">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 text-lg font-bold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none transition-transform transform hover:scale-105"
          >
            بازگشت به صفحه اصلی
          </button>
          <p className="text-slate-300 text-xs max-w-[218px] max-md:hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ad
          </p>
        </div>
        <div className="w-[48%] flex max-md:flex-col-reverse max-md:items-center">
          <div className="w-[54%] max-md:mt-10 max-md:w-[170%]">
            <ul className="list-disc flex flex-col max-md:justify-between max-md:!flex-row">
              <li>ما خوبی</li>
              <li>عالی ایم</li>
              <li className="max-md:hidden">خداییم</li>
              <li className="max-md:hidden">بهتر از ما نداریم</li>
              <li className="max-md:hidden">میتونی برس</li>
            </ul>
          </div>

          <a
            href=""
            className="w-[25%] bg-green-500 text-white font-bold rounded-2xl items-center justify-center flex h-10 mt-[6px] hover:scale-110 transition bg max-md:!rounded-lg max-md:w-[175px]"
          >
            پشتیبانی
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SuccessPage;
