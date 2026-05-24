import Image from 'next/image';

export default function ImageCard({ image, title }) {
  return (
    <div className="relative aspect-video w-full border border-gray-800 rounded-sm overflow-hidden group bg-[#0a0a0a]">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-xs font-bold tracking-widest uppercase drop-shadow-md">{title}</h3>
      </div>
    </div>
  );
}
