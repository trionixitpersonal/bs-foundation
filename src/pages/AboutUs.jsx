import { useEffect } from 'react';
import PageHeader from '../components/about/PageHeader';
import AboutOneSection from '../components/about/AboutOneSection';
import CounterSection from '../components/about/CounterSection';
import AccomplishmentSection from '../components/about/AccomplishmentSection';
import TestimonialOneSection from '../components/about/TestimonialOneSection';
import FAQSection from '../components/about/FAQSection';
import BlogOneSection from '../components/about/BlogOneSection';
import NewsletterSection from '../components/home/NewsletterSection';

function AboutUs() {
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
            <PageHeader />
            <AboutOneSection />
            <CounterSection />
            <AccomplishmentSection />
            <TestimonialOneSection />
            <FAQSection />
            <BlogOneSection />
            <NewsletterSection />
        </div>
    );
}

export default AboutUs;
