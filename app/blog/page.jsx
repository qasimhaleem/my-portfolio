import Image from 'next/image';
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import Callout from "@/components/blog/Callout";
import CodeBlock from "@/components/blog/CodeBlock";
import Newsletter from "@/components/blog/Newsletter";
import { Share2, MessageSquare, Bookmark, Heart } from 'lucide-react';

export default function BlogPost() {
  const codeSnippet = `async function processOrder(orderId: string) {
  const order = await OrderRepo.findById(orderId);

  // Publish Event instead of direct HTTP call
  await eventBus.publish("order.created", {
    id: order.id,
    amount: order.total,
    items: order.lineItems,
    timestamp: new Date().toISOString()
  });

  return { status: "processing_initiated" };
}`;

  return (
    <>
      <Navbar />
      <main className="flex-grow w-full pb-16 min-h-[calc(100vh-88px)]">
        
        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-8 pt-12 pb-12">
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest mb-6">
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded">ARCHITECTURE</span>
            <span className="text-gray-500">OCTOBER 24, 2023</span>
            <span className="text-gray-500">• 14 MIN READ</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-8">
            Designing Resilient Microservices with Event-Driven Architecture
          </h1>
          
          <div className="border-l-4 border-indigo-500 pl-6 py-1 mb-10">
            <p className="text-xl md:text-2xl text-gray-400 font-serif italic leading-relaxed">
              A deep dive into building systems that remain robust under extreme scale and unpredictable failure patterns using asynchronous messaging and stateful streams.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-800">
              <Image 
                src="/profile.png" 
                alt="Alex Rivera" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-white font-bold text-lg">Alex Rivera</div>
              <div className="text-gray-500 text-sm">Senior Staff Engineer</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-16">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <Image 
              src="/blog/hero.png" 
              alt="Data streams in a server room" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content & Sidebar */}
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col items-center gap-6 sticky top-32 h-fit">
            <button className="w-12 h-12 rounded-full border border-gray-800 bg-[#111] hover:bg-gray-800 hover:border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <Share2 size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-800 bg-[#111] hover:bg-gray-800 hover:border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <MessageSquare size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-800 bg-[#111] hover:bg-gray-800 hover:border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <Bookmark size={20} />
            </button>
            
            <div className="w-px h-8 bg-gray-800 my-2"></div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold text-gray-400">1.5k</span>
              <button className="text-gray-500 hover:text-rose-500 transition-colors">
                <Heart size={24} />
              </button>
            </div>
          </aside>
          
          {/* Main Content */}
          <article className="flex-grow max-w-3xl">
            
            <h2 className="text-3xl font-bold text-white tracking-tight mb-6 mt-0">The Paradigm Shift</h2>
            
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                In modern distributed systems, the traditional request-response model often becomes a bottleneck. As systems grow, tight coupling leads to cascading failures. Event-driven architecture (EDA) decouples these components, allowing services to communicate via events. This shift ensures that even if a downstream service is temporarily unavailable, the producer can continue its operations without blocking.
              </p>
              
              <Callout title="Architect's Note">
                Ensure your events are idempotent. In a distributed environment, &quot;exactly once&quot; delivery is often a myth; design your consumers to handle duplicate messages gracefully to maintain data integrity.
              </Callout>
              
              <p>
                Consider a simple order processing system. In a monolithic or synchronous setup, the Order Service would wait for the Payment, Inventory, and Shipping services to respond before confirming the order to the user.
              </p>
              
              <h2 className="text-3xl font-bold text-white tracking-tight mb-6 mt-12">Implementation in Node.js</h2>
              
              <CodeBlock filename="order-service.js" code={codeSnippet} />
              
              <p>
                By leveraging stateful streams, we can aggregate events in real-time. This is particularly useful for dashboards and analytics where immediate consistency isn&apos;t as critical as high throughput and low latency.
              </p>
              
              <h2 className="text-3xl font-bold text-white tracking-tight mb-6 mt-12">Addressing Consistency</h2>
              
              <p>
                Eventually consistent systems require a change in mindset. We trade immediate global state for high availability and partition tolerance (the AP in CAP theorem). To manage this, we implement sagas for distributed transactions, ensuring that any failed step triggers a compensating action to maintain a valid system state.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-800">
              {['MICROSERVICES', 'NODE.JS', 'SYSTEM DESIGN', 'ARCHITECTURE'].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-bold tracking-wider border border-gray-800 text-gray-400 rounded-full bg-[#111] hover:text-gray-300 hover:border-gray-700 transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Newsletter */}
            <Newsletter />
            
          </article>
        </div>
        
      </main>
      <Footer />
    </>
  );
}
