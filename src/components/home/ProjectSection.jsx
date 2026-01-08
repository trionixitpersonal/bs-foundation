import { useEffect } from 'react';
import { useComponentScript } from '../../hooks/useComponentScript';

const projects = [
  '/assets/images/New folder/project-1-1.jpg',
  '/assets/images/New folder/project-1-2.jpg',
  '/assets/images/New folder/project-1-3.jpg',
  '/assets/images/New folder/project-1-4.jpg',
  '/assets/images/New folder/project-1-5.jpg',
];

function ProjectSection() {
  const carouselRef = useComponentScript(
    (element, $) => {
      if ($(element).length) {
        $(element).owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          smartSpeed: 1000,
          items: 3,
          navText: [
            '<span class="icon-left-arrow"></span>',
            '<span class="icon-right-arrow"></span>',
          ],
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          },
        });
      }
    },
    []
  );

  useEffect(() => {
    // Initialize Magnific Popup for image popups
    // This matches the script.js initialization pattern
    const initMagnificPopup = () => {
      if (window.$ && window.$.fn.magnificPopup) {
        // Find all img-popup elements within this component
        const $popups = window.$('.project-one .img-popup');
        if ($popups.length) {
          // Group all images in the gallery
          $popups.magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: {
              enabled: true,
            },
          });
        }
      }
    };

    let checkInterval = null;

    // Wait for jQuery and Magnific Popup to be available
    // Also add a small delay to ensure carousel items are rendered
    const timeoutId = setTimeout(() => {
      if (window.$ && window.$.fn.magnificPopup) {
        initMagnificPopup();
      } else {
        // If not ready, poll until available
        checkInterval = setInterval(() => {
          if (window.$ && window.$.fn.magnificPopup) {
            clearInterval(checkInterval);
            checkInterval = null;
            initMagnificPopup();
          }
        }, 100);
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      if (checkInterval) {
        clearInterval(checkInterval);
      }
    };
  }, []);

  // Generate project items - matching the exact structure from template (20 items total)
  const projectItems = [];
  for (let i = 0; i < 4; i++) {
    projects.forEach((project, index) => {
      projectItems.push(
        <div key={`${i}-${index}`} className="item">
          <div className="project-one__single">
            <div className="project-one__img-box">
              <div className="project-one__img">
                <img src={project} alt="" />
              </div>
              <div className="project-one__arrow">
                <a href={project} className="img-popup">
                  <span className="icon-arrow-up"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="project-one">
      <div className="project-one__bg-color">
        <div
          className="project-one__bg"
          style={{
            backgroundImage: 'url(/assets/images/backgrounds/project-one-bg.webp)',
          }}
        ></div>
      </div>
      <div
        className="section-title text-center sec-title-animation animation-style1"
      >
        <div className="section-title__tagline-box">
          <div className="section-title__tagline-shape"></div>
          <span className="section-title__tagline">Our Recent Project</span>
        </div>
        <h2 className="section-title__title title-animation">
          One Project At A Time
        </h2>
      </div>
      <div className="container">
        <div className="project-one__carousel owl-theme owl-carousel" ref={carouselRef}>
          {projectItems}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
