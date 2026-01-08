import { useEffect } from 'react';
import PageHeader from '../components/about/PageHeader';
import ProjectDetailsContent from '../components/programs/ProjectDetailsContent';
import NewsletterSection from '../components/home/NewsletterSection';

function ProgramDetails() {
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
      <PageHeader title="Project Details" breadcrumbText="Project Details" />
      <ProjectDetailsContent />
      <NewsletterSection />
    </div>
  );
}

export default ProgramDetails;
