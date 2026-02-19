import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faTags } from '@fortawesome/free-solid-svg-icons'; 


const Header = () => {
    return (
        <header className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white p-4 shadow-2xl sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-3xl font-bold hover:text-purple-400 transition-all duration-300 group">
                <FontAwesomeIcon icon={faTags} className="fa-icon group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"/>
                <span className="ml-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">EasyStickers</span></a>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10">Home</a></li>
                        <li><a href="/about" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10">About</a></li>
                        <li><a href="/contact" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10">Contact</a></li>
                        <li><a href="/login" className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg px-3 py-2 rounded-lg hover:bg-white/10">Login</a></li>
                        <li><a href="/cart" className="hover:text-pink-400 transition-all duration-300 hover:scale-110 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 font-semibold">
                        <FontAwesomeIcon icon={faShoppingBasket} className="fa-icon mr-2"/> Cart
                        </a></li> 
                    </ul>
                    </nav>
            </div>
        </header>
    );
}

export default Header;