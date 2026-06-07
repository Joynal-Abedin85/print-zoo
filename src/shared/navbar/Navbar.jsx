import { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Example User
  const user = {
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=8",
  };

  // const user = null;

  const navLinks = [
    {
      title: "Home",
      items: ["Home One", "Home Two"],
    },
    {
      title: "Services",
      items: ["Web Development", "UI Design"],
    },
    {
      title: "Shop",
      items: ["Products", "Categories"],
    },
    {
      title: "Blog",
      items: ["Latest Posts", "News"],
    },
    {
      title: "Pages",
      items: ["About", "Contact"],
    },
  ];

  return (
    <header className="sticky top-0 z-50  bg-gradient-to-r from-white via-blue-200 to-cyan-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="https://imgs.search.brave.com/8E1UYLYq0FzuEX9iEv4LGKCKNFjmTRND7MuqxKYrtZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzIwLzM1LzczLzYy/LzM2MF9GXzIwMzU3/MzYyMzJfMDFTVUZU/YXNxR0ZNV1BoRkt2/dnpWSUJCR3dwNzRG/NlYuanBn" alt="logo" className="h-4" />

          <h2 className="text-xl font-bold">
            PrintBe
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="group relative "
            >
              <button className="flex hover:text-blue-600 items-center gap-2 font-medium text-gray-700 ">
                {link.title}
                <FaChevronDown className="text-xs" />
              </button>

              <div
                className="
                invisible absolute left-0 top-10 w-52
                translate-y-2 rounded-xl border
                bg-white opacity-0 shadow-lg
                transition-all duration-200
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
              >
                {link.items.map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="block px-4 py-3 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <FaSearch size={18} />
          </button>

          {/* User Section */}
          {!user ? (
            <button
              className="
                hidden lg:block
                rounded-lg bg-black px-5 py-2
                text-white transition
                hover:bg-gray-800
              "
            >
              Login
            </button>
          ) : (
            <div className="relative hidden lg:block group">
              <button>
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
              </button>

              <div
                className="
                  invisible absolute right-0 top-14
                  w-48 rounded-xl border bg-white
                  opacity-0 shadow-lg transition-all
                  group-hover:visible
                  group-hover:opacity-100
                "
              >
                <div className="border-b p-4">
                  <p className="font-medium">
                    {user.name}
                  </p>
                </div>

                <button className="w-full px-4 py-3 text-left hover:bg-gray-100">
                  Dashboard
                </button>

                <button className="w-full px-4 py-3 text-left text-red-500 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={() =>
              setIsMobileOpen(!isMobileOpen)
            }
            className="lg:hidden"
          >
            {isMobileOpen ? (
              <FaTimes size={22} />
            ) : (
              <FaBars size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-2 p-4">

            {navLinks.map((link, index) => (
              <div
                key={link.title}
                className="border-b pb-2"
              >
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === index
                        ? null
                        : index
                    )
                  }
                  className="flex w-full items-center justify-between py-2"
                >
                  {link.title}

                  <FaChevronDown
                    className={`transition ${
                      activeDropdown === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === index && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.items.map((item) => (
                      <a
                        key={item}
                        href="/"
                        className="block text-sm text-gray-600"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {!user ? (
              <button
                className="
                  mt-4 w-full rounded-lg
                  bg-black py-3 text-white
                "
              >
                Login
              </button>
            ) : (
              <div className="mt-4 space-y-2">
                <button className="w-full rounded-lg border py-3">
                  Dashboard
                </button>

                <button className="w-full rounded-lg border border-red-500 py-3 text-red-500">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};


export default Navbar;
