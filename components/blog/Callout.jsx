import { Info } from 'lucide-react';

export default function Callout({ title, children }) {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 my-8 flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <Info className="text-indigo-400" size={24} />
      </div>
      <div>
        {title && <h4 className="text-white font-bold text-lg mb-2">{title}</h4>}
        <div className="text-gray-400 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
