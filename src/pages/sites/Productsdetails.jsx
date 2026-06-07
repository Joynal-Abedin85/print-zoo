import { useState } from "react";
import { useParams } from "react-router";
import {Star} from "lucide-react";
import ProductTabs from "@/components/productdatails/Producttab";
import RelatedProducts from "@/components/productdatails/Related";

const products = [
  {
    id: 1,
    name: "Black Hoodie",
    price: 59,
    image: "image-url",
    description: "Premium cotton hoodie",
  },
  {
    id: 2,
    name: "White T-Shirt",
    price: 29,
    image: "image-url",
    description: "Soft cotton t-shirt",
  },
];



 const relatedProducts = [
    {
      id: 1,
      name: "Black Hoodie",
      price: 149,
      image: "/images/product-1.jpg",
    },
    {
      id: 2,
      name: "White T-Shirt",
      price: 99,
      image: "/images/product-2.jpg",
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 199,
      image: "/images/product-3.jpg",
    },
    {
      id: 4,
      name: "Sneakers",
      price: 249,
      image: "/images/product-4.jpg",
    },
  ];

export default function Productsdetails() {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (


    <section className="py-12 px-14">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full rounded-3xl object-cover"
          />
        </div>

        <div>
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              In Stock
            </span>

            <div className="flex gap-3">
              <button className="rounded-xl border px-4 py-2">Prev</button>

              <button className="rounded-xl border px-4 py-2">Next</button>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold">Premium Black Hoodie</h1>
          <div className="mb-4 flex items-center gap-2">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-500">(128 Reviews)</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold">$149.00</h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            Premium cotton hoodie designed for comfort and durability. Perfect
            for everyday wear.
          </p>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block font-medium">Color</label>

              <select className="h-12 w-full rounded-xl border px-4">
                <option>Black</option>
                <option>White</option>
                <option>Blue</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Size</label>

              <select className="h-12 w-full rounded-xl border px-4">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Delivery Time</label>

              <select className="h-12 w-full rounded-xl border px-4">
                <option>24 Hours</option>
                <option>48 Hours</option>
                <option>72 Hours</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Quantity Package</label>

              <select className="h-12 w-full rounded-xl border px-4">
                <option>1 Piece</option>
                <option>2 Pieces</option>
                <option>5 Pieces</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-3xl font-bold">${product.price * quantity}</h3>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center rounded-xl border">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-5 py-3"
              >
                -
              </button>

              <span className="px-5">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-5 py-3"
              >
                +
              </button>
            </div>

            <button className="rounded-xl bg-black px-8 py-3 text-white">
              Add To Cart
            </button>

            <button className="rounded-xl border px-8 py-3">Purchase</button>
          </div>
          
          <button
            onClick={() => setWishlist(!wishlist)}
            className="mt-6 flex items-center gap-3"
          >
            <Star
              className={
                wishlist ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
              }
            />
            Add To Wishlist
          </button>
          <div className="mt-8 space-y-3">
            <p>
              <span className="font-semibold">Category:</span> Hoodies
            </p>

            <p>
              <span className="font-semibold">Tags:</span> Winter, Premium,
              Cotton
            </p>
          </div>
        </div>
      </div>

      <ProductTabs></ProductTabs>
     
      <RelatedProducts relatedProducts={relatedProducts}></RelatedProducts>
    </section>
  );
}
