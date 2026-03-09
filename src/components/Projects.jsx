import { useState } from "react";
import { MapPin, Calendar, Users, TrendingUp } from "lucide-react";
import Navbar from "./header";
import Footer from "./footer";


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Green Valley Residency",
      category: "Residential",
      description: "Residential apartment complex with modern architecture and eco-friendly design.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/luxury-residential-villa-hYoHue2YGSaZkHPhjF58By.webp",
      location: "Mumbai, Maharashtra",
      duration: "18 months",
      team: "45+ professionals",
      value: "₹25 Crores",
      details: "A premium residential complex featuring 200+ apartments with sustainable design, rainwater harvesting, and solar power integration. Completed 2 months ahead of schedule.",
      highlights: ["LEED Certified", "Smart Home Features", "Zero Waste Construction"],
    },
    {
      id: 2,
      name: "City Center Mall",
      category: "Commercial",
      description: "Large commercial shopping mall with advanced infrastructure.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/commercial-building-modern-Bnv4AGXpLtwtkqCpnZk7kQ.webp",
      location: "Bangalore, Karnataka",
      duration: "24 months",
      team: "60+ professionals",
      value: "₹45 Crores",
      details: "State-of-the-art shopping mall with 500,000 sq ft retail space, advanced HVAC systems, and modern security infrastructure. Won Best Commercial Project Award.",
      highlights: ["500K+ Sq Ft", "Advanced Security", "Energy Efficient"],
    },
    {
      id: 3,
      name: "Sunrise Villa Project",
      category: "Residential",
      description: "Luxury residential villas designed with modern aesthetics.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/luxury-residential-villa-hYoHue2YGSaZkHPhjF58By.webp",
      location: "Pune, Maharashtra",
      duration: "14 months",
      team: "35+ professionals",
      value: "₹18 Crores",
      details: "Exclusive luxury villa community with 50 villas featuring private pools, landscaped gardens, and premium finishes. 100% client satisfaction rating.",
      highlights: ["Luxury Finishes", "Private Pools", "Gated Community"],
    },
    {
      id: 4,
      name: "Industrial Warehouse Complex",
      category: "Industrial",
      description: "Large storage and logistics warehouse with advanced structural design.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/industrial-warehouse-complex-WaQTRxxMLuT39KQaWZyNLk.webp",
      location: "Hyderabad, Telangana",
      duration: "16 months",
      team: "50+ professionals",
      value: "₹32 Crores",
      details: "Modern warehouse facility spanning 300,000 sq ft with advanced storage systems, automated handling equipment, and climate control. Operational efficiency increased by 40%.",
      highlights: ["300K+ Sq Ft", "Automated Systems", "Climate Control"],
    },
  ];

  const categories = ["all", "Residential", "Commercial", "Industrial"];
  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
                Our Recent Projects
              </h1>
              <p className="text-xl text-gray-200">
                Showcasing our expertise across residential, commercial, and industrial sectors with detailed case studies
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#d97706] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden rounded-lg group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block bg-[#d97706] text-white text-xs font-bold px-4 py-2 rounded-full mb-2">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-3xl font-bold text-[#1e3a5f] mb-4">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {project.details}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-[#d97706]/10 text-[#d97706] text-xs font-semibold px-3 py-1 rounded-full border border-[#d97706]/20">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-300">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#d97706]" />
                        <div>
                          <p className="text-xs text-gray-600">Location</p>
                          <p className="font-semibold text-gray-800">{project.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#d97706]" />
                        <div>
                          <p className="text-xs text-gray-600">Duration</p>
                          <p className="font-semibold text-gray-800">{project.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-[#d97706]" />
                        <div>
                          <p className="text-xs text-gray-600">Team Size</p>
                          <p className="font-semibold text-gray-800">{project.team}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-[#d97706]" />
                        <div>
                          <p className="text-xs text-gray-600">Project Value</p>
                          <p className="font-semibold text-gray-800">{project.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "15+", label: "Years Experience" },
                { number: "₹500Cr+", label: "Total Project Value" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-5xl font-bold text-[#d97706] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
