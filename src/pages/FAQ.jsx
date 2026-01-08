import { useEffect } from 'react';
import FAQPageHeader from '../components/about/FAQPageHeader';
import FAQPageSection from '../components/about/FAQPageSection';
import NewsletterSection from '../components/home/NewsletterSection';

function FAQ() {
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
      <FAQPageHeader />
      <FAQPageSection />
      <NewsletterSection />
    </div>
  );
}

export default FAQ;
