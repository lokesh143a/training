import type React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-gray-800 px-4">
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Not Found"
        className="w-72 mb-6"
      />
      <h1 className="text-5xl font-bold mb-2 text-blue-700">404</h1>
      <p className="text-2xl font-semibold mb-4">Oops! Page not found.</p>
      <p className="text-lg mb-6 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
