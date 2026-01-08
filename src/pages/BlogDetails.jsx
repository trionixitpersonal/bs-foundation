import { useEffect } from 'react';
import BlogDetailsPageHeader from '../components/stories/BlogDetailsPageHeader';
import BlogDetailsContent from '../components/stories/BlogDetailsContent';

function BlogDetails() {
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
      <BlogDetailsPageHeader />
      <section className="blog-details">
        <div className="container">
          <div className="blog-details__img">
            <img src="/assets/images/blog/blog-details-img-1.jpg" alt="" />
            <div className="blog-details__date">
              <div className="blog-details__date-shape-1">
                <img
                  src="/assets/images/shapes/blog-details-date-shape-1.png"
                  alt=""
                />
              </div>
              <span>10 Aug 2024</span>
            </div>
          </div>
          <BlogDetailsContent />
        </div>
      </section>
    </div>
  );
}

export default BlogDetails;
