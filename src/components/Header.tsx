import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/Logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About RIMAL", path: "/about" },
  { label: "Our Businesses", path: "/businesses" },
  // { label: "Partners", path: "/partners" },
  { label: "Leadership", path: "/leadership" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-burgundy/95 backdrop-blur-md shadow-lg"
          : "bg-burgundy/90"
      }`}
    >
      <nav
        className={`section-padding flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="relative">
          <img
            src={Logo}
            alt="RIMAL"
            className={`transition-all duration-500 ${
              scrolled ? "h-10 opacity-90" : "h-12 opacity-80"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <li key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-primary-foreground font-medium"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block px-6 py-2.5 bg-gold text-secondary-foreground font-body text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground transition-transform duration-300"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-burgundy border-t border-primary-foreground/10"
          >
            <ul className="section-padding py-8 space-y-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block font-body text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block mt-4 px-6 py-2.5 bg-gold text-secondary-foreground font-body text-sm rounded-full transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
