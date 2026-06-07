import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const categories = ["all", "dresses", "tops", "outerwear", "jacket"];

const products = [
  {
    id: 1,
    name: "Summer Dress",
    price: "$49",
    category: "dresses",
    discount: "20%",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
  },
  {
    id: 2,
    name: "Casual Top",
    price: "$29",
    category: "tops",
    discount: "15%",
    img: "https://images.unsplash.com/photo-1520975693411-bb7c6c1c6b60?w=600",
  },
  {
    id: 3,
    name: "Winter Jacket",
    price: "$99",
    category: "jacket",
    discount: "30%",
    img: "https://images.unsplash.com/photo-1520975682031-a7b5d4b4b7f1?w=600",
  },
  {
    id: 4,
    name: "Outerwear Coat",
    price: "$120",
    category: "outerwear",
    discount: "25%",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716e?w=600",
  },
  {
    id: 5,
    name: "Elegant Dress",
    price: "$79",
    category: "dresses",
    discount: "10%",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600",
  },
  {
    id: 6,
    name: "Stylish Top",
    price: "$39",
    category: "tops",
    discount: "18%",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
  },
];

export default function Popularproduct() {
  const [activeCat, setActiveCat] = useState("all");

  const filtered =
    activeCat === "all"
      ? products
      : products.filter((p) => p.category === activeCat);

  return (
    <section className="bg-white  p-16">
      <div className="mx-auto  px-6">

        
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <h2 className="text-3xl font-bold text-gray-900">
            Most Popular Products
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCat === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {filtered.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group rounded-2xl   transition hover:-translate-y-2 hover:shadow-xl">

                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-64 w-full object-cover transition group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                    -{product.discount}
                  </span>

                  <div className="absolute right-3 top-3 flex flex-col gap-2">
                    <button className="rounded-full bg-white p-2 shadow hover:bg-gray-100">
                      <FaHeart className="text-red-500" />
                    </button>

                    <button className="rounded-full bg-black p-2 text-white hover:bg-gray-800">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xl font-bold text-blue-600">
                    {product.price}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}