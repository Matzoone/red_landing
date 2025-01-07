import tag from "../assets/Tag1.svg";
import coin from "../assets/Coin.png";

const PricingCard = ({ title, type, price, features }) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 w-full max-w-lg flex flex-col items-center">
      {/* برچسب */}
      <div className="w-full">
        <div className="flex justify-between -mt-12 ">
          <div className="flex justify-start">
            <img className="mt-16 size-10" src={coin} />
          </div>
          <div className="flex justify-end mr-24 w-full">
            {/* <img className="w-full -ml-10" src={tag} />
            <p className="relative left-11 top-6">{type}</p> */}
            <span className="flex justify-center w-full -mt-1">
              <img className="w-full relative right-6 top-2" src={tag} />
              <span className="absolute text-white text-xs font-black mt-8 mr-12">
                {type}
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* محتوای کارت */}
      <div className="text-center w-full">
        <div className="flex justify-start">
          <h3 className="text-lg font-bold text-gray-600">{title}</h3>
        </div>
        <div className="w-full flex justify-end">
          <p className="text-3xl font-extrabold text-gray-800 my-4">
            {price} تومان
          </p>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-baseline gap-2">
              <span className="text-red-500">✔</span> {feature}
            </li>
          ))}
        </ul>
        <button className="bg-red-600 text-white px-6 py-2 w-full rounded-lg hover:bg-red-700 transition mt-10">
          خرید
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
