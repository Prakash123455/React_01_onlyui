import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import products from "./data/products";

export default function Home() {
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