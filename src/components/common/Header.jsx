import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

function Header() {
  const location = useLocation();
  const mainMenuRef = useRef(null);
  const stickyHeaderRef = useRef(null);
  const stickyContentRef = useRef(null);

  useEffect(() => {
    // Initialize sticky header content - matches template script.js behavior
    const initializeStickyHeader = () => {
      if (window.$ && mainMenuRef.current && stickyContentRef.current) {
        // Get the main menu HTML content (exactly as in template script.js line 857-859)
        const navContent = mainMenuRef.current.innerHTML;
        const stickyContent = stickyContentRef.current;

        if (stickyContent && navContent) {
          stickyContent.innerHTML = navContent;
        }
      }
    };

    // Wait for DOM and jQuery to be ready
    if (window.$) {
      initializeStickyHeader();
    } else {
      const checkJQuery = setInterval(() => {
        if (window.$) {
          clearInterval(checkJQuery);
          initializeStickyHeader();
        }
      }, 100);

      return () => clearInterval(checkJQuery);
    }
  }, [location.pathname]); // Re-initialize when route changes

  useEffect(() => {
    // Handle sticky header scroll behavior - matches template script.js line 1349-1358
    const handleScroll = () => {
      if (stickyHeaderRef.current && window.$) {
        const headerScrollPos = 130;
        const $stricky = window.$(stickyHeaderRef.current);

        if (window.scrollY > headerScrollPos) {
          $stricky.addClass('stricky-fixed');
        } else if (window.scrollY <= headerScrollPos) {
          $stricky.removeClass('stricky-fixed');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="main-header-three">
        <nav className="main-menu main-menu-three" ref={mainMenuRef}>
          <div className="main-menu-three__wrapper">
            <div className="container">
              <div className="main-menu-three__wrapper-inner">
                <div className="main-menu-three__left">
                  <div className="main-menu-three__logo">
                    <Link to="/">
                      <img
                        src="/assets/logos/bsfoundation_logo_large.png"
                        alt=""
                        style={{ maxWidth: '120px', height: 'auto' }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="main-menu-three__main-menu-box">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    <li
                      className={`megamenu ${
                        location.pathname === '/' ? 'current' : ''
                      }`}
                    >
                      <NavLink to="/" end>
                        Home{' '}
                      </NavLink>
                    </li>
                    <li
                      className={location.pathname === '/about' ? 'current' : ''}
                    >
                      <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li
                      className={`dropdown ${
                        location.pathname === '/programs' ? 'current' : ''
                      }`}
                    >
                      <Link to="/programs">Our Programs</Link>
                      <ul className="shadow-box">
                        <li>
                          <Link to="/services">Program 1</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Program 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`dropdown ${
                        location.pathname === '/services' ||
                        location.pathname === '/service-details'
                          ? 'current'
                          : ''
                      }`}
                    >
                      <a href="#">Services</a>
                      <ul className="shadow-box">
                        <li>
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Service Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={location.pathname === '/stories' ? 'current' : ''}
                    >
                      <NavLink to="/stories">Stories</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="main-menu-three__right">
                  <div className="main-menu-three__btn-box">
                    <Link
                      to="/contact"
                      className={`main-menu-three__btn thm-btn ${
                        location.pathname === '/contact' ? 'active' : ''
                      }`}
                    >
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="stricky-header stricked-menu main-menu main-menu-three"
        ref={stickyHeaderRef}
      >
        <div className="sticky-header__content" ref={stickyContentRef}></div>
      </div>
    </>
  );
}

export default Header;
