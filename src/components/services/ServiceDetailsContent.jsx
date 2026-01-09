import ServiceDetailsFAQ from './ServiceDetailsFAQ';
import ServiceDetailsSidebar from './ServiceDetailsSidebar';

function ServiceDetailsContent() {
  return (
    <div className="services-details__content">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="services-details__title-box">
            <div className="services-details__title-box-icon">
              <span className="icon-healthcare"></span>
            </div>
            <h2 className="services-details__title-1">Holistic Support</h2>
          </div>
          <p className="services-details__text-1">
            we understand that successful digital transformation requires more
            than just isolated solutions. Th act's why our approach is rooted in
            holistic support, ensuring every aspect of your business is aligned
            and optimized for growth. Comprehensive Strategy Development We start
            by understanding your un pique needs, challenges, and goals. Our
            experts work closely with you to develop a strategy that integ antes
            all elements of your digital presence, from web design to marketing
            and beyond.
          </p>
          <p className="services-details__text-2">
            Whether you need a new website, SEO services, or social media
            management, we ensure that every so lution is seamlessly connected,
            creating a cohesive and powerful digital footprint.
          </p>
          <h2 className="services-details__title-2">Ongoing Collaboration</h2>
          <p className="services-details__text-3">
            We believe in long-term partnerships. Our team provides continuous
            support, monitoring performance, and making adjustments as your
            business evolves. We're here to help you adapt to changes and cap
            italize on new opportunities.
          </p>
          <div className="services-details__img-box">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="services-details__img-box-img">
                  <img
                    src="public/assets/images/projects/project-1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="services-details__img-box-img">
                  <img
                    src="public/assets/images/projects/project-3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="services-details__text-4">
            Proactive Problem-Solving Challenges are inevitable, but with Hazel
            Digital Pioneers, you're never facing them alone. Our proactive
            approach to support means we identify potential issues before they
          </p>
          <p className="services-details__text-5">
            become problems, keeping your business running smoothly. Personalized
            Attention Every business is un ique, and so is our support. We
            tailor our services to your specific needs, ensuring that you receive
            the attention and expertise necessary for success.
          </p>
          <ServiceDetailsFAQ />
        </div>
        <div className="col-xl-4 col-lg-5">
          <ServiceDetailsSidebar />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
