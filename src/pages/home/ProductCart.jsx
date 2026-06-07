const products = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    id: 3,
    name: "Wireless Headphone",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
];

export default function ProductCart() {
  return (
    <div className="mx-auto  px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full rounded-xl object-cover"
            />

            <h3 className="mt-4 text-xl font-bold text-gray-800">
              {product.name}
            </h3>

            <p className="mt-2 text-2xl font-semibold text-blue-700">
              {product.price}
            </p>

            <button className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

