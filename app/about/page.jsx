import Image from "next/image";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { CheckCircle2, Building2 } from "lucide-react";

import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function About() {
  const experiences = await prisma.experience.findMany({
    orderBy: { startDate: 'desc' }
  });

  return (
    <>
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-12 min-h-[calc(100vh-88px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/profile.png"
                alt="System Architect"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                System Architect & Creative Developer
              </h1>
              
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I build resilient digital infrastructures and high-performance user experiences. With over a decade of experience in full-stack engineering, I specialize in bridging the gap between complex backend systems and intuitive, minimalist design interfaces.
                </p>
                <p>
                  Based in San Francisco, working globally with teams that value technical precision, scalability, and the &quot;less but better&quot; philosophy in software architecture.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Typescript", "Rust", "Kubernetes", "Next.js", "Go"].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm font-medium border border-gray-700 text-gray-300 rounded-md bg-[#111] hover:bg-gray-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="relative border-l border-gray-800 pb-8">
              
              {experiences.map((exp, idx) => (
                <div key={exp.id} className={`mb-12 ml-8 relative ${idx === experiences.length - 1 ? 'mb-0' : ''}`}>
                  <span className={`absolute -left-[37px] top-1 h-3 w-3 rounded-full ring-4 ring-[#0a0a0a] ${!exp.endDate ? 'bg-indigo-500' : 'bg-gray-600'}`}></span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="inline-block px-3 py-1 text-sm text-gray-400 border border-gray-700 rounded-full bg-[#111]">
                      {new Date(exp.startDate).getFullYear()} — {exp.endDate ? new Date(exp.endDate).getFullYear() : "PRESENT"}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-indigo-400 mb-4 font-medium">
                    <Building2 size={18} className="mr-2" />
                    {exp.company}
                  </div>
                  
                  <div className="p-6 rounded-xl border border-gray-800 bg-[#111] bg-opacity-50 text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">
                    {exp.description}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
