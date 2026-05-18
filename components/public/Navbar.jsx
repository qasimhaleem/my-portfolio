import Link from 'next/link';
import { Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 max-w-7xl mx-auto w-full border-b border-gray-800">
      <div className="text-2xl font-bold tracking-tight text-white font-serif">
        DevArchitect
      </div>
      <div className="hidden md:flex space-x-8 text-sm text-gray-400 font-medium">
        <Link href="#" className="text-white border-b-2 border-indigo-500 pb-1">Home</Link>
        <Link href="#" className="hover:text-white transition-colors">About</Link>
        <Link href="#" className="hover:text-white transition-colors">Projects</Link>
        <Link href="#" className="hover:text-white transition-colors">Blog</Link>
        <Link href="#" className="hover:text-white transition-colors">Contact</Link>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Settings size={20} />
        </button>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
          Resume
        </button>
      </div>
    </nav>
  );
}
