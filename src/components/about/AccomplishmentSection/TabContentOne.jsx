import { useEffect, useRef } from 'react';
import CourseCardOne from './CourseCardOne';

function TabContentOne({ tabId, courses, isActive }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }

    const initializeCarousel = () => {
      if (!carouselRef.current) {
        return;
      }

      const $carousel = window.$(carouselRef.current);

      if ($carousel.data('owl.carousel')) {
        return;
      }

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

    if (!window.$ || !window.$.fn.owlCarousel) {
      const checkInterval = setInterval(() => {
        if (window.$ && window.$.fn.owlCarousel && carouselRef.current) {
          clearInterval(checkInterval);
          initializeCarousel();
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }

    const timeoutId = setTimeout(initializeCarousel, 100);

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
  }, []);

  useEffect(() => {
    if (isActive && carouselRef.current && window.$) {
      const $carousel = window.$(carouselRef.current);
      if ($carousel.data('owl.carousel')) {
        setTimeout(() => {
          $carousel.trigger('refresh.owl.carousel');
        }, 300);
      }
    }
  }, [isActive]);

  return (
    <div className={`p-tab ${isActive ? 'active-tab' : ''}`} id={tabId}>
      <div className="tabs-content__inner">
        <div className="courses-one__right">
          <div
            ref={carouselRef}
            className="courses-one__carousel owl-theme owl-carousel"
          >
            {courses.map((course) => (
              <CourseCardOne key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContentOne;
