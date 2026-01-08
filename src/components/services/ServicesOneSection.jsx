import { Link } from 'react-router';

// Services data extracted from the template
const services = [
  {
    id: 1,
    image: '/assets/images/services/services-1-1.jpg',
    icon: 'icon-take-away',
    title: 'Food Assistance Programs',
    text: 'Providing nutritious meals and essential groceries to individuals and families facing food insecurity.',
    link: '/service-details',
    delay: '0.1s',
  },
  {
    id: 2,
    image: '/assets/images/services/services-1-2.jpg',
    icon: 'icon-take-away',
    title: 'Holistic Support Programs',
    text: 'Providing nutritious meals and essential groceries to individuals and families facing food insecurity.',
    link: '/service-details',
    delay: '0.3s',
  },
  {
    id: 3,
    image: '/assets/images/services/services-1-3.jpg',
    icon: 'icon-take-away',
    title: 'Driven Compassion Programs',
    text: 'Providing nutritious meals and essential groceries to individuals and families facing food insecurity.',
    link: '/service-details',
    delay: '0.5s',
  },
  {
    id: 4,
    image: '/assets/images/services/services-1-3.jpg',
    icon: 'icon-take-away',
    title: 'Driven Compassion Programs',
    text: 'Providing nutritious meals and essential groceries to individuals and families facing food insecurity.',
    link: '/service-details',
    delay: '0.1s',
  },
  {
    id: 5,
    image: '/assets/images/services/services-1-1.jpg',
    icon: 'icon-take-away',
    title: 'Food Assistance Programs',
    text: 'Providing nutritious meals and essential groceries to individuals and families facing food insecurity.',
    link: '/service-details',
    delay: '0.3s',
  },
  {
    id: 6,
    image: '/assets/images/services/services-1-2.jpg',
    icon: 'icon-take-away',
    title: 'Holistic Support Programs',
    text: 'Providing nutritious meals and essential groceries to individuals and families facing food insecurity.',
    link: '/service-details',
    delay: '0.5s',
  },
];

function ServicesOneSection() {
  return (
    <section className="services-one service-page1">
      <div className="services-one__shape-1 float-bob-y">
        <img src="/assets/images/shapes/services-one-shape-1.png" alt="" />
      </div>
      <div className="services-one__shape-2 float-bob-x">
        <img src="/assets/images/shapes/services-one-shape-2.png" alt="" />
      </div>
      <div className="services-one__shape-3 float-bob-y">
        <img src="/assets/images/shapes/services-one-shape-3.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="services-one__content">
                    <div className="services-one__content-inner">
                      <div className="services-one__icon">
                        <span className={service.icon}></span>
                      </div>
                      <h3 className="services-one__title">
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                      <p className="services-one__text">{service.text}</p>
                      <div className="services-one__arrow">
                        <Link to={service.link}>
                          <span className="icon-arrow-up"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOneSection;
