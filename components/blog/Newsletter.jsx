"use client";

export default function Newsletter() {
  return (
    <div className="mt-24 pt-16 border-t border-gray-800 flex flex-col items-center text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Level up your architectural skills</h2>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Join 24,000+ engineers receiving bi-weekly deep dives into system design and high-performance computing.
      </p>
      
      <form className="flex w-full max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="architect@firm.com" 
          className="flex-grow bg-[#111] border border-gray-800 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
          required
        />
        <button 
          type="submit" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
