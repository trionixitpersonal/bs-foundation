import { useEffect } from 'react';

function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector('.preloader');
    
    const handleLoad = () => {
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="preloader">
      <div className="preloader__image"></div>
    </div>
  );
}

export default Preloader;
