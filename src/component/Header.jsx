import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBasket,
    faTags,
    faSun,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useCart } from './store/cart-context';



const Header = () => {
    const { getTotalQuantity } = useCart();


    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };


    return (
        <header className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white p-4 shadow-2xl sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold hover:text-purple-400 transition-all duration-300 group">
                    <FontAwesomeIcon icon={faTags} className="fa-icon group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="ml-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">EasyStickers</span></Link>
                <nav>
                    <ul className="flex space-x-6">
                        <button
                            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-purple-400 bg-white dark:bg-slate-800 transition duration-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                        >
                            <FontAwesomeIcon
                                icon={theme === "dark" ? faMoon : faSun}
                                className="w-4 h-4 text-purple-600 dark:text-purple-400"
                            />
                        </button>
                        <li><Link to="/" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-700/50">Home</Link></li>
                        <li><Link to="/about" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-700/50">About</Link></li>
                        <li><Link to="/contact" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-700/50">Contact</Link></li>
                        <li><Link to="/login" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-700/50">Login</Link></li>
                        <li><Link to="/cart" className="hover:text-pink-400 transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 font-semibold relative">
                            <FontAwesomeIcon icon={faShoppingBasket} className="fa-icon mr-2" /> Cart
                            {getTotalQuantity() > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1 -translate-y-1 bg-red-600 rounded-full">
                                    {getTotalQuantity()}
                                </span>
                            )}
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;