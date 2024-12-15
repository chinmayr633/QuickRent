import { featuredGadgets } from '../data/allGadgets';

export function ScrollingGadgets() {
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        
        <div className="flex animate-scroll">
          {[...featuredGadgets, ...featuredGadgets].map((gadget, index) => (
            <div
              key={index}
              className="flex-none w-72 mx-4 group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={gadget.image}
                  alt={gadget.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">{gadget.name}</p>
                    <p className="text-white/80 text-sm">{gadget.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}