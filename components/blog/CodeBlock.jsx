import { Copy } from 'lucide-react';

export default function CodeBlock({ filename, code }) {
  return (
    <div className="my-8 rounded-xl overflow-hidden border border-gray-800 bg-[#0d0d0d]">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800 bg-[#161616]">
        <span className="text-xs font-mono text-gray-400">{filename}</span>
        <button className="text-gray-500 hover:text-white transition-colors" title="Copy code">
          <Copy size={14} />
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
