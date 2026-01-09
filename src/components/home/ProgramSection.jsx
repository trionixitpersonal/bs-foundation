import { useState, useEffect } from 'react';
import TabButton from './ProgramSection/TabButton';
import TabContent from './ProgramSection/TabContent';

// Complete courses data extracted from template
const coursesData = {
  viewall: [
    {
      id: 1,
      image: '/assets/images/projects/project-1.jpg',
      tag: 'Medical',
      title: 'Providing Lifesaving Medical Support and Care.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 2,
      image: '/assets/images/projects/project-2.jpg',
      tag: 'Medical',
      title: 'Providing access to safe drinking water through',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
  ],
  education: [
    {
      id: 3,
      image: '/assets/images/projects/project-3.jpg',
      tag: 'Education',
      title: 'well construction and purification projects.',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 4,
      image: '/assets/images/projects/project-4.jpg',
      tag: 'Education',
      title: 'Empowering Lives Through Compassion" powerful',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
  ],
  healthfood: [
    {
      id: 5,
      image: '/assets/images/projects/project-5.jpg',
      tag: 'Health & Food',
      title: 'inspiring heading that perfectly captures',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 6,
      image: '/assets/images/projects/project-6.jpg',
      tag: 'Health & Food',
      title: "the essence of your charity's mission.",
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
  ],
  hunger: [
    {
      id: 7,
      image: '/assets/images/projects/project-7.jpg',
      tag: 'Hunger & Nutrition',
      title: "charity's mission powerful tool It's a great choice",
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 8,
      image: '/assets/images/projects/project-5.jpg',
      tag: 'Hunger & Nutrition',
      title: 'We start by listening to communities and conducting',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
  ],
  treatment: [
    {
      id: 9,
      image: '/assets/images/projects/project-6.jpg',
      tag: 'Treatment',
      title: 'communities and conducting thorough assessments',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
    },
    {
      id: 10,
      image: '/assets/images/projects/project-7.jpg',
      tag: 'Treatment',
      title: 'The educational programs offered by Chioary',
      text: 'At Chioary we believe that education is a powerful tool for change.',
      raised: '$50,00',
      goal: '$50,00',
      progress: 75,
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

function ProgramSection() {
  const [activeTab, setActiveTab] = useState('viewall');

  useEffect(() => {
    // Initialize progress bars for all tabs (they're all in the DOM)
    if (window.$ && window.$.fn.appear) {
      // Remove any existing appear handlers to avoid duplicates
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
      
      // Trigger appear check for visible progress bars
      window.$('.progress-box').trigger('appear');
    }
  }, []); // Run once on mount since all tabs are in DOM

  // Re-trigger progress bar animation when tab changes (for newly visible tabs)
  useEffect(() => {
    if (window.$) {
      // Small delay to ensure tab transition completes
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
    <section className="courses-three">
      <div className="courses-three__shape-1 float-bob-x">
        <img src="/assets/images/shapes/courses-three-shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Recent Courses</span>
            <div className="section-title__tagline-shape"></div>
          </div>
          <h2 className="section-title__title title-animation">
            Expanding Horizons Through Learning
          </h2>
        </div>
        <div className="courses-three__tab-box courses-three-tabs-box">
          <div className="row">
            <div className="col-xl-4">
              <ul className="courses-three-tab-buttons courses-three-tab-btns clearfix list-unstyled">
                {tabs.map((tab) => (
                  <TabButton
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
                  <TabContent
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

export default ProgramSection;
