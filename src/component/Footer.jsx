import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 text-white p-8 mt-20 border-t border-purple-600 dark:border-purple-800 shadow-2xl">
           
            <div className="container mx-auto text-center">
                 <p className="text-lg text-gray-300 dark:text-gray-200">Built with
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1 animate-pulse" />
            by 
            <a href="https://eazybytes.com" className="text-purple-400 dark:text-purple-300 ml-1 hover:text-pink-400 dark:hover:text-pink-300 transition-all duration-300 hover:underline hover:scale-110 inline-block">EazyBytes</a>.
                </p>
                <p className="text-gray-400 dark:text-gray-500 mt-4 hover:text-gray-200 dark:hover:text-gray-300 transition-colors duration-300">&copy; 2026 EasyStickers. All rights reserved.</p>
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    Made with passion for sticker lovers worldwide ✨
                </div>
            </div>
        </footer>
    );
}