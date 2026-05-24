export default function ArticleCard({ article }) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 bg-[#0d0d0d] hover:border-gray-600 transition-colors flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-indigo-400 text-xs font-bold tracking-wide">
          {article.category}
        </span>
        <span className="text-gray-500 text-xs font-medium">
          {article.readTime}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-snug">
        {article.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {article.description}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-800/50 mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex-shrink-0"></div>
          <span className="text-gray-300 text-sm">{article.author}</span>
        </div>
        <span className="text-gray-500 text-xs">{article.date}</span>
      </div>
    </div>
  );
}
