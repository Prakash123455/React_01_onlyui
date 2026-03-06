import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["popularity", "priceLowToHigh", "priceHighToLow"];

export default function ProductListing({ products }) {
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("popularity");


    function handleSearchChange(inputSearch) {
        setSearchValue(inputSearch);
    }

    function handleSortChange(sortType) {
        setSortValue(sortType);
    }

    const filterAndsortProducts = useMemo(() => {

        if (!Array.isArray(products)) {
            return [];
        }

        let filterdProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.description.toLowerCase().includes(searchValue.toLowerCase()));

        return filterdProducts.slice().sort((a, b) => {

            switch (sortValue) {
                case "priceLowToHigh": return parseFloat(a.price) - parseFloat(b.price);
                case "priceHighToLow": return parseFloat(b.price) - parseFloat(a.price);
                case "popularity": default:
                    return parseInt(b.popularity) - parseInt(a.popularity);
            }
        });

    }, [products, searchValue, sortValue]);


    return (
        <div className="w-full py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 px-4">
                <SearchBox
                    label="Search Stickers"
                    placeholder="Type to search..."
                    value={searchValue}
                    handleSearch={(e) => handleSearchChange(e)}
                />
                <Dropdown
                    label="Sort By"
                    options={sortList}
                    value={sortValue}
                    handleSort={(e) => handleSortChange(e)}
                />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-3">
                        Our Sticker Collection
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Discover {filterAndsortProducts.length} unique designs to express yourself
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {
                        filterAndsortProducts.length > 0 ? (
                            filterAndsortProducts.map((product) => (
                                <ProductCard key={product.productId} product={product} />
                            ))
                        ) : (
                            <div className="col-span-full py-16 text-center">
                                <div className="text-6xl mb-4">📦</div>
                                <p className="text-xl text-gray-500 dark:text-gray-400 font-semibold">No products available</p>
                                <p className="text-gray-400 dark:text-gray-500 mt-2">Check back soon for new stickers!</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}