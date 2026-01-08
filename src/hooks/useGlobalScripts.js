import { useEffect } from 'react';
import { useScriptLoader } from './useScriptLoader';

/**
 * Hook to load all global jQuery plugins and initialize global features
 * This should be used once in App.jsx
 */
export function useGlobalScripts() {
  // Define scripts in dependency order
  const scripts = [
    '/src/assets/js/jquery-3.6.0.min.js',
    '/src/assets/js/jquery-migrate.min.js',
    '/src/assets/js/bootstrap.bundle.min.js',
    '/src/assets/js/jquery.appear.min.js',
    '/src/assets/js/jquery.lettering.min.js',
    '/src/assets/js/jquery.circleType.js',
    '/src/assets/js/wow.js',
    '/src/assets/js/aos.js',
    '/src/assets/js/odometer.min.js',
    '/src/assets/js/jquery.circle-progress.min.js',
    '/src/assets/js/jquery.nice-select.min.js',
    '/src/assets/js/jquery-ui.js',
    '/src/assets/js/owl.carousel.min.js',
    '/src/assets/js/swiper.min.js',
    '/src/assets/js/jquery.magnific-popup.min.js',
    '/src/assets/js/jarallax.min.js',
    '/src/assets/js/isotope.js',
    '/src/assets/js/vegas.min.js',
    '/src/assets/js/jquery.ajaxchimp.min.js',
    '/src/assets/js/jquery.validate.min.js',
    '/src/assets/js/script.js',
  ];

  const { loaded, error } = useScriptLoader(scripts);

  useEffect(() => {
    if (loaded && window.$) {
      // Initialize global features that need jQuery
      // Most initialization is done in script.js, but we can add custom init here if needed
      
      // Ensure jQuery is available globally
      if (typeof window.jQuery === 'undefined') {
        window.jQuery = window.$;
      }
    }
  }, [loaded]);

  return { loaded, error };
}
