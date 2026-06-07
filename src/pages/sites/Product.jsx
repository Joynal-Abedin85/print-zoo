import {
  Search,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Product() {
  const categories = [
    "T-Shirts",
    "Shirts",
    "Hoodies",
    "Jackets",
    "Jeans",
    "Pants",
    "Sneakers",
    "Accessories",
    "Bags",
  ];

  const colors = [
    "bg-black",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-400",
    "bg-purple-500",
    "bg-pink-500",
    "bg-gray-400",
  ];

  const tags = [
    "Fashion",
    "Summer",
    "Winter",
    "Trending",
    "Streetwear",
    "Cotton",
    "Premium",
    "Casual",
    "Limited",
  ];

  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Premium Product ${i + 1}`,
    price: 49 + i * 5,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
  }));

  return (
    <section className="bg-white px-4 py-10 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Search Products
            </h3>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="h-12 w-full rounded-xl border border-gray-200 pl-11 pr-4 outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Product Categories
            </h3>

            <div className="space-y-3">
              {categories.map((item) => (
                <label
                  key={item}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </div>

                  <span className="text-sm text-gray-400">
                    ({Math.floor(Math.random() * 50)})
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Filter By Price
            </h3>

            <input
              type="range"
              min="0"
              max="1000"
              className="w-full"
            />

            <div className="mt-3 flex justify-between text-sm text-gray-500">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Filter By Color
            </h3>

            <div className="flex flex-wrap gap-3">
              {colors.map((color, i) => (
                <button
                  key={i}
                  className={`h-8 w-8 rounded-full border ${color}`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Filter By Rating
            </h3>

            <div className="space-y-3">
              {[5, 4, 3, 2].map((rating) => (
                <label
                  key={rating}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <input type="radio" name="rating" />

                  <div className="flex">
                    {[...Array(rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <span>& Up</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Product Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-black hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-200 p-5 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold">1–15</span> of{" "}
              <span className="font-semibold">248</span> products
            </p>

            <select className="h-11 rounded-xl border border-gray-200 px-4 outline-none">
              <option>Default Sorting</option>
              <option>Price: Low To High</option>
              <option>Price: High To Low</option>
              <option>Newest First</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[5/5] w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <div className="mb-2 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="mb-2 font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-lg font-bold">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200">
              <ChevronLeft size={18} />
            </button>

            <button className="h-11 w-11 rounded-xl bg-black text-white">
              1
            </button>

            <button className="h-11 w-11 rounded-xl border border-gray-200">
              2
            </button>

            <button className="h-11 w-11 rounded-xl border border-gray-200">
              3
            </button>

            <button className="h-11 w-11 rounded-xl border border-gray-200">
              4
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

