import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

function AboutOneSection() {
  const curvedCircleRef = useRef(null);
  const countBoxRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    let retryCount = 0;
    const maxRetries = 10;

    // Initialize curved circle text (circleType plugin)
    const initCircleType = () => {
      if (!window.$ || !window.$.fn.lettering || !window.$.fn.circleType) {
        if (retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(initCircleType, 200);
        } else {
          console.warn('circleType dependencies not loaded after max retries');
        }
        return;
      }

      if (!curvedCircleRef.current) {
        return;
      }

      const $curvedCircle = window.$(curvedCircleRef.current);

      if (
        $curvedCircle.data('circleType-initialized') ||
        $curvedCircle.data('circleType')
      ) {
        return;
      }

      if (
        curvedCircleRef.current.offsetHeight === 0 &&
        curvedCircleRef.current.offsetWidth === 0
      ) {
        if (retryCount < maxRetries) {
          retryCount++;
          timeoutId = setTimeout(initCircleType, 100);
        }
        return;
      }

      try {
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

    initCircleType();

    const handleLoad = () => {
      initCircleType();
    };

    if (document.readyState === 'complete') {
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

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('load', handleLoad);
      if (window.$ && curvedCircleRef.current) {
        const $curvedCircle = window.$(curvedCircleRef.current);
        if ($curvedCircle.data('circleType')) {
          try {
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
    <section className="about-one">
      <div className="about-one__shape-1 float-bob">
        <img src="/assets/images/shapes/about-one-shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-left sec-title-animation animation-style2">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape"></div>
            <span className="section-title__tagline">Our About</span>
          </div>
          <h2 className="section-title__title title-animation">
            Transforming Lives, One Act of <br />
            Kindness at a Time
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
            <div className="about-one__left">
              <p className="about-one__text">
                That's a powerful and inspiring heading! It effectively
                communicates the essence of your charity's mission and the
                positive impact you strive to make. Would you like to use this
                for the About Section,
              </p>
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <img
                    src="/assets/images/resources/aboutone-img-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="about-one__single">
                    <div className="about-one__icon">
                      <span className="icon-mother-earth-day"></span>
                    </div>
                    <h3 className="about-one__title">
                      <Link to="/about">Driven Compassion</Link>
                    </h3>
                    <p className="about-one__text">
                      Every service we offer is rooted compassion aiming to make
                    </p>
                    <div className="about-one__read-more">
                      <span></span>
                      <Link to="/about">Read More</Link>
                    </div>
                  </div>
                  <div className="about-one__single">
                    <div className="about-one__icon">
                      <span className="icon-dollar"></span>
                    </div>
                    <h3 className="about-one__title">
                      <Link to="/about">Sustainable Impact</Link>
                    </h3>
                    <p className="about-one__text">
                      Every service we offer is rooted compassion aiming to make
                    </p>
                    <div className="about-one__read-more">
                      <span></span>
                      <Link to="/about">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="about-one__round-text-box">
                    <div className="about-one__round-text-box-inner rotate-me">
                      <div
                        ref={curvedCircleRef}
                        className="about-one__curved-circle"
                      >
                        - years of experience - years of experience
                      </div>
                    </div>
                    <div ref={countBoxRef} className="about-one__count count-box">
                      <h3 className="count-text" data-stop="25" data-speed="1500">
                        00
                      </h3>
                      <span>+</span>
                    </div>
                  </div>
                  <div className="about-one__single">
                    <div className="about-one__icon">
                      <span className="icon-people"></span>
                    </div>
                    <h3 className="about-one__title">
                      <Link to="/about">Holistic Support</Link>
                    </h3>
                    <p className="about-one__text">
                      Every service we offer is rooted compassion aiming to make
                    </p>
                    <div className="about-one__read-more">
                      <span></span>
                      <Link to="/about">Read More</Link>
                    </div>
                  </div>
                  <div className="about-one__client-box">
                    <div className="about-one__client-img">
                      <img
                        src="/assets/images/resources/about-one-client-img.jpg"
                        alt=""
                      />
                    </div>
                    <div className="about-one__client-content">
                      <p>UX/UI Specialist</p>
                      <div className="about-one__sign">
                        <img
                          src="/assets/images/resources/about-one-client-sign.png"
                          alt=""
                        />
                      </div>
                    </div>
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

export default AboutOneSection;
