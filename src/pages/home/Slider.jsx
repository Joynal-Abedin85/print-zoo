import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const slides = [
  {
    id: 1,
    title: "Build Modern Websites",
    desc: "Create fast, responsive UI using React & Tailwind CSS.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Design Better Experience",
    desc: "Clean UI/UX design system for production apps.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Deploy Faster",
    desc: "Ship your project quickly with modern tools.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Slider() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Fade(),
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="bg-blue-200">
      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-0 flex-[0_0_100%]"
            >
              <div className="mx-auto  px-16 py-16 md:py-24">
                <div className="flex flex-col items-center gap-10 md:flex-row">

                  {/* Left Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-5 text-lg text-gray-700">
                      {slide.desc}
                    </p>

                    <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
                      Get Started
                    </button>
                  </div>

                  {/* Right Image */}
                  <div className="flex flex-1 justify-center">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full max-w-md rounded-2xl object-cover shadow-xl md:max-w-lg"
                    />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}