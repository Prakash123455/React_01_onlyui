import Price from "./Price";

export default function ProductCard({ product }) {
    return (
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gray-200">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Popularity Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ {product.popularity}% Popular
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                {/* Footer with Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-baseline gap-2">
                        <Price currency="$" amount={product.price} />
                        <span className="text-xs text-gray-400">each</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg active:scale-95">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}