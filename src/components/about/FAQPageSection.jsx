import { useState } from 'react';
import { Link } from 'react-router';

const faqItems = [
  {
    id: 1,
    question: 'Can I organize a fundraiser for your charity?',
    answer:
      'We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly',
    isActive: false,
  },
  {
    id: 2,
    question: 'How can I stay updated on your activities?',
    answer:
      'We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly',
    isActive: true,
  },
  {
    id: 3,
    question: 'Do you collaborate with other organizations?',
    answer:
      'We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly',
    isActive: false,
  },
  {
    id: 4,
    question: 'What kind of services do you provide?',
    answer:
      'We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly',
    isActive: false,
  },
];

function FAQPageSection() {
  const [activeId, setActiveId] = useState(2);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-one faq-page">
      <div className="faq-one__shape-2 float-bob-x">
        <img src="/assets/images/shapes/faq-one-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="faq-one__inner">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-one__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape"></div>
                    <span className="section-title__tagline">Our Faq</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Frequently Asking <br />
                    Questions.
                  </h2>
                </div>
                <div className="faq-one__btn-box">
                  <Link to="/faq" className="faq-one__btn thm-btn">
                    <span>More Questions</span>
                    <i className="icon-arrow-up"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="faq-one__right">
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion-1"
                >
                  {faqItems.map((item) => (
                    <div
                      key={item.id}
                      className={`accrodion ${activeId === item.id ? 'active' : ''}`}
                    >
                      <div
                        className="accrodion-title"
                        onClick={() => toggleAccordion(item.id)}
                      >
                        <h4>{item.question}</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQPageSection;
