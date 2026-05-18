export default function Footer() {
  return (
    <footer className="py-8 px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div className="text-xl font-bold tracking-tight text-white mb-1 font-serif">
          DevArchitect
        </div>
        <p className="text-xs text-gray-500">
          © 2024 DevArchitect. All rights reserved. Built with precision.
        </p>
      </div>
      
      <div className="flex space-x-6 text-xs text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Github</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">RSS</a>
      </div>
    </footer>
  );
}
