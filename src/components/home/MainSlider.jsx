import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

const slides = [
  {
    bgImage: '/assets/images/backgrounds/slider-2-1.jpg',
    shape2: '/assets/images/shapes/main-slider-two-shape-2.png',
    shape3: '/assets/images/shapes/main-slider-two-shape-3.png',
    img: '/assets/images/resources/main-slider-two-shape-1.png',
    subtitle: 'Charity foundation non profit',
    title: 'Your Compassion Their Hope',
    text: 'Your Compassion Their Hope is a powerful and inspiring choice for your charity website. It effectively captures the essence of your mission and the impact of support.',
    link: '/courses-details',
  },
  {
    bgImage: '/assets/images/backgrounds/slider-2-2.jpg',
    shape2: '/assets/images/shapes/main-slider-two-shape-2.png',
    shape3: '/assets/images/shapes/main-slider-two-shape-3.png',
    img: '/assets/images/resources/main-slider-two-img-1.jpg',
    subtitle: 'Charity foundation non profit',
    title: 'Your Compassion Their Hope',
    text: 'Your Compassion Their Hope is a powerful and inspiring choice for your charity website. It effectively captures the essence of your mission and the impact of support.',
    link: '/courses-details',
  },
  {
    bgImage: '/assets/images/backgrounds/slider-2-3.webp',
    shape2: '/assets/images/shapes/main-slider-two-shape-2.png',
    shape3: '/assets/images/shapes/main-slider-two-shape-3.png',
    img: '/assets/images/resources/main-slider-two-img-2.png',
    subtitle: 'Charity foundation non profit',
    title: 'Your Compassion Their Hope',
    text: 'Your Compassion Their Hope is a powerful and inspiring choice for your charity website. It effectively captures the essence of your mission and the impact of support.',
    link: '/courses-details',
  },
  {
    bgImage: '/assets/images/backgrounds/slider-2-4.jpg',
    shape2: '/assets/images/shapes/main-slider-two-shape-2.png',
    shape3: '/assets/images/shapes/main-slider-two-shape-3.png',
    img: '/assets/images/resources/main-slider-two-img-1.jpg',
    subtitle: 'Charity foundation non profit',
    title: 'Your Compassion Their Hope',
    text: 'Your Compassion Their Hope is a powerful and inspiring choice for your charity website. It effectively captures the essence of your mission and the impact of support.',
    link: '/courses-details',
  },
];

function MainSlider() {
  const carouselRef = useRef(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 20;
    let timeoutId;

    const initCarousel = () => {
      // Check if jQuery and Owl Carousel are available
      if (!window.$ || !window.$.fn.owlCarousel) {
        if (retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(initCarousel, 100);
        } else {
          console.warn('Owl Carousel not available after max retries');
        }
        return;
      }

      // Check if element exists
      if (!carouselRef.current) {
        return;
      }

      const $carousel = window.$(carouselRef.current);

      // Check if already initialized
      if ($carousel.data('owl.carousel')) {
        return;
      }

      try {
        // Initialize Owl Carousel with settings matching original script.js
        $carousel.owlCarousel({
          loop: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          margin: 0,
          nav: false,
          dots: true,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 7000,
          navText: [
            '<span class="icon-right-arrow"></span>',
            '<span class="icon-right-arrow"></span>',
          ],
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            800: { items: 1 },
            992: { items: 1 },
          },
          onInitialized: function () {
            // Ensure first slide has active class
            const $firstItem = $carousel.find('.item').first();
            if (!$firstItem.hasClass('active')) {
              $firstItem.addClass('active');
            }
          },
        });
      } catch (error) {
        console.error('Error initializing Owl Carousel:', error);
      }
    };

    // Start initialization
    initCarousel();

    // Cleanup
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (window.$ && carouselRef.current) {
        const $carousel = window.$(carouselRef.current);
        if ($carousel.data('owl.carousel')) {
          try {
            $carousel.trigger('destroy.owl.carousel');
          } catch (error) {
            // Ignore cleanup errors
          }
        }
      }
    };
  }, []);

  return (
    <section className="main-slider-two">
      <div
        ref={carouselRef}
        className="main-slider-two__carousel owl-carousel owl-theme"
      >
        {slides.map((slide, index) => (
          <div key={index} className={`item ${index === 0 ? 'active' : ''}`}>
            <div
              className="main-slider-two__bg"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            ></div>
            <div className="main-slider-two__shape-2 float-bob-y">
              <img src={slide.shape2} alt="" />
            </div>
            <div className="main-slider-two__shape-3 float-bob-x">
              <img src={slide.shape3} alt="" />
            </div>
            <div className="container">
              <div className="main-slider-two__content">
                <div className="main-slider-two__sub-title-box">
                  <div className="main-slider-two__sub-title-shape"></div>
                  <h5 className="main-slider-two__sub-title">
                    {slide.subtitle}
                  </h5>
                </div>
                <h2 className="main-slider-two__title">
                  Your <span>Compassion</span> <br />
                  Their Hope
                </h2>
                <p className="main-slider-two__text">{slide.text}</p>
                <div className="main-slider-two__btn-box">
                  <Link to={slide.link} className="main-slider-two__btn thm-btn">
                    <span>Our Programs</span>
                    <i className="icon-arrow-up"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainSlider;
