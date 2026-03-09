import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#d97706] rounded-lg flex items-center justify-center">
                <span className="font-display text-lg font-bold">BC</span>
              </div>
              <span className="font-display text-xl font-bold">BuildCore</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the Future with Strength and Trust. Delivering high-quality construction solutions for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-gray-300 hover:text-[#d97706] transition-colors text-sm">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Residential Construction",
                "Commercial Construction",
                "Industrial Construction",
                "Renovation & Remodeling",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Business Park, City Center, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#d97706] transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d97706] flex-shrink-0" />
                <a href="mailto:info@buildcoreconstruction.com" className="text-gray-300 hover:text-[#d97706] transition-colors text-sm">
                  info@buildcore.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 BuildCore Construction Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#d97706] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d97706] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
