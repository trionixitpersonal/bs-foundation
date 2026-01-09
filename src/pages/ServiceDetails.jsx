import { useEffect } from 'react';
import ServiceDetailsPageHeader from '../components/services/ServiceDetailsPageHeader';
import ServiceDetailsContent from '../components/services/ServiceDetailsContent';
import NewsletterSection from '../components/home/NewsletterSection';

function ServiceDetails() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Refresh animations
    if (window.AOS) {
      window.AOS.refresh();
    }

    if (window.WOW) {
      new window.WOW().init();
    }

    // Refresh GSAP ScrollTrigger if available
    if (
      window.gsap &&
      window.gsap.plugins &&
      window.gsap.plugins.scrollTrigger
    ) {
      window.gsap.plugins.scrollTrigger.refresh();
    }
  }, []);

  return (
    <div className="page-wrapper">
      <ServiceDetailsPageHeader />
      <section className="services-details">
        <div className="container">
          <div className="services-details__inner">
            <div className="services-details__img">
              <img
                src="/assets/images/projects/project-7.jpg"
                alt=""
              />
            </div>
            <ServiceDetailsContent />
          </div>
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
}

export default ServiceDetails;
