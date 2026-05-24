"use client";

import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
  };

  return (
    <div className="bg-[#111] border border-gray-800 p-8 rounded-sm h-full flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">Full Name</label>
          <input 
            type="text" 
            placeholder="John Architect" 
            className="w-full bg-[#0a0a0a] border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
            required
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">Professional Email</label>
          <input 
            type="email" 
            placeholder="john@enterprise.com" 
            className="w-full bg-[#0a0a0a] border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
            required
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">Project Inquiry</label>
          <textarea 
            placeholder="Outline your technical requirements..." 
            rows={6}
            className="w-full bg-[#0a0a0a] border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold tracking-widest text-xs uppercase py-4 flex items-center justify-center gap-2 transition-colors mt-8"
        >
          INITIALIZE CONTACT <ArrowRight size={16} />
        </button>
      </form>
      
      <p className="text-center text-gray-500 text-xs mt-6">
        Encrypted transmission. Average response time: <span className="text-gray-300">24h</span>.
      </p>
    </div>
  );
}
