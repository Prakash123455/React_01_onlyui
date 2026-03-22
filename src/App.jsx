
import { Outlet, useNavigation } from 'react-router-dom';
import './App.css'
import Footer from './component/Footer.jsx';
import Header from './component/Header.jsx'


function App() {
    // useNavigation hook tracks the navigation state
    // state can be: "idle" (not loading), "loading" (page is loading), "submitting" (form submission)
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return(
        <>
            <Header />
            
            {/* Show spinner overlay when page is loading */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                        <div className="flex flex-col items-center gap-4">
                            {/* Spinner Animation */}
                            <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-purple-600 rounded-full animate-spin"></div>
                            <p className="text-gray-700 dark:text-gray-300 font-semibold">Loading...</p>
                        </div>
                    </div>
                </div>
            )}

            <Outlet />
            <Footer />
        </>
    ) ;
}

export default App
