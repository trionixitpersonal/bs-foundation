import { useEffect } from 'react';
import ServicesPageHeader from '../components/services/ServicesPageHeader';
import ServicesOneSection from '../components/services/ServicesOneSection';
import NewsletterSection from '../components/home/NewsletterSection';

function Services() {
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
      <ServicesPageHeader />
      <ServicesOneSection />
      <NewsletterSection />
    </div>
  );
}

export default Services;
