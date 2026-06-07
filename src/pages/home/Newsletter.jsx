import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl bg-cover bg-center mx-7 py-16 px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20250110/original/pngtree-abstract-curves-with-blue-and-yellow-gradient-smooth-transitions-picture-image_16057019.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Left Side */}
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/50">
            <Mail className="h-10 w-10 text-white" strokeWidth={1.5} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">
              Subscribe Newsletter
            </h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="max-w-xl">
          <p className="mb-5 text-gray-200">
            Stay updated with our latest products, special offers, and exciting
            news delivered directly to your inbox.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Your Name"
              className="h-12 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-gray-300 outline-none backdrop-blur-sm"
            />

            <button className="h-12 rounded-lg bg-white px-8 font-semibold text-black transition hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

