import { useState } from "react";
import { Link } from "wouter";
import { Menu, X,Phone } from "lucide-react";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">BC</span>
            </div>
            <span className="text-lg font-bold text-[#1e3a5f] hidden sm:inline">
              BuildCore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#d97706] transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">

            {/* Desktop Button */}
            <button className="hidden sm:inline-flex bg-[#d97706] hover:bg-[#b45309] text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                             <Phone className="w-5 h-5 text-[#fffdfa] flex-shrink-0" />

              <a href="tel:+919876543210" className="text-white hover:text-[#ffffff] transition-colors text-sm">
                  +91 98765 43210
                </a>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#d97706] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button className="w-full mt-4 bg-[#d97706] hover:bg-[#b45309] text-white py-2 rounded-lg font-medium">
              Get Quote
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}