import EventCard from './EventCard';

const events = [
  {
    id: 1,
    image: '/assets/images/event/event-1-1.jpg',
    date: '10 August',
    author: 'Brooklyn Simmons',
    time: '09:05AM - 01:05 AM',
    title: 'Environmental Clean\nUp Day',
  },
  {
    id: 2,
    image: '/assets/images/event/event-1-2.jpg',
    date: '23 April',
    author: 'Brooklyn Simmons',
    time: '09:05AM - 01:05 AM',
    title: 'Environmental Clean\nUp Day',
  },
  {
    id: 3,
    image: '/assets/images/event/event-1-3.jpg',
    date: '03 June',
    author: 'Brooklyn Simmons',
    time: '09:05AM - 01:05 AM',
    title: 'Environmental Clean\nUp Day',
  },
  {
    id: 4,
    image: '/assets/images/event/event-1-4.jpg',
    date: '10 March',
    author: 'Brooklyn Simmons',
    time: '09:05AM - 01:05 AM',
    title: 'Environmental Clean\nUp Day',
  },
];

function EventSection() {
  return (
    <section className="event-one">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape"></div>
            <span className="section-title__tagline">Upcoming Events</span>
          </div>
          <h2 className="section-title__title title-animation">
            Contact For more details
          </h2>
        </div>
        <div className="row">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              delay={`${0.1 + index * 0.2}s`}
            />
          ))}
        </div>
        <div className="prev-and-next">
          <ul className="pg-pagination list-unstyled">
            <li className="prev">
              <a href="#blog-section" aria-label="prev">
                Prev
              </a>
            </li>
            <li className="next">
              <a href="#blog-section" aria-label="Next">
                Next
              </a>
            </li>
          </ul>
          <p className="prev-and-next__text">Showing 01 to 04 of 27</p>
        </div>
      </div>
    </section>
  );
}

export default EventSection;
