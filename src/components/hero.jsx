import { CheckCircle2, Users, Zap, Clock, DollarSign, Shield, Award, TrendingUp, Briefcase } from "lucide-react";
import { Link } from "wouter";
import Navbar from "./header";
import Footer from "./footer";


export default function Hero() {
  const highlights = [
    { icon: Users, label: "Experienced Engineering Team", desc: "15+ years of combined expertise" },
    { icon: Shield, label: "High Quality Materials", desc: "ISO certified suppliers only" },
    { icon: Clock, label: "On-Time Project Delivery", desc: "99% on-time completion rate" },
    { icon: DollarSign, label: "Affordable Pricing", desc: "Competitive rates without compromise" },
    { icon: Zap, label: "Modern Construction Technology", desc: "Latest tools and equipment" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Briefcase },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "15+", label: "Years in Industry", icon: TrendingUp },
    { number: "200+", label: "Happy Clients", icon: Users },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Homeowner",
      text: "BuildCore Construction delivered my dream house exactly as planned. The team was professional, punctual, and the quality of work exceeded my expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Verma",
      role: "Business Owner",
      text: "They completed our office building on time and within budget. The attention to detail and project management was outstanding. We're already planning our next project with them.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Property Developer",
      text: "A reliable construction partner for large-scale projects. Their transparency, quality standards, and ability to handle complex projects make them stand out in the industry.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Premium Design */}
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <div className="px-6 sm:px-8 lg:px-12 py-16 lg:py-24 bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb]">
              <div className="max-w-xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#d97706]/10 border border-[#d97706]/20 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-[#d97706] rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-[#d97706]">Award-Winning Construction Company</span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1e3a5f] leading-tight mb-6">
                  Building Strong Foundations for Tomorrow
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Reliable construction solutions for residential, commercial, and industrial projects. We combine innovative engineering with skilled craftsmanship to create structures that stand the test of time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact" className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                    Contact Us
                  </Link>
                  <Link href="/Projects" variant="outline" className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300">
                    View Our Projects
                  </Link>
                  
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
                    <span>ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
                    <span>Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-full min-h-96 lg:min-h-screen overflow-hidden group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/hero-construction-site-EHvf53UCBRdCqxpyfpv8R3.webp"
                alt="Construction Site"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/30 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Diagonal Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
            clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
          }}></div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 text-[#d97706] mx-auto mb-3" />
                    <div className="font-display text-4xl font-bold text-[#1e3a5f] mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
                  Why BuildCore Construction?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At BuildCore Construction, we believe every structure tells a story. Our team of experienced engineers, architects, and project managers work together to deliver projects that meet the highest standards of quality and safety.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                    Our Expertise
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    From small residential projects to large commercial developments, we ensure excellence at every stage. Our portfolio spans residential, commercial, and industrial sectors with a proven track record of successful project delivery across diverse geographies.
                  </p>
                </div>

                <div className="p-8 bg-gradient-to-br from-[#d97706]/10 to-[#d97706]/5 rounded-lg border border-[#d97706]/20 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We focus on building long-lasting relationships with our clients by delivering projects on time, maintaining transparency, and ensuring the highest safety and quality standards. Your satisfaction is our success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Why Choose BuildCore?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our commitment to excellence, innovation, and customer satisfaction sets us apart in the construction industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-300 hover:border-[#d97706]/50 group hover:shadow-2xl hover:-translate-y-2"
                  >
                    <Icon className="w-12 h-12 text-[#d97706] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-display text-xl font-bold mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-200 text-sm mb-3">
                      {item.desc}
                    </p>
                    <p className="text-gray-300 text-sm">
                      Delivering excellence in every project we undertake
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by hundreds of satisfied clients across residential, commercial, and industrial sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#d97706] text-lg">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-display font-bold text-[#1e3a5f]">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team today and let's discuss your construction needs. We offer free consultations!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/Projects" className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  View our Projects
                </Link>
                <Link href="/contact">
                  <a>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 w-full">
                      Contact Us
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
