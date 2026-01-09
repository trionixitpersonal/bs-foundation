import { useEffect } from 'react';
import MainSlider from '../components/home/MainSlider';
import AboutSection from '../components/home/AboutSection';
import ProgramSection from '../components/home/ProgramSection';
import ProjectSection from '../components/home/ProjectSection';
import ProcessSection from '../components/home/ProcessSection';
import BlogSection from '../components/stories/BlogSection';
import PartnersSection from '../components/home/PartnersSection';
import TestimonialSection from '../components/home/TestimonialSection';
import NewsletterSection from '../components/home/NewsletterSection';

function Home() {
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
        if (window.gsap && window.gsap.plugins && window.gsap.plugins.scrollTrigger) {
            window.gsap.plugins.scrollTrigger.refresh();
        }
    }, []);

    return (
        <div className="page-wrapper">
            <MainSlider />
            <AboutSection />
            <ProgramSection />
            <ProjectSection />
            <ProcessSection />
            <BlogSection />
            <PartnersSection />
            <TestimonialSection />
            <NewsletterSection />
        </div>
    );
}

export default Home;
