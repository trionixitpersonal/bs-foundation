import { useEffect, useRef } from 'react';
import CourseCard from './CourseCard';

function TabContent({ tabId, courses, isActive }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize carousel when component mounts
    if (!carouselRef.current) {
      return;
    }

    const initializeCarousel = () => {
      if (!carouselRef.current) {
        return;
      }

      const $carousel = window.$(carouselRef.current);

      // Check if already initialized
      if ($carousel.data('owl.carousel')) {
        return;
      }

      // Initialize carousel with exact settings from original template
      try {
        $carousel.owlCarousel({
          loop: true,
          margin: 24,
          nav: true,
          dots: false,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 7000,
          navText: [
            '<span class="icon-left-arrow"></span>',
            '<span class="icon-right-arrow"></span>',
          ],
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 1,
            },
            992: {
              items: 1,
            },
            1200: {
              items: 1,
            },
            1320: {
              items: 1,
            },
          },
        });
      } catch (error) {
        console.error('Error initializing Owl Carousel:', error);
      }
    };

    // Wait for jQuery and Owl Carousel to be available
    if (!window.$ || !window.$.fn.owlCarousel) {
      const checkInterval = setInterval(() => {
        if (window.$ && window.$.fn.owlCarousel && carouselRef.current) {
          clearInterval(checkInterval);
          initializeCarousel();
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeCarousel, 100);

    // Cleanup function - only destroy on unmount
    return () => {
      clearTimeout(timeoutId);
      if (carouselRef.current && window.$) {
        const $carousel = window.$(carouselRef.current);
        if ($carousel.data('owl.carousel')) {
          try {
            $carousel.trigger('destroy.owl.carousel');
            $carousel.removeData('owl.carousel');
          } catch (error) {
            // Ignore cleanup errors
          }
        }
      }
    };
  }, []); // Only run once on mount

  // Refresh carousel when tab becomes active (in case it was hidden)
  useEffect(() => {
    if (isActive && carouselRef.current && window.$) {
      const $carousel = window.$(carouselRef.current);
      if ($carousel.data('owl.carousel')) {
        // Refresh carousel to ensure it displays correctly when tab becomes active
        setTimeout(() => {
          $carousel.trigger('refresh.owl.carousel');
        }, 300);
      }
    }
  }, [isActive]);

  return (
    <div className={`p-tab ${isActive ? 'active-tab' : ''}`} id={tabId}>
      <div className="tabs-content__inner">
        <div className="courses-three__right">
          <div
            ref={carouselRef}
            className="courses-three__carousel owl-theme owl-carousel"
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
