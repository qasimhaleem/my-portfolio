import Image from "next/image";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { CheckCircle2, Building2 } from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-16">
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
              
              {/* Experience Item 1 */}
              <div className="mb-12 ml-8 relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-[#0a0a0a]"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl font-bold text-white">Principal Solutions Architect</h3>
                  <span className="inline-block px-3 py-1 text-sm text-gray-400 border border-gray-700 rounded-full bg-[#111]">
                    2021 — PRESENT
                  </span>
                </div>
                
                <div className="flex items-center text-indigo-400 mb-4 font-medium">
                  <Building2 size={18} className="mr-2" />
                  Global Tech Dynamics
                </div>
                
                <div className="p-6 rounded-xl border border-gray-800 bg-[#111] bg-opacity-50 text-gray-400 text-sm leading-relaxed space-y-4">
                  <p>
                    Leading the architectural transformation of cloud-native services serving 50M+ monthly users. Orchestrated the migration from legacy monolith to a globally distributed microservices architecture using Rust and Kubernetes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduced operational costs by 40% through infrastructure optimization.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 size={16} className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Established CI/CD protocols reducing deployment time by 75%.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="mb-12 ml-8 relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-gray-600 ring-4 ring-[#0a0a0a]"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl font-bold text-white">Senior Engineering Lead</h3>
                  <span className="inline-block px-3 py-1 text-sm text-gray-400 border border-gray-700 rounded-full bg-[#111]">
                    2018 — 2021
                  </span>
                </div>
                
                <div className="flex items-center text-indigo-400 mb-4 font-medium">
                  <Building2 size={18} className="mr-2" />
                  Nexus Flow Systems
                </div>
                
                <div className="p-6 rounded-xl border border-gray-800 bg-[#111] bg-opacity-50 text-gray-400 text-sm leading-relaxed">
                  <p>
                    Managed a cross-functional team of 15 engineers focusing on real-time data visualization platforms. Implemented a custom component library that standardized UI across 4 major product lines.
                  </p>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="ml-8 relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-gray-600 ring-4 ring-[#0a0a0a]"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                  <span className="inline-block px-3 py-1 text-sm text-gray-400 border border-gray-700 rounded-full bg-[#111]">
                    2015 — 2018
                  </span>
                </div>
                
                <div className="flex items-center text-indigo-400 mb-4 font-medium">
                  <Building2 size={18} className="mr-2" />
                  CodeCraft Studios
                </div>
                
                <div className="p-6 rounded-xl border border-gray-800 bg-[#111] bg-opacity-50 text-gray-400 text-sm leading-relaxed">
                  <p>
                    Developed high-performance web applications for early-stage startups. Specialized in React ecosystem and Node.js backend integration with focus on sub-second load times.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
