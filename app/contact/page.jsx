import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ImageCard from "@/components/contact/ImageCard";
import { AtSign, Monitor, Globe, MessageSquare, Code } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-8 py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            
            {/* Left Column */}
            <div>
              <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6 block">Gateway Access</span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white font-serif mb-8 leading-tight">
                Let&apos;s build the future of architecture.
              </h1>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12">
                Open for high-level technical consultation, enterprise software architecture, and strategic development partnerships.
              </p>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-6 p-6 border border-gray-800 bg-[#111] rounded-sm">
                  <div className="flex-shrink-0 text-gray-300">
                    <AtSign size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-1">Primary Email</div>
                    <div className="text-white font-bold text-sm tracking-wide">hello@devarchitect.io</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 border border-gray-800 bg-[#111] rounded-sm">
                  <div className="flex-shrink-0 text-gray-300">
                    <Monitor size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-1">Office Hours</div>
                    <div className="text-white font-bold text-sm tracking-wide">Mon — Fri, 09:00 - 18:00 UTC</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-2 px-6 py-3 border border-gray-800 bg-[#111] hover:bg-gray-800 transition-colors rounded-sm text-[10px] font-bold text-gray-300 tracking-widest uppercase">
                  <Code size={14} /> GITHUB
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 border border-gray-800 bg-[#111] hover:bg-gray-800 transition-colors rounded-sm text-[10px] font-bold text-gray-300 tracking-widest uppercase">
                  <Globe size={14} /> LINKEDIN
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 border border-gray-800 bg-[#111] hover:bg-gray-800 transition-colors rounded-sm text-[10px] font-bold text-gray-300 tracking-widest uppercase">
                  <MessageSquare size={14} /> TWITTER
                </a>
              </div>
            </div>
            
            {/* Right Column (Form) */}
            <div>
              <ContactForm />
            </div>
          </div>
          
          {/* Bottom Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-gray-800/50">
            <ImageCard title="Server Architecture" image="/contact/server_architecture_bg_1779568486677.png" />
            <ImageCard title="Cloud Scalability" image="/contact/cloud_scalability_bg_1779568513976.png" />
            <ImageCard title="Global Connectivity" image="/contact/global_connectivity_bg_1779568543928.png" />
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
