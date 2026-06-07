export default function ReviewsTab() {
  return (
    <div className="space-y-6">

      <div className="rounded-3xl border p-6">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="font-semibold">
            John Doe
          </h4>

          <span>
            ⭐⭐⭐⭐⭐
          </span>
        </div>

        <p className="text-gray-600">
          Amazing quality and fast delivery.
        </p>
      </div>

      <div className="rounded-3xl border p-6">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="font-semibold">
            Sarah
          </h4>

          <span>
            ⭐⭐⭐⭐
          </span>
        </div>

        <p className="text-gray-600">
          Very comfortable and stylish.
        </p>
      </div>

    </div>
  );
}