import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "./header";
import Footer from "./footer";


export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Latest Construction Technology Transforming the Industry",
      excerpt: "Discover the cutting-edge technologies like BIM, AI, and drones that are revolutionizing construction and improving project efficiency by 40%.",
      date: "March 5, 2026",
      author: "John Smith",
      category: "Technology",
      readTime: "5 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/commercial-building-modern-Bnv4AGXpLtwtkqCpnZk7kQ.webp",
    },
    {
      id: 2,
      title: "Tips for Building Your Dream Home",
      excerpt: "Essential tips and considerations when planning and constructing your perfect residential space. Learn from our 15+ years of experience.",
      date: "February 28, 2026",
      author: "Sarah Johnson",
      category: "Residential",
      readTime: "7 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/luxury-residential-villa-hYoHue2YGSaZkHPhjF58By.webp",
    },
    {
      id: 3,
      title: "Cost Planning for Construction Projects",
      excerpt: "Learn how to effectively plan and manage budgets for construction projects without compromising quality. Includes real-world case studies.",
      date: "February 20, 2026",
      author: "Mike Davis",
      category: "Planning",
      readTime: "6 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/industrial-warehouse-complex-WaQTRxxMLuT39KQaWZyNLk.webp",
    },
    {
      id: 4,
      title: "Sustainable Construction Practices",
      excerpt: "Explore eco-friendly construction methods that reduce environmental impact while maintaining structural integrity and lowering operating costs.",
      date: "February 10, 2026",
      author: "Emma Wilson",
      category: "Sustainability",
      readTime: "8 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/hero-construction-site-EHvf53UCBRdCqxpyfpv8R3.webp",
    },
    {
      id: 5,
      title: "Safety Standards in Modern Construction",
      excerpt: "Understanding OSHA guidelines and best practices for maintaining a safe construction site. Our zero-accident approach explained.",
      date: "January 30, 2026",
      author: "Rajesh Kumar",
      category: "Safety",
      readTime: "6 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/commercial-building-modern-Bnv4AGXpLtwtkqCpnZk7kQ.webp",
    },
    {
      id: 6,
      title: "Commercial Real Estate Development Trends 2026",
      excerpt: "Explore the latest trends in commercial construction including smart buildings, flexible workspaces, and mixed-use developments.",
      date: "January 15, 2026",
      author: "Priya Nair",
      category: "Commercial",
      readTime: "7 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663347924636/MNMfoYPaXJ4fCCSVRMtre2/luxury-residential-villa-hYoHue2YGSaZkHPhjF58By.webp",
    },
  ];

  const categories = ["All", "Technology", "Residential", "Commercial", "Planning", "Sustainability", "Safety"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a5f] to-[#0f172a] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
                Construction Insights & Industry News
              </h1>
              <p className="text-xl text-gray-200">
                Stay updated with the latest trends, tips, and insights in the construction industry from our expert team
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-[#d97706] hover:text-white transition-all duration-300"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200">
              <div className="relative h-80 overflow-hidden rounded-lg group">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#d97706] text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                    Featured Article
                  </span>
                  <h2 className="font-display text-3xl font-bold text-[#1e3a5f] mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {articles[0].excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-300">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#d97706]" />
                      <span>{articles[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#d97706]" />
                      <span>{articles[0].author}</span>
                    </div>
                  </div>
                  <button className="text-[#d97706] hover:text-[#b45309] font-semibold flex items-center gap-2 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-[#d97706]/50 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block bg-[#d97706]/10 text-[#d97706] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-[#d97706]/20">
                      {article.category}
                    </span>

                    <h3 className="font-display text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#d97706] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#d97706]" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-[#d97706]" />
                        <span>{article.author}</span>
                      </div>
                      <span className="text-gray-500">{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-4xl font-bold mb-4">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest construction insights, industry news, and expert tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#d97706]/50 focus:ring-2 focus:ring-[#d97706]/20 transition-all"
                />
                <button className="px-8 py-3 bg-[#d97706] hover:bg-[#b45309] text-white font-semibold rounded-lg transition-colors duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
