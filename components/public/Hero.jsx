export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0 px-8 max-w-7xl mx-auto w-full gap-12 border-b border-gray-800 min-h-[calc(100vh-88px)]">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span>Available for Q4 Projects</span>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight font-serif">
          Building Scalable, Production-Ready Applications
        </h1>
        
        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
          Architecting resilient digital systems with a focus on performance, security, and developer experience. From microservices to fluid frontends.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            View Live Work
          </button>
          <button className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Let's Chat
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full flex justify-end">
        <div className="relative w-full max-w-xl aspect-[4/3] rounded-lg overflow-hidden border border-gray-800 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1470&auto=format&fit=crop" 
            alt="Code on screen" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
