import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
    return (
        <div className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-3">
                        Our Sticker Collection
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover {products.length} unique designs to express yourself
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {
                        products.length > 0 ? (
                            products.map((product) => (
                                <ProductCard key={product.productId} product={product} />
                            ))
                        ) : (
                            <div className="col-span-full py-16 text-center">
                                <div className="text-6xl mb-4">📦</div>
                                <p className="text-xl text-gray-500 font-semibold">No products available</p>
                                <p className="text-gray-400 mt-2">Check back soon for new stickers!</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}