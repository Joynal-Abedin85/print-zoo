import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function Addcart() {
  const [quantity, setQuantity] = useState(1);

  const price = 120;
  const subtotal = price * quantity;
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <section className="px-4 py-12 lg:px-8">
      <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
        {/* Left Side */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-gray-200">
            <div className="hidden grid-cols-[1.8fr_1fr_1fr_1fr] border-b bg-gray-50 px-6 py-5 font-semibold md:grid">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
            </div>

            <div className="grid gap-6 border-b p-6 md:grid-cols-[1.8fr_1fr_1fr_1fr] md:items-center">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                  alt="Product"
                  className="h-28 w-24 rounded-xl object-cover"
                />

                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Premium Black Hoodie
                  </h3>

                  <div className="space-y-1 text-sm text-gray-500">
                    <p>Color: Black</p>
                    <p>Size: XL</p>
                    <p>Delivery: 24 Hours</p>
                    <p>Quantity: 1 Piece</p>
                    <p>Vendor: Fashion Hub</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="font-semibold">
                  ${price}
                </span>
              </div>

              <div>
                <div className="flex w-fit items-center rounded-xl border">
                  <button
                    onClick={() =>
                      quantity > 1 &&
                      setQuantity(quantity - 1)
                    }
                    className="px-4 py-2"
                  >
                    -
                  </button>

                  <span className="px-4">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity(quantity + 1)
                    }
                    className="px-4 py-2"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">
                  ${subtotal}
                </span>

                <button className="text-red-500">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Coupon Code"
                className="h-12 rounded-xl border border-gray-200 px-4 outline-none"
              />

              <button className="h-12 rounded-xl border border-black px-6 font-medium">
                Apply Coupon
              </button>
            </div>

            <button className="h-12 rounded-xl bg-black px-6 font-medium text-white">
              Update Cart
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="sticky top-24 rounded-3xl border border-gray-200 p-6">
            <h2 className="mb-6 text-2xl font-bold">
              Cart Totals
            </h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ${subtotal}
                </span>
              </div>

              <div className="flex items-center justify-between border-b pb-5">
                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="font-semibold">
                  ${shipping}
                </span>
              </div>

              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>

                <span>${total}</span>
              </div>

              <button className="mt-4 h-14 w-full rounded-xl bg-black text-white transition hover:bg-gray-800">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}