import { Link } from 'react-router';

const processes = [
  {
    id: 1,
    image: '/assets/images/steps/Questions-pana.png',
    title: 'Identifying Needs',
    text: 'We start by listening to communities and conducting thorough assessments',
  },
  {
    id: 2,
    image: '/assets/images/steps/Team work-bro.png',
    title: 'Empowering Lives',
    text: 'We start by listening to communities and conducting thorough assessments',
  },
  {
    id: 3,
    image: '/assets/images/steps/Team goals-pana.png',
    title: 'powerful and inspiring',
    text: 'We start by listening to communities and conducting thorough assessments',
  },
];

function ProcessSection() {
  return (
    <section className="process-one">
      <div className="process-one__shape-2 float-bob-x">
        <img src="/assets/images/shapes/process-one-shape-2.png" alt="" />
      </div>
      <div className="process-one__shape-3 float-bob-y">
        <img src="/assets/images/shapes/process-one-shape-3.png" alt="" />
      </div>
      <div className="container">
        <div
          className="section-title text-center sec-title-animation animation-style2"
        >
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-2"></div>
            <span className="section-title__tagline">Working Process</span>
          </div>
          <h2 className="section-title__title title-animation">
            Our Working Process
          </h2>
        </div>
        <div className="process-one__inner">
          <div className="process-one__shape-1">
            <img src="/assets/images/shapes/process-one-shape-1.png" alt="" />
          </div>
          <ul className="row list-unstyled">
            {processes.map((process, index) => (
              <li key={process.id} className="col-xl-4 col-lg-4">
                <div className="process-one__single">
                  <div className="process-one__img-box">
                    <div className="process-one__img">
                      <img
                        src={process.image}
                        alt=""
                      />
                      <div className="process-one__count"></div>
                    </div>
                  </div>
                  <div className="process-one__content">
                    <h3 className="process-one__title">
                      <Link to="/about">{process.title}</Link>
                    </h3>
                    <p className="process-one__text">
                      {process.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
