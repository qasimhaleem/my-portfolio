import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import PortfolioProjectCard from "@/components/projects/PortfolioProjectCard";
import FeaturedArticle from "@/components/projects/FeaturedArticle";
import ArticleCard from "@/components/projects/ArticleCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Nexus Engine",
      description: "Event-driven infrastructure for real-time telemetry processing at scale.",
      version: "v2.4.0",
      tags: ["Rust", "gRPC", "Kubernetes"],
      image: "/projects/nexus_engine_1779567482573.png"
    },
    {
      title: "Quantify Dashboard",
      description: "Financial analytics platform with high-precision visualization components.",
      version: null,
      tags: ["TypeScript", "D3.js", "Next.js"],
      image: "/projects/quantify_dashboard_1779567506239.png"
    },
    {
      title: "Ghost CLI",
      description: "Optimized command-line interface for automated deployment pipelines.",
      version: null,
      tags: ["Go", "Cobra", "Docker"],
      image: "/projects/ghost_cli_1779567527835.png"
    }
  ];

  const featuredArticle = {
    title: "The Architecture of Zero-Knowledge Proofs in Distributed Systems",
    description: "Exploring the cryptographic primitives required to build privacy-preserving consensus mechanisms for modern infrastructure.",
    readTime: "8 min read",
    image: "/projects/featured_article_bg_1779567547923.png"
  };

  const articles = [
    {
      title: "Scaling Beyond 1M Concurrent WebSockets",
      description: "Lessons learned from optimizing the Linux kernel and application layer for high-throughput messaging.",
      category: "System Design",
      readTime: "8 min read",
      author: "Alex Rivera",
      date: "Oct 12, 2023"
    },
    {
      title: "Garbage Collection in High-Performance Go",
      description: "A deep dive into the runtime allocator and techniques for minimizing pause times in latency-critical code.",
      category: "Performance",
      readTime: "4 min read",
      author: "Alex Rivera",
      date: "Sep 28, 2023"
    },
    {
      title: "Infrastructure as Type-Safe Code",
      description: "Using Pulumi and TypeScript to build reusable, verifiable infrastructure components for multi-cloud environments.",
      category: "DevOps",
      readTime: "12 min read",
      author: "Alex Rivera",
      date: "Aug 15, 2023"
    },
    {
      title: "Modern Authentication with WebAuthn",
      description: "Transitioning to a passwordless future using biometric verification and hardware security keys.",
      category: "Security",
      readTime: "6 min read",
      author: "Alex Rivera",
      date: "Jul 30, 2023"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              System Portfolio
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A curated collection of architectural designs and full-stack implementations engineered for scalability.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded border border-gray-700 hover:bg-gray-700 transition-colors">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-[#111] text-gray-400 rounded border border-gray-800 hover:text-white hover:border-gray-700 transition-colors">
              Full-Stack
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-[#111] text-gray-400 rounded border border-gray-800 hover:text-white hover:border-gray-700 transition-colors">
              Open Source
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, idx) => (
            <PortfolioProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* Technical Writing Section */}
        <div className="mb-12 flex items-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mr-6">
            Technical Writing
          </h2>
          <div className="h-px bg-gray-800 flex-grow"></div>
        </div>

        {/* Featured Article */}
        <div className="mb-8">
          <FeaturedArticle article={featuredArticle} />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-16">
          <button className="px-6 py-3 text-sm font-medium bg-transparent text-white rounded border border-gray-700 hover:bg-gray-800 transition-colors">
            Load More Articles
          </button>
        </div>

      </main>
      <Footer />
    </>
  );
}
