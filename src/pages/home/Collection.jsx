import React from 'react';

const Collection = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
  <div className="grid gap-8 lg:grid-cols-2">

    {/* Left Side */}
    <div className="relative overflow-hidden rounded-3xl">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80"
        alt="Women Collection"
        className="h-full w-full object-cover"
      />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-3xl font-bold text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
          Women Collection
        </h3>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col justify-center">

      <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        New Collection
      </span>

      <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
        Discover Our Latest Fashion Collections
      </h2>

      <p className="mt-5 max-w-xl text-lg text-gray-600">
        Explore premium fashion collections designed for every style.
        From elegant women’s wear to trendy kids fashion and modern
        men's outfits.
      </p>

      {/* Small Collections */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">

        {/* Child Fashion */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700&q=80"
            alt="Child Fashion"
            className="h-64 w-full object-cover transition duration-500 hover:scale-105"
          />

          <div className="absolute bottom-4 left-4">
            <h4 className="text-xl font-bold text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
              Child Fashion
            </h4>
          </div>
        </div>

        {/* Men Collection */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=80"
            alt="Men Collection"
            className="h-64 w-full object-cover transition duration-500 hover:scale-105"
          />

          <div className="absolute bottom-4 left-4">
            <h4 className="text-xl font-bold text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
              Men Collection
            </h4>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
    );
};

export default Collection;