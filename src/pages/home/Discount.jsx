import React from "react";

const Discount = () => {
  return (
    <div className="mx-auto  px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="flex items-center justify-between overflow-hidden rounded-3xl bg-cover bg-center px-8 py-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80')",
          }}
        >
          <div className="max-w-xs text-white">
            <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider">
              Discount 25%
            </p>

            <h2 className="mt-3 text-3xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)] font-bold leading-tight">
              Premium Printing
              <br />
              Solutions
            </h2>

            <button className="mt-6 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-100">
              Explore
            </button>
          </div>

          <img
            src="https://pngimg.com/uploads/tshirt/tshirt_PNG5454.png"
            alt="Product"
            className="h-48 object-contain"
          />
        </div>

        <div
          className="flex items-center justify-between overflow-hidden rounded-3xl bg-cover bg-center px-8 py-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80')",
          }}
        >
          <div className="max-w-xs text-white">
            <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider">
              Discount 25%
            </p>

            <h2 className="mt-3 text-3xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)] font-bold leading-tight">
              Custom Design
              <br />
              Products
            </h2>

            <button className="mt-6 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-100">
              Explore
            </button>
          </div>

          <img
            src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png"
            alt="Product"
            className="h-48 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
