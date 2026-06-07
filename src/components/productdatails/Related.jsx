
export default function RelatedProducts({
  relatedProducts,
}) {
  return (
<section className="mt-24">
  <div className="mb-10 text-center">
    <h2 className="text-4xl font-bold">
      Related Products
    </h2>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {relatedProducts.map((product) => (
      <div
        key={product.id}
        className=" overflow-hidden rounded-2xl border border-gray-200 bg-white"
      >
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[5/3] w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center gap-1 text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>

          <h3 className="mb-2 text-lg font-semibold">
            {product.name}
          </h3>

          <p className="mb-4 text-xl font-bold">
            ${product.price}
          </p>

          <button className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:opacity-90">
            View Product
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}