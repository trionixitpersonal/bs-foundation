import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleToggle = (e) => {
      const target = e.target;
      if (
        target.classList.contains('mobile-nav__toggler') ||
        target.closest('.mobile-nav__toggler')
      ) {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('click', handleToggle);

    return () => {
      document.removeEventListener('click', handleToggle);
    };
  }, []);

  useEffect(() => {
    // Close mobile nav on route change
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    // Copy navigation content to mobile nav container and handle React Router navigation
    if (window.$ && document.querySelector('.main-menu__list')) {
      const navContent = document.querySelector('.main-menu__list').outerHTML;
      const mobileNavContainer = document.querySelector('.mobile-nav__container');
      if (mobileNavContainer) {
        mobileNavContainer.innerHTML = navContent;

        // Convert anchor tags to React Router navigation
        const links = mobileNavContainer.querySelectorAll('a[href^="/"]');
        links.forEach((link) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('/')) {
            link.addEventListener('click', (e) => {
              // Don't prevent default for dropdown toggles
              if (link.parentElement.classList.contains('dropdown') && !link.querySelector('button')) {
                return; // Let dropdown functionality handle it
              }
              e.preventDefault();
              navigate(href);
              setIsOpen(false);
            });
          }
        });
      }

      // Initialize dropdown functionality (matching script.js behavior)
      if (window.$ && document.querySelector('.mobile-nav__container .main-menu__list')) {
        const dropdownAnchors = document.querySelectorAll(
          '.mobile-nav__container .main-menu__list .dropdown > a'
        );
        dropdownAnchors.forEach((anchor) => {
          // Check if toggle button already exists
          if (!anchor.querySelector('button')) {
            const toggleBtn = document.createElement('button');
            toggleBtn.setAttribute('aria-label', 'dropdown toggler');
            toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
            anchor.appendChild(toggleBtn);

            toggleBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleBtn.classList.toggle('expanded');
              anchor.classList.toggle('expanded');
              const dropdown = anchor.parentElement;
              const submenu = dropdown.querySelector('ul');
              if (submenu) {
                if (window.$) {
                  window.$(submenu).slideToggle();
                } else {
                  submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
                }
              }
            });
          }
        });
      }
    }
  }, [isOpen, navigate]);

  return (
    <div className={`mobile-nav__wrapper ${isOpen ? 'expanded' : ''}`}>
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link to="/" aria-label="logo image">
            <img
              src="/assets/logos/bsfoundation_logo_large.png"
              width="150"
              alt="BS Foundation"
            />
          </Link>
        </div>

        <div className="mobile-nav__container"></div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:needhelp@chioary.com">needhelp@chioary.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:666-888-0000">666 888 0000</a>
          </li>
        </ul>

        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-facebook-square"></a>
            <a href="#" className="fab fa-pinterest-p"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
