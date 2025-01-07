const Header = () => {
  return (
    <>
      <header className=" bg-red-600 text-white p-4 shadow-md sticky top-0 z-10 ">
        <nav className="container mx-auto flex justify-center items-center">
          {/* Navigation Links */}
          <ul className="flex space-x-4 rtl:space-x-reverse">
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
              <a href="#robot" className="hover:text-gray-300">
                ربات فروش تلگرام
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
