import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";

export default function Home() {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get("/products");
            setProducts(response.data);
        } catch (err) {
            setError(err.message || "Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="text-center py-10">Loading products...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <footer className="bg-gray-800 text-white p-4 mt-10">
            <div className="container mx-auto text-center">
               <PageHeading title="Explore Eazy Stickers" >
               Add a touch of creativity to your space with our vibrant sticker collection. From quirky designs to elegant patterns, we have something for everyone. Whether you're looking to personalize your laptop, decorate your room, or add flair to your belongings, our stickers are the perfect choice. Browse our selection and let your imagination run wild with endless possibilities!
               </PageHeading>
               <ProductListing products={products} />
            </div>
        </footer>
    );
}