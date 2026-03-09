import { Home, Building2, Factory, Hammer, ClipboardList, CheckCircle2 } from "lucide-react";
import Navbar from "./header";
import Footer from "./footer";


export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "We build modern homes, apartments, and villas designed for comfort and durability.",
      items: [
        "House construction from ground up",
        "Multi-story apartment buildings",
        "Renovation and remodeling projects",
        "Interior finishing and design",
        "Sustainable home features",
      ],
      benefits: "Personalized designs, Quality materials, On-time delivery",
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "We develop commercial spaces designed for business success.",
      items: [
        "Office buildings and complexes",
        "Shopping malls and retail centers",
        "Retail stores and showrooms",
        "Hotels, restaurants, and hospitality",
        "Corporate headquarters",
      ],
      benefits: "Modern infrastructure, Advanced security, Energy efficient",
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description: "We provide construction services for factories, warehouses, and industrial plants.",
      items: [
        "Warehouse construction and design",
        "Factory buildings and plants",
        "Industrial infrastructure",
        "Logistics centers",
        "Manufacturing facilities",
      ],
      benefits: "Structural strength, Safety compliance, Operational efficiency",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "We transform old buildings into modern and functional spaces.",
      items: [
        "Complete building renovation",
        "Structural repair and reinforcement",
        "Interior redesign and modernization",
        "Facade upgrades",
        "Adaptive reuse projects",
      ],
      benefits: "Cost-effective, Minimal disruption, Modern aesthetics",
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "Our project management services ensure efficient planning, budgeting, and execution.",
      items: [
        "Comprehensive construction planning",
        "Budget management and cost control",
        "Site supervision and quality checks",
        "Quality control and compliance",
        "Timeline management",
      ],
      benefits: "Transparent reporting, Risk management, Quality assurance",
    },
    {
      icon: Home,
      title: "Sustainable Construction",
      description: "Eco-friendly construction practices for a better future.",
      items: [
        "Green building certification",
        "Solar power integration",
        "Rainwater harvesting systems",
        "Waste management solutions",
        "Energy-efficient designs",
      ],
      benefits: "Lower operating costs, Environmental responsibility, Future-proof",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
                Our Construction Services
              </h1>
              <p className="text-xl text-gray-200">
                Comprehensive construction solutions tailored to meet your unique project requirements with excellence and innovation
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                  >
                    <Icon className="w-12 h-12 text-[#d97706] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#d97706] mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-300">
                      <p className="text-xs text-gray-600">
                        <strong>Key Benefits:</strong> {service.benefits}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
                Our Construction Process
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Planning", desc: "Detailed project planning and design" },
                  { step: "2", title: "Preparation", desc: "Site preparation and resource allocation" },
                  { step: "3", title: "Execution", desc: "Construction with quality oversight" },
                  { step: "4", title: "Completion", desc: "Final inspection and handover" },
                ].map((process, index) => (
                  <div key={index} className="relative">
                    <div className="p-6 bg-white rounded-lg border border-gray-200 text-center hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#d97706] text-white rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto mb-4">
                        {process.step}
                      </div>
                      <h3 className="font-display font-bold text-[#1e3a5f] mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {process.desc}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#d97706] transform -translate-y-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Services Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl font-bold mb-12 text-center">
                Why Choose Our Services?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Expert Team",
                    desc: "Our professionals bring 15+ years of expertise in construction and engineering with proven track records",
                  },
                  {
                    title: "Quality Materials",
                    desc: "We use only ISO-certified, high-quality materials to ensure durability and strength",
                  },
                  {
                    title: "Modern Technology",
                    desc: "We use cutting-edge construction techniques and latest equipment for efficiency",
                  },
                  {
                    title: "On-Time Delivery",
                    desc: "We follow strict timelines and maintain 99% on-time project completion rate",
                  },
                  {
                    title: "Transparent Communication",
                    desc: "Regular updates and clear communication throughout the project lifecycle",
                  },
                  {
                    title: "Cost Efficiency",
                    desc: "Competitive pricing with no hidden costs and detailed budget breakdowns",
                  },
                ].map((reason, index) => (
                  <div key={index} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 hover:border-[#d97706]/50 transition-all duration-300">
                    <h3 className="font-display text-xl font-bold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-300">{reason.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
