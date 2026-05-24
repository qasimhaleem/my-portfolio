import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import PortfolioProjectCard from "@/components/projects/PortfolioProjectCard";
import FeaturedArticle from "@/components/projects/FeaturedArticle";
import ArticleCard from "@/components/projects/ArticleCard";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const featuredArticle = {
    title: "The Architecture of Zero-Knowledge Proofs in Distributed Systems",
    description: "Exploring the cryptographic primitives required to build privacy-preserving consensus mechanisms for modern infrastructure.",
    readTime: "8 min read",
    image: "/projects/featured_article_bg_1779567547923.png"
  };

  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 4
  });

  return (
    <>
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-12 min-h-[calc(100vh-88px)]">
        
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
