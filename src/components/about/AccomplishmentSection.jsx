import { useState, useEffect } from 'react';
import TabButtonOne from './AccomplishmentSection/TabButtonOne';
import TabContentOne from './AccomplishmentSection/TabContentOne';

// Complete courses data extracted from template
const coursesData = {
  viewall: [
    {
      id: 1,
      image: '/assets/images/courses/courses-1-1.jpg',
      tag: 'Medical',
      title: 'Providing Lifesaving Medical Support and Care.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 2,
      image: '/assets/images/courses/courses-1-2.jpg',
      tag: 'Education',
      title: 'Transforming Futures Through Education.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
    {
      id: 3,
      image: '/assets/images/courses/courses-1-3.jpg',
      tag: 'Education',
      title: "That's believe powerful tool and inspiring",
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
  ],
  education: [
    {
      id: 4,
      image: '/assets/images/courses/courses-1-4.jpg',
      tag: 'Medical',
      title: 'heading! It effectively communicates',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 5,
      image: '/assets/images/courses/courses-1-5.jpg',
      tag: 'Education',
      title: "the tool for change. essence of your charity's mission",
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
    {
      id: 6,
      image: '/assets/images/courses/courses-1-6.jpg',
      tag: 'Education',
      title: "the positive impact Chioary we believe you strive",
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
  ],
  healthfood: [
    {
      id: 7,
      image: '/assets/images/courses/courses-1-7.jpg',
      tag: 'Medical',
      title: 'Would you like to use this and Care.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 8,
      image: '/assets/images/courses/courses-1-8.jpg',
      tag: 'Education',
      title: 'Every service we offer is compassion',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
    {
      id: 9,
      image: '/assets/images/courses/courses-1-9.jpg',
      tag: 'Education',
      title: 'Sustainable Impact Through Education.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
  ],
  hunger: [
    {
      id: 10,
      image: '/assets/images/courses/courses-1-10.jpg',
      tag: 'Medical',
      title: 'Becoming a volunteer with Chioary',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 11,
      image: '/assets/images/courses/courses-1-2.jpg',
      tag: 'Education',
      title: 'Transforming Futures Through Education.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
    {
      id: 12,
      image: '/assets/images/courses/courses-1-2.jpg',
      tag: 'Education',
      title: 'Transforming Futures Through Education.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
  ],
  treatment: [
    {
      id: 13,
      image: '/assets/images/courses/courses-1-1.jpg',
      tag: 'Medical',
      title: 'Providing Lifesaving Medical Support and Care.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 14,
      image: '/assets/images/courses/courses-1-2.jpg',
      tag: 'Education',
      title: 'Transforming Futures Through Education.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
    {
      id: 15,
      image: '/assets/images/courses/courses-1-3.jpg',
      tag: 'Education',
      title: 'Transforming Futures Through Education.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 70,
    },
  ],
};

const tabs = [
  { id: 'viewall', label: 'View All' },
  { id: 'education', label: 'Education' },
  { id: 'healthfood', label: 'Health & Food' },
  { id: 'hunger', label: 'Hunger & Nutrition' },
  { id: 'treatment', label: 'Treatment' },
];

function AccomplishmentSection() {
  const [activeTab, setActiveTab] = useState('viewall');

  useEffect(() => {
    // Initialize progress bars for all tabs
    if (window.$ && window.$.fn.appear) {
      window.$('.progress-box').off('appear');

      window.$('.progress-box').appear(function () {
        const $t = window.$(this);
        const percent = $t.find('.bar-fill').attr('data-percent');
        if (!$t.hasClass('animated')) {
          $t.addClass('animated');
          $t.find('.bar-fill').css('width', percent + '%');
          const countText = $t.find('.count-text');
          const speed = parseInt(countText.attr('data-speed'), 10) || 3000;
          const stop = parseInt(countText.attr('data-stop'), 10) || 0;
          window.$({ Counter: 0 }).animate(
            { Counter: stop },
            {
              duration: speed,
              easing: 'linear',
              step: function () {
                countText.text(Math.ceil(this.Counter));
              },
              complete: function () {
                countText.text(stop);
              },
            }
          );
        }
      });

      window.$('.progress-box').trigger('appear');
    }
  }, []);

  useEffect(() => {
    if (window.$) {
      setTimeout(() => {
        window.$('.p-tab.active-tab .progress-box').each(function () {
          const $t = window.$(this);
          if (!$t.hasClass('animated')) {
            const percent = $t.find('.bar-fill').attr('data-percent');
            $t.addClass('animated');
            $t.find('.bar-fill').css('width', percent + '%');
            const countText = $t.find('.count-text');
            const speed = parseInt(countText.attr('data-speed'), 10) || 3000;
            const stop = parseInt(countText.attr('data-stop'), 10) || 0;
            window.$({ Counter: 0 }).animate(
              { Counter: stop },
              {
                duration: speed,
                easing: 'linear',
                step: function () {
                  countText.text(Math.ceil(this.Counter));
                },
                complete: function () {
                  countText.text(stop);
                },
              }
            );
          }
        });
      }, 350);
    }
  }, [activeTab]);

  return (
    <section className="courses-one">
      <div className="courses-one__shape-1 float-bob">
        <img src="/assets/images/shapes/courses-one-shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="courses-one__tab-box courses-one-tabs-box">
          <div className="row">
            <div className="col-xl-4">
              <div className="section-title text-right sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    Our Accomplishment
                  </span>
                  <div className="section-title__tagline-shape"></div>
                </div>
                <h2 className="section-title__title title-animation">
                  Strengthening <br />
                  Communities
                </h2>
              </div>
              <ul className="courses-one-tab-buttons courses-one-tab-btns clearfix list-unstyled">
                {tabs.map((tab) => (
                  <TabButtonOne
                    key={tab.id}
                    id={tab.id}
                    label={tab.label}
                    isActive={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  />
                ))}
              </ul>
            </div>
            <div className="col-xl-8">
              <div className="p-tabs-content">
                {tabs.map((tab) => (
                  <TabContentOne
                    key={tab.id}
                    tabId={tab.id}
                    courses={coursesData[tab.id] || []}
                    isActive={activeTab === tab.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccomplishmentSection;
