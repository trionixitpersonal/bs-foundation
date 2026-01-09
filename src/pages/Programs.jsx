import { useEffect } from 'react';
import PageHeader from '../components/about/PageHeader';
import ProjectSection from '../components/home/ProjectSection';


function Programs() {
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
      <PageHeader title="Project" breadcrumbText="Project" />
      <ProjectSection />
    </div>
  );
}

export default Programs;
