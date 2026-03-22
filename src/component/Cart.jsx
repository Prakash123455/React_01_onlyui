import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import { useCart } from "./store/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    const handleQuantityChange = (productId, newQuantity) => {
        const quantity = parseInt(newQuantity);
        if (quantity > 0) {
            updateQuantity(productId, quantity);
        }
    };

    return (
        <div>
            <div className="py-12 bg-normalbg dark:bg-darkbg font-primary min-h-screen">
                <div className="max-w-6xl mx-auto px-4">
                    <PageTitle title="Your Cart" />
                </div>

                {cartItems.length === 0 ? (
                    // Empty Cart State
                    <div className="max-w-6xl mx-auto px-4 mt-8">
                        <div className="text-center py-16">
                            {/* Empty Cart Image */}
                            <div className="mb-8 opacity-60">
                                <img
                                    src="/stickers/emptycart.png"
                                    alt="Empty Cart"
                                    className="w-full max-w-[300px] mx-auto grayscale"
                                />
                            </div>

                            {/* Message */}
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Your Cart is Empty
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
                                It looks like you haven't added any stickers yet. Start exploring our amazing collection and find your favorites!
                            </p>

                            {/* Call to Action */}
                            <Link
                                to="/home"
                                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 hover:shadow-lg"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Products Table
                    <div className="max-w-6xl mx-auto px-4 mt-8">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-200 dark:bg-gray-700 border-b-2 border-purple-600">
                                        <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-bold">Product</th>
                                        <th className="px-6 py-4 text-center text-gray-900 dark:text-white font-bold">Price</th>
                                        <th className="px-6 py-4 text-center text-gray-900 dark:text-white font-bold">Quantity</th>
                                        <th className="px-6 py-4 text-center text-gray-900 dark:text-white font-bold">Subtotal</th>
                                        <th className="px-6 py-4 text-center text-gray-900 dark:text-white font-bold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    {item.image && (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-16 h-16 object-cover rounded-lg"
                                                        />
                                                    )}
                                                    <div>
                                                        <p className="text-gray-900 dark:text-white font-semibold">{item.name}</p>
                                                        {item.description && (
                                                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center text-gray-900 dark:text-white font-semibold">
                                                ${parseFloat(item.price || 0).toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    max="99"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleQuantityChange(item.id, e.target.value)
                                                    }
                                                    className="w-16 px-2 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
                                                />
                                            </td>
                                            <td className="px-6 py-4 text-center text-gray-900 dark:text-white font-semibold">
                                                ${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors duration-200"
                                                    title="Remove product"
                                                >
                                                    <FontAwesomeIcon icon={faTrash} className="text-sm" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Cart Summary */}
                        <div className="mt-8 flex justify-end">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-8 py-6 max-w-xs w-full">
                                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300 dark:border-gray-600">
                                    <span className="text-gray-900 dark:text-white font-semibold">Total Items:</span>
                                    <span className="text-gray-900 dark:text-white font-bold text-lg">
                                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-900 dark:text-white font-semibold">Grand Total:</span>
                                    <span className="text-purple-600 dark:text-pink-400 font-bold text-2xl">
                                        ${getTotalPrice().toFixed(2)}
                                    </span>
                                </div>
                                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition duration-200 hover:shadow-lg">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>

                        {/* Continue Shopping */}
                        <div className="mt-8 text-center">
                            <Link
                                to="/home"
                                className="inline-block text-purple-600 dark:text-pink-400 hover:text-purple-700 dark:hover:text-pink-500 font-semibold transition duration-200"
                            >
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}