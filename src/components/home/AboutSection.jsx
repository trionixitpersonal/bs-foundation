import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

function AboutSection() {
  const curvedCircleRef = useRef(null);
  const countBoxRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    let retryCount = 0;
    const maxRetries = 10;

    // Initialize curved circle text (circleType plugin)
    // This follows the original script.js initialization pattern
    const initCircleType = () => {
      // Check if all required dependencies are available
      if (!window.$ || !window.$.fn.lettering || !window.$.fn.circleType) {
        // Retry if scripts aren't loaded yet
        if (retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(initCircleType, 200);
        } else {
          console.warn('circleType dependencies not loaded after max retries');
        }
        return;
      }

      // Check if element exists
      if (!curvedCircleRef.current) {
        return;
      }

      const $curvedCircle = window.$(curvedCircleRef.current);

      // Check if already initialized
      if ($curvedCircle.data('circleType-initialized') || $curvedCircle.data('circleType')) {
        return;
      }

      // Wait for element to have dimensions (fully rendered)
      if (curvedCircleRef.current.offsetHeight === 0 && curvedCircleRef.current.offsetWidth === 0) {
        if (retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(initCircleType, 100);
        }
        return;
      }

      try {
        // Initialize circleType exactly as in original script.js
        $curvedCircle.circleType({
          position: 'absolute',
          dir: 1,
          radius: 77,
          forceHeight: true,
          forceWidth: true,
        });
        $curvedCircle.data('circleType-initialized', true);
      } catch (error) {
        console.error('Error initializing circleType:', error);
      }
    };

    // Try initialization immediately
    initCircleType();

    // Also try on window load (like original script.js)
    const handleLoad = () => {
      initCircleType();
    };

    if (document.readyState === 'complete') {
      // Window already loaded, try immediately
      setTimeout(initCircleType, 100);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Initialize counter animation
    if (window.$ && window.$.fn.appear && countBoxRef.current) {
      const $countBox = window.$(countBoxRef.current);
      $countBox.appear(
        function () {
          const $t = window.$(this);
          const n = $t.find('.count-text').attr('data-stop');
          const r = parseInt($t.find('.count-text').attr('data-speed'), 10);
          if (!$t.hasClass('counted')) {
            $t.addClass('counted');
            window.$({ Counter: 0 }).animate(
              { Counter: n },
              {
                duration: r,
                easing: 'linear',
                step: function () {
                  $t.find('.count-text').text(Math.ceil(this.Counter));
                },
                complete: function () {
                  $t.find('.count-text').text(n);
                },
              }
            );
          }
        },
        { accY: 0 }
      );
    }

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('load', handleLoad);
      if (window.$ && curvedCircleRef.current) {
        const $curvedCircle = window.$(curvedCircleRef.current);
        if ($curvedCircle.data('circleType')) {
          try {
            // Note: circleType doesn't have a destroy method, but we can clear the data
            $curvedCircle.removeData('circleType');
            $curvedCircle.removeData('circleType-initialized');
          } catch (error) {
            // Ignore cleanup errors
          }
        }
      }
    };
  }, []);

  return (
    <section className="about-three">
      <div className="about-three__shape-1">
        <img src="/assets/images/shapes/about-three-shape-1.png" alt="" />
      </div>
      <div className="about-three__shape-2">
        <img src="/assets/images/shapes/about-three-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="about-three__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape"></div>
                  <span className="section-title__tagline">About Us</span>
                </div>
                <h2 className="section-title__title title-animation">
                  Empowering Lives Through Compassion.
                </h2>
              </div>
              <div className="about-three__left-img-and-content">
                <div className="about-three__left-img-1">
                  <img
                    src="/assets/images/New folder/about-three-left-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className="about-three__left-content">
                  <p className="about-three__left-text">
                    Empowering Lives Through Compassion" is a <br />
                    powerful and inspiring heading that perfectly <br />
                    captures the essence of your charity's <br />
                    mission. It's a great choice
                  </p>
                  <ul className="about-three__left-points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-education-cap"></span>
                      </div>
                      <h4>
                        <Link to="/about">Education</Link>
                      </h4>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clean-water"></span>
                      </div>
                      <h4>
                        <Link to="/about">Water</Link>
                      </h4>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-education-cap"></span>
                      </div>
                      <h4>
                        <Link to="/about">Medical</Link>
                      </h4>
                    </li>
                  </ul>
                  <div className="about-three__left-btn-box">
                    <Link to="/about" className="about-three__left-btn thm-btn">
                      <span>Read more</span>
                      <i className="icon-arrow-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 wow fadeInRight" data-wow-delay=".3s">
            <div className="about-three__right">
              <div className="about-three__right-img">
                <img
                  src="/assets/images/model/Team work-pana.png"
                  alt=""
                />
                <div className="about-three__round-text-box">
                  <div className="about-three__round-text-box-inner rotate-me">
                    <div
                      ref={curvedCircleRef}
                      className="about-three__curved-circle"
                    >
                      - years of experience - years of experience
                    </div>
                  </div>
                  <div ref={countBoxRef} className="about-three__count count-box">
                    <h3 className="count-text" data-stop="25" data-speed="1500">
                      00
                    </h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
