import { useEffect } from 'react';

function CounterSection() {
  useEffect(() => {
    if (window.$ && window.$.fn.appear) {
      window.$('.counter-one__single .count-box').appear(
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
  }, []);

  return (
    <section className="counter-one">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="counter-one__single">
              <div className="counter-one__shape-1">
                <img
                  src="/assets/images/shapes/counter-one-shape-1.png"
                  alt=""
                />
              </div>
              <div className="counter-one__count count-box">
                <h3 className="count-text" data-stop="20" data-speed="1500">
                  00
                </h3>
                <span>billion</span>
              </div>
              <p className="counter-one__count-text">People Helped</p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="counter-one__single">
              <div className="counter-one__shape-1">
                <img
                  src="/assets/images/shapes/counter-one-shape-2.png"
                  alt=""
                />
              </div>
              <div className="counter-one__count count-box">
                <h3 className="count-text" data-stop="200" data-speed="1500">
                  00
                </h3>
                <span className="counter-one__count-plus">+</span>
              </div>
              <p className="counter-one__count-text">Country Impacted</p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="counter-one__single">
              <div className="counter-one__shape-1">
                <img
                  src="/assets/images/shapes/counter-one-shape-3.png"
                  alt=""
                />
              </div>
              <div className="counter-one__count count-box">
                <h3 className="count-text" data-stop="50" data-speed="1500">
                  00
                </h3>
                <span>K</span>
                <span className="counter-one__count-plus">+</span>
              </div>
              <p className="counter-one__count-text">Volunteer</p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="counter-one__single">
              <div className="counter-one__shape-1">
                <img
                  src="/assets/images/shapes/counter-one-shape-4.png"
                  alt=""
                />
              </div>
              <div className="counter-one__count count-box">
                <h3 className="count-text" data-stop="1000" data-speed="1500">
                  00
                </h3>
                <span className="counter-one__count-plus">+</span>
              </div>
              <p className="counter-one__count-text">Successful Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
