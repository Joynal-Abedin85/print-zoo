import React from "react";

const Printing = () => {
  return (
    <div className="mx-auto  px-6 py-16">
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=80"
            alt="Printing"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Printing
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Sell Print On
            <span className="text-blue-700"> Demand </span>
            Products Worldwide
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Start your print-on-demand business and reach customers around the
            globe. Create custom products, manage orders easily, and grow your
            brand with confidence.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                ✓
              </span>
              <span className="text-gray-700">
                Eco-friendly ecommerce solutions
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                ✓
              </span>
              <span className="text-gray-700">High-quality print products</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                ✓
              </span>
              <span className="text-gray-700">Worldwide shipping support</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                ✓
              </span>
              <span className="text-gray-700">Fast order processing</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                ✓
              </span>
              <span className="text-gray-700">
                Trusted by thousands of sellers
              </span>
            </li>
          </ul>

          <button className="mt-8 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg">
            See Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Printing;
