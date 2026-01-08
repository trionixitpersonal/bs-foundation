import { useEffect } from 'react';
import ContactPageHeader from '../components/contact/ContactPageHeader';
import ContactPageSection from '../components/contact/ContactPageSection';
import GoogleMapSection from '../components/contact/GoogleMapSection';
import ContactTwoSection from '../components/contact/ContactTwoSection';
import NewsletterSection from '../components/home/NewsletterSection';

function Contact() {
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
      <ContactPageHeader />
      <ContactPageSection />
      <GoogleMapSection />
      <ContactTwoSection />
      <NewsletterSection />
    </div>
  );
}

export default Contact;
