import { useEffect } from 'react';

function NewsletterSection() {
  useEffect(() => {
    // Initialize jarallax
    if (window.jarallax) {
      window.jarallax(document.querySelectorAll('.jarallax'));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <section className="newsletter-one">
      <div
        className="newsletter-one__bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
        style={{
          backgroundImage: 'url(/assets/images/backgrounds/CTA.jpg)',
        }}
      ></div>
      <div className="container">
        <div className="newsletter-one__inner">
          <h2 className="newsletter-one__title">
            Get updated by subscribing to <br />
            our newsletter
          </h2>
          <p className="newsletter-one__text">
            Join our community of supporters by subscribing to our newsletter!
            <br />
            Get the latest updates on our projects,
          </p>
          <form className="newsletter-one__form" onSubmit={handleSubmit}>
            <div className="newsletter-one__input">
              <input type="email" placeholder="Your Email" required />
            </div>
            <button type="submit" className="newsletter-one__btn">
              <i className="icon-arrow-up"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
