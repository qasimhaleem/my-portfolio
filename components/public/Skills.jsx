export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: "layers",
      items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: "server",
      items: ["Node.js / Bun", "Go Lang", "gRPC / Protobuf", "GraphQL"]
    },
    {
      category: "Databases",
      icon: "database",
      items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"]
    },
    {
      category: "DevOps",
      icon: "terminal",
      items: ["Docker / K8s", "Terraform", "GitHub Actions", "AWS / GCP"]
    }
  ];

  const getIcon = (name) => {
    switch (name) {
      case 'layers': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
      case 'server': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>;
      case 'database': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
      case 'terminal': return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
      default: return null;
    }
  };

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto w-full border-b border-gray-800">
      <div className="text-center mb-16">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Stack Expertise</p>
        <h2 className="text-3xl font-bold text-white font-serif">Technical Skills Matrix</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="border border-gray-800 p-8 rounded-lg bg-[#0f0f11] hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-3 text-white mb-6">
              <span className="text-gray-400">{getIcon(skillGroup.icon)}</span>
              <h3 className="text-lg font-medium">{skillGroup.category}</h3>
            </div>
            
            <ul className="space-y-4">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{item}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
