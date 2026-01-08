import { useState } from 'react';

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

function ServiceDetailsFAQ() {
  const [activeId, setActiveId] = useState(2);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
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
  );
}

export default ServiceDetailsFAQ;
