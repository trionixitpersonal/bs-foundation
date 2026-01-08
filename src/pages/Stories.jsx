import { useEffect } from 'react';
import StoriesPageHeader from '../components/stories/StoriesPageHeader';
import EventSection from '../components/stories/EventSection';
import BlogSection from '../components/stories/BlogSection';
import NewsletterSection from '../components/home/NewsletterSection';

function Stories() {
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
      <StoriesPageHeader />
      <div id="event-section">
        <EventSection />
      </div>
      <BlogSection />
      <NewsletterSection />
    </div>
  );
}

export default Stories;
