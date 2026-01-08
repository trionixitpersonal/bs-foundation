import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <a
      href="#"
      data-target="html"
      className="scroll-to-target scroll-to-top"
      onClick={handleClick}
    >
      <span className="scroll-to-top__wrapper">
        <span className="scroll-to-top__inner"></span>
      </span>
      <span className="scroll-to-top__text"> Go Back Top</span>
    </a>
  );
}

export default ScrollToTop;
