import React from 'react';

const Topsell = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
  <div className="grid items-center gap-12 lg:grid-cols-2">

    
    <div className="relative overflow-hidden rounded-3xl">

      
      <img
        src="https://png.pngtree.com/background/20250110/original/pngtree-abstract-curves-with-blue-and-yellow-gradient-smooth-transitions-picture-image_16057019.jpg"
        alt="Background"
        className="h-[550px] w-full object-cover"
      />

      
      <img
        src="https://png.pngtree.com/png-vector/20250618/ourmid/pngtree-a-white-shirt-hanging-on-hanger-png-image_16547772.png"
        alt="T-Shirt"
        className="absolute left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2"
      />

      
      <div className="absolute right-6 top-6">
        <h3 className="text-right text-2xl font-bold text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
          Modern
          <br />
          Design
        </h3>
      </div>

      
      <div className="absolute bottom-6 left-6">
        <p className="text-sm uppercase tracking-wider text-white">
          Starting From
        </p>

        <h2 className="text-4xl font-bold text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
          $49.99
        </h2>
      </div>

    </div>

    
    <div>

      <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Top Selling
      </span>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
        Premium Printed
        <br />
        T-Shirts Collection
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-gray-600">
        Discover our best-selling custom printed t-shirts crafted with
        premium materials and unique designs. Perfect for everyday wear,
        gifting, or building your own fashion brand.
      </p>

      <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
        See Our Products
      </button>

    </div>

  </div>
</section>
    );
};

export default Topsell;