import { Heart, Eye, Shield, Users, Award, Zap } from "lucide-react";
import Navbar from "./header";
import Footer from "./footer";


export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain transparency and honesty in every project, building trust with our clients and partners through clear communication and ethical practices.",
    },
    {
      icon: Shield,
      title: "Quality",
      description: "We never compromise on materials or construction standards, ensuring durability and excellence. Every project meets or exceeds industry benchmarks.",
    },
    {
      icon: Users,
      title: "Safety",
      description: "Ensuring worker and site safety is our top priority. We follow strict OSHA guidelines and maintain zero-accident records on most projects.",
    },
    {
      icon: Eye,
      title: "Customer Satisfaction",
      description: "Our goal is to build lasting relationships with our clients through exceptional service, timely delivery, and continuous support.",
    },
  ];

  const teamMembers = [
    {
      role: "CEO / Founder",
      name: "Vikram Patel",
      desc: "20+ years in construction industry. Leads company vision and strategic planning.",
      expertise: "Project Leadership",
    },
    {
      role: "Chief Project Manager",
      name: "Anjali Desai",
      desc: "Expert in project planning, timelines, and resource management. 15+ years experience.",
      expertise: "Project Management",
    },
    {
      role: "Lead Architect",
      name: "Rohan Sharma",
      desc: "Designs innovative and functional structures. Award-winning architect with 12+ years experience.",
      expertise: "Architectural Design",
    },
    {
      role: "Senior Civil Engineer",
      name: "Priya Nair",
      desc: "Ensures structural strength and safety. Expert in sustainable construction practices.",
      expertise: "Civil Engineering",
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
                About BuildCore Construction
              </h1>
              <p className="text-xl text-gray-200">
                A fast-growing construction startup focused on delivering reliable and innovative building solutions with excellence and integrity. Trusted by 200+ clients across India.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  BuildCore Construction is a fast-growing construction startup focused on delivering reliable and innovative building solutions. Since our inception in 2011, we have worked with homeowners, businesses, and developers to create structures that stand the test of time. Our portfolio includes 500+ completed projects across residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our team includes skilled engineers, architects, construction managers, and technicians who bring years of experience to every project. We combine cutting-edge construction technologies with traditional craftsmanship to deliver exceptional results. Our commitment to continuous learning and innovation keeps us at the forefront of the construction industry.
                </p>
                <p>
                  Our mission is to transform ideas into reality by constructing spaces where people live, work, and grow. We believe in the power of quality construction to create lasting positive impact on communities and the environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To deliver high-quality construction services that exceed client expectations while maintaining safety, sustainability, and innovation. We are committed to building structures that are not only beautiful but also durable, cost-effective, and environmentally responsible.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Our Promise:</strong> Every project completed on time, within budget, and with zero compromises on quality.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1e3a5f] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To become one of the most trusted construction companies known for quality, reliability, and modern engineering practices. We aspire to be the preferred partner for construction projects across residential, commercial, and industrial sectors.
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Our Goal:</strong> Lead the construction industry with sustainable, innovative, and client-centric solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600">
                  These principles guide every decision we make and every project we undertake
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <Icon className="w-10 h-10 text-[#d97706] mb-4" />
                      <h3 className="font-display text-xl font-bold text-[#1e3a5f] mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold mb-4">
                  Our Leadership Team
                </h2>
                <p className="text-xl text-gray-300">
                  Experienced professionals dedicated to excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-all duration-300 hover:border-[#d97706]/50 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold mb-1">
                          {member.role}
                        </h3>
                        <p className="text-[#d97706] font-semibold text-sm">
                          {member.name}
                        </p>
                      </div>
                      <Award className="w-6 h-6 text-[#d97706]" />
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {member.desc}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <span className="inline-block bg-[#d97706]/20 text-[#d97706] text-xs font-semibold px-3 py-1 rounded-full">
                        {member.expertise}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
                Our Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Award, title: "Industry Recognition", desc: "Awarded Best Construction Company 2023-2024" },
                  { icon: Shield, title: "Safety Excellence", desc: "Zero-accident record maintained for 3+ years" },
                  { icon: Zap, title: "Innovation Leader", desc: "Pioneering sustainable construction practices" },
                ].map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="text-center p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200 hover:border-[#d97706]/50 hover:shadow-lg transition-all duration-300">
                      <Icon className="w-12 h-12 text-[#d97706] mx-auto mb-4" />
                      <h3 className="font-display text-xl font-bold text-[#1e3a5f] mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-700">
                        {achievement.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
