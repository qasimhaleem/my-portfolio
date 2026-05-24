import Image from 'next/image';

export default function FeaturedArticle({ article }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800 group">
      <div className="absolute inset-0 z-0 bg-[#0d0d0d]">
        <Image 
          src={article.image}
          alt="Featured Article Background"
          fill
          className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded backdrop-blur-md">
            Featured
          </span>
          <span className="text-gray-300 text-sm font-medium">
            {article.readTime}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight max-w-3xl leading-tight">
          {article.title}
        </h3>
        
        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
          {article.description}
        </p>
      </div>
    </div>
  );
}
