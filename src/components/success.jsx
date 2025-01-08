import { useNavigate } from "react-router";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-3xl p-8 text-center relative">
        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-8">Success</h1>
        <p className="text-gray-600 mb-6">
          Your operation was completed successfully. Below are your account
          details:
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              value="JohnDoe"
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-left text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value="********"
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-green-600 transition duration-300"
        >
          Back to Home
        </button>

        <div className="mt-8 border-t pt-6 text-left">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Customer Support
          </h2>
          <p className="text-gray-600 text-sm">
            If you need any assistance, our support team is available 24/7.
            Contact us via email or phone and we will be happy to help.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
