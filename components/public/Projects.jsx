import { ExternalLink, ArrowRight } from 'lucide-react';

const Github = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Quantum Finance Platform",
      description: "A high-frequency trading engine and visualization platform handling $2M+ daily transactions with sub-100ms latency.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
      badge: "99% Lighthouse Score",
      tags: ["Next.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "Nexus Cloud Orchestrator",
      description: "Autonomous scaling engine for multi-cloud deployments featuring real-time telemetry and predictive resource allocation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
      badge: "95% Performance",
      tags: ["Kubernetes", "Go", "gRPC"]
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto w-full border-b border-gray-800">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Case Studies</p>
          <h2 className="text-3xl font-bold text-white font-serif">Featured Projects</h2>
        </div>
        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
          View All Archives <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group border border-gray-800 rounded-lg overflow-hidden bg-[#111] hover:border-gray-700 transition-colors">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-gray-700 px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs text-gray-300 font-medium">{project.badge}</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium px-2.5 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-3 font-serif">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
