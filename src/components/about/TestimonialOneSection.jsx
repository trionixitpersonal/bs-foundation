import { useEffect, useRef } from 'react';

function TestimonialOneSection() {
  const carouselRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Initialize jarallax
    if (bgRef.current && window.jarallax) {
      window.jarallax(bgRef.current);
    }

    // Initialize carousel
    let retryCount = 0;
    const maxRetries = 20;
    let timeoutId;

    const initCarousel = () => {
      if (!window.$ || !window.$.fn.owlCarousel) {
        if (retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(initCarousel, 100);
        } else {
          console.warn('Owl Carousel not available after max retries');
        }
        return;
      }

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
          nav: false,
          dots: true,
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

    initCarousel();

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
    <section className="testimonial-one">
      <div
        ref={bgRef}
        className="testimonial-one__bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
        style={{
          backgroundImage:
            'url(/assets/images/backgrounds/testimonial-one-bg.jpg)',
        }}
      ></div>
      <div className="testimonial-one__quote">
        <img src="/assets/images/icon/quote.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape"></div>
            <span className="section-title__tagline">Our Testimonial</span>
          </div>
          <h2 className="section-title__title title-animation">
            Our Impact in Their Words
          </h2>
        </div>
        <div
          ref={carouselRef}
          className="testimonial-one__carousel owl-theme owl-carousel"
        >
          <div className="item">
            <div className="testimonial-one__single">
              <p className="testimonial-one__text">
                I've had the privilege of volunteering <br />
                with Chioary and I'm continually inspired by the <br />
                dedication and passion of the team.
              </p>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="/assets/images/testimonial/testimonial-1-1.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3>Ronald Richards</h3>
                  <p>General manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-one__single">
              <p className="testimonial-one__text">
                I've had the privilege of volunteering <br />
                with Chioary and I'm continually inspired by the <br />
                dedication and passion of the team.
              </p>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="/assets/images/testimonial/testimonial-1-2.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3>Courtney Henry</h3>
                  <p>General manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-one__single">
              <p className="testimonial-one__text">
                I've had the privilege of volunteering <br />
                with Chioary and I'm continually inspired by the <br />
                dedication and passion of the team.
              </p>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="/assets/images/testimonial/testimonial-1-3.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3>Adam Smith</h3>
                  <p>General manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-one__single">
              <p className="testimonial-one__text">
                I've had the privilege of volunteering <br />
                with Chioary and I'm continually inspired by the <br />
                dedication and passion of the team.
              </p>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img
                    src="/assets/images/testimonial/testimonial-1-4.jpg"
                    alt=""
                  />
                </div>
                <div className="testimonial-one__client-content">
                  <h3>Robert Ken</h3>
                  <p>General manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialOneSection;
