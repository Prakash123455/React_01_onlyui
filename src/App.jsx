
import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './component/Footer.jsx';
import Header from './component/Header.jsx'


function App() {

    return(
        <>
            <Header />;
            <Outlet />;
            <Footer />;
        </>
    ) ;
}

export default App
