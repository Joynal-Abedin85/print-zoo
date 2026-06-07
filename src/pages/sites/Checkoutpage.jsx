export default function CheckoutPage() {
  return (
    <section className="px-4 py-12 lg:px-8">
      <div className="grid gap-10 xl:grid-cols-[1fr_420px]">
        {/* Billing Form */}
        <div>
          <h2 className="mb-8 text-3xl font-bold">
            Billing Details
          </h2>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">
                  First Name *
                </label>

                <input
                  type="text"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Last Name *
                </label>

                <input
                  type="text"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Country / Region *
              </label>

              <select className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none">
                <option>Bangladesh</option>
                <option>India</option>
                <option>Pakistan</option>
                <option>Nepal</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Street Address *
              </label>

              <input
                type="text"
                placeholder="House number and street name"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Town / City *
              </label>

              <input
                type="text"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">
                  State *
                </label>

                <input
                  type="text"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  ZIP Code *
                </label>

                <input
                  type="text"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Phone *
              </label>

              <input
                type="tel"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Email Address *
              </label>

              <input
                type="email"
                className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Order Notes
              </label>

              <textarea
                rows={5}
                placeholder="Notes about your order..."
                className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-black"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="sticky top-24 rounded-3xl border border-gray-200 p-6">
            <h2 className="mb-6 text-2xl font-bold">
              Your Order
            </h2>

            <div className="space-y-4 border-b pb-6">
              <div className="flex justify-between">
                <span className="font-medium">
                  Premium Hoodie × 2
                </span>

                <span>$240</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">
                  Sneakers × 1
                </span>

                <span>$120</span>
              </div>
            </div>

            <div className="space-y-4 py-6">
              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>$360</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>

                <span>$20</span>
              </div>

              <div className="flex justify-between border-t pt-4 text-lg font-bold">
                <span>Total</span>

                <span>$380</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="mb-4 text-lg font-semibold">
                Payment Method
              </h3>

              <div className="space-y-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />

                  <span>Cash On Delivery</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                  />

                  <span>Stripe Payment</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                  />

                  <span>PayPal</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                  />

                  <span>bKash</span>
                </label>
              </div>
            </div>

            <button className="mt-8 h-14 w-full rounded-xl bg-black font-medium text-white transition hover:bg-gray-800">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}