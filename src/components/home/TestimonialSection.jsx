import { useEffect, useRef } from 'react';

function TestimonialSection() {
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
        // Initialize Owl Carousel with exact settings from original script.js
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
    <section className="testimonial-three">
      <div className="container">
        <div className="testimonial-three__inner">
          <div className="testimonial-three__title-wrapper">
            <h2 className="section-title__title title-animation">Testimonials</h2>
          </div>

          <div
            className="testimonial-three__carousel owl-carousel owl-theme"
            ref={carouselRef}
          >
            <div className="item">
              <div className="testimonial-three__single">
                <form className="testimonial-three__rating">
                  <input type="radio" id="10-stars" name="rating" value="5" />
                  <label htmlFor="10-stars" className="star">&#9733;</label>
                  <input type="radio" id="9-stars" name="rating" value="4" />
                  <label htmlFor="9-stars" className="star">&#9733;</label>
                  <input type="radio" id="8-stars" name="rating" value="3" />
                  <label htmlFor="8-stars" className="star">&#9733;</label>
                  <input type="radio" id="7-stars" name="rating" value="2" />
                  <label htmlFor="7-stars" className="star">&#9733;</label>
                  <input type="radio" id="6-star" name="rating" value="1" />
                  <label htmlFor="6-star" className="star">&#9733;</label>
                </form>
                <p className="testimonial-three__text">
                  The educational programs offered by Chioary have changed
                  <br />
                  my life. I was able to complete my education and now have
                  the skills to <br />
                  support my family. I'm forever grateful."
                </p>
                <div className="testimonial-three__client-info">
                  <h4 className="testimonial-three__client-name">
                    Courtney Henry
                  </h4>
                  <p className="testimonial-three__client-sub-title">
                    General manager
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-three__single">
                <form className="testimonial-three__rating">
                  <input type="radio" id="15-stars" name="rating" value="5" />
                  <label htmlFor="15-stars" className="star">&#9733;</label>
                  <input type="radio" id="14-stars" name="rating" value="4" />
                  <label htmlFor="14-stars" className="star">&#9733;</label>
                  <input type="radio" id="13-stars" name="rating" value="3" />
                  <label htmlFor="13-stars" className="star">&#9733;</label>
                  <input type="radio" id="12-stars" name="rating" value="2" />
                  <label htmlFor="12-stars" className="star">&#9733;</label>
                  <input type="radio" id="11-star" name="rating" value="1" />
                  <label htmlFor="11-star" className="star">&#9733;</label>
                </form>
                <p className="testimonial-three__text">
                  The educational programs offered by Chioary have changed
                  <br />
                  my life. I was able to complete my education and now have
                  the skills to <br />
                  support my family. I'm forever grateful."
                </p>
                <div className="testimonial-three__client-info">
                  <h4 className="testimonial-three__client-name">Mate Henry</h4>
                  <p className="testimonial-three__client-sub-title">
                    General manager
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-three__single">
                <form className="testimonial-three__rating">
                  <input type="radio" id="20-stars" name="rating" value="5" />
                  <label htmlFor="20-stars" className="star">&#9733;</label>
                  <input type="radio" id="19-stars" name="rating" value="4" />
                  <label htmlFor="19-stars" className="star">&#9733;</label>
                  <input type="radio" id="18-stars" name="rating" value="3" />
                  <label htmlFor="18-stars" className="star">&#9733;</label>
                  <input type="radio" id="17-stars" name="rating" value="2" />
                  <label htmlFor="17-stars" className="star">&#9733;</label>
                  <input type="radio" id="16-star" name="rating" value="1" />
                  <label htmlFor="16-star" className="star">&#9733;</label>
                </form>
                <p className="testimonial-three__text">
                  The educational programs offered by Chioary have changed
                  <br />
                  my life. I was able to complete my education and now have
                  the skills to <br />
                  support my family. I'm forever grateful."
                </p>
                <div className="testimonial-three__client-info">
                  <h4 className="testimonial-three__client-name">
                    Henry Nichole
                  </h4>
                  <p className="testimonial-three__client-sub-title">
                    General manager
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-three__single">
                <form className="testimonial-three__rating">
                  <input type="radio" id="25-stars" name="rating" value="5" />
                  <label htmlFor="25-stars" className="star">&#9733;</label>
                  <input type="radio" id="24-stars" name="rating" value="4" />
                  <label htmlFor="24-stars" className="star">&#9733;</label>
                  <input type="radio" id="23-stars" name="rating" value="3" />
                  <label htmlFor="23-stars" className="star">&#9733;</label>
                  <input type="radio" id="22-stars" name="rating" value="2" />
                  <label htmlFor="22-stars" className="star">&#9733;</label>
                  <input type="radio" id="21-star" name="rating" value="1" />
                  <label htmlFor="21-star" className="star">&#9733;</label>
                </form>
                <p className="testimonial-three__text">
                  The educational programs offered by Chioary have changed
                  <br />
                  my life. I was able to complete my education and now have
                  the skills to <br />
                  support my family. I'm forever grateful."
                </p>
                <div className="testimonial-three__client-info">
                  <h4 className="testimonial-three__client-name">Rob Nichole</h4>
                  <p className="testimonial-three__client-sub-title">
                    General manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
