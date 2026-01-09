import { useEffect } from 'react';
import { useScriptLoader } from './useScriptLoader';

/**
 * Hook to load all global jQuery plugins and initialize global features
 * This should be used once in App.jsx
 */
export function useGlobalScripts() {
  // Define scripts in dependency order
  // Files are in public/assets/js/ which is served at /assets/js/ in both dev and prod
  const scripts = [
    '/assets/js/jquery-3.6.0.min.js',
    '/assets/js/jquery-migrate.min.js',
    '/assets/js/bootstrap.bundle.min.js',
    '/assets/js/jquery.appear.min.js',
    '/assets/js/jquery.lettering.min.js',
    '/assets/js/jquery.circleType.js',
    '/assets/js/wow.js',
    '/assets/js/aos.js',
    '/assets/js/odometer.min.js',
    '/assets/js/jquery.circle-progress.min.js',
    '/assets/js/jquery.nice-select.min.js',
    '/assets/js/jquery-ui.js',
    '/assets/js/owl.carousel.min.js',
    '/assets/js/swiper.min.js',
    '/assets/js/jquery.magnific-popup.min.js',
    '/assets/js/jarallax.min.js',
    '/assets/js/isotope.js',
    '/assets/js/vegas.min.js',
    '/assets/js/jquery.ajaxchimp.min.js',
    '/assets/js/jquery.validate.min.js',
    '/assets/js/script.js',
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
