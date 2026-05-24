import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function PortfolioProjectCard({ project }) {
  return (
    <div className="group border border-gray-800 rounded-xl overflow-hidden bg-[#0d0d0d] hover:border-gray-600 transition-colors flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden border-b border-gray-800 bg-[#161616]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        {project.version && (
          <div className="absolute top-4 left-4 bg-indigo-500/20 text-indigo-300 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded border border-indigo-500/30 backdrop-blur-md">
            {project.version}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium border border-gray-700 text-gray-300 rounded bg-[#161616]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
