const MenuBar = ({ setIsMenuOpen }) => {
  return (
    <>
      <div className="md:hidden bg-gray-800 p-8 rounded-lg absolute top-20 right-4">
        <button
          className=" p-2 rounded-full absolute top-1 left-1 text-gray-300 hover:text-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          ✖
        </button>
        <ul className="space-y-4 text-lg leading-10 mt-4">
          <li>
            <a href="#robot" className="text-gray-300 hover:text-gray-50 block">
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
            <a href="#app" className="text-gray-300 hover:text-gray-50 block">
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
    </>
  );
};

export default MenuBar;
