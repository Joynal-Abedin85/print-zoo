import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white mt-10 text-balck">
      <div className="mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h2 className="mb-4 text-2xl font-bold">FashionHub</h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Discover premium fashion collections designed to bring style,
              comfort, and confidence to your everyday lifestyle.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="rounded-full border border-balck/20 p-2 transition hover:bg-balck hover:text-black"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-balck/20 p-2 transition hover:bg-balck hover:text-black"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-balck/20 p-2 transition hover:bg-balck hover:text-black"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-balck/20 p-2 transition hover:bg-balck hover:text-black"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="mb-4 flex gap-3 text-gray-400">
              <MapPin size={18} className="mt-1 shrink-0" />
              <p>
                123 Fashion Street,
                <br />
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="flex gap-3 text-gray-400">
              <Phone size={18} className="mt-1 shrink-0" />
              <p>+880 1234 567 890</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Information</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-black">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Useful Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">About Us</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-black">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 FashionHub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

