import React from "react";
import data from "./components/Quiz.json";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] md:w-[85%] lg:w-[95%]">
        {data.map((ele, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <img
              src={ele.image}
              alt={ele.title}
              className="w-full h-50 object-contain bg-white p-3"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-[17px] font-semibold text-gray-800 leading-tight">
                {ele.title}
              </h2>

              <div className="flex items-center gap-2">
                <span className="bg-green-600 text-white px-2 py-[2px] text-xs rounded-md">
                  ★ {ele.rating}
                </span>
                <span className="text-sm text-gray-500">Ratings</span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-bold text-gray-800">
                  ₹{ele.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{ele.originalPrice}
                </span>
                <span className="text-sm text-green-600 font-semibold">
                  {ele.discount}% off
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-2">{ele.details}</p>

              <div className="mt-3 border-t pt-3 space-y-1">
                <p className="text-green-700 text-sm font-medium flex items-center gap-1">
                  💸 {ele.offers.exchangeOffer}
                </p>
                <p className="text-blue-700 text-sm font-medium flex items-center gap-1">
                  🏦 {ele.offers.bankOffer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
