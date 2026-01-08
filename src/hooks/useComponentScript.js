import { useEffect, useRef } from 'react';

/**
 * Hook for component-specific script initialization
 * @param {Function} initFunction - Function to initialize the component script
 * @param {Array} dependencies - Dependencies array for useEffect
 * @returns {Object} - Ref to attach to the component element
 */
export function useComponentScript(initFunction, dependencies = []) {
  const elementRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Wait for jQuery to be available
    if (!window.$ || !elementRef.current) {
      return;
    }

    // Prevent double initialization
    if (initializedRef.current) {
      return;
    }

    try {
      initFunction(elementRef.current, window.$);
      initializedRef.current = true;
    } catch (error) {
      console.error('Component script initialization error:', error);
    }

    // Cleanup function
    return () => {
      if (initializedRef.current && elementRef.current && window.$) {
        try {
          // Try to destroy any carousel or plugin instances
          const $element = window.$(elementRef.current);
          if ($element.data('owl.carousel')) {
            $element.trigger('destroy.owl.carousel');
          }
          if ($element.data('swiper')) {
            const swiper = $element.data('swiper');
            if (swiper && swiper.destroy) {
              swiper.destroy();
            }
          }
        } catch (error) {
          console.error('Component script cleanup error:', error);
        }
        initializedRef.current = false;
      }
    };
  }, [initFunction, ...dependencies]);

  return elementRef;
}
