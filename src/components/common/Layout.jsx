import { useGlobalScripts } from '../../hooks/useGlobalScripts';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import SearchPopup from './SearchPopup';
import ScrollToTop from './ScrollToTop';

function Layout({ children }) {
    useGlobalScripts();

    return (
        <>
            <CustomCursor />
            <Preloader />
            <Header />
            <MobileNav />
            <SearchPopup />
            {children}
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Layout;
