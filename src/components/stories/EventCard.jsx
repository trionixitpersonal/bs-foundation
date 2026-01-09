import { Link } from 'react-router';

function EventCard({ event, delay }) {
  return (
    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay={delay}>
      <div className="event-one__single">
        <div className="event-one__img-box">
          <div className="event-one__img">
            <img src={event.image} alt="" />
          </div>
          <div className="event-one__date">
            <div className="event-one__date-shape-1">
              <img
                src="/assets/images/shapes/blog-one-date-shape-1.png"
                alt=""
              />
            </div>
            <p>{event.time}</p>
          </div>
        </div>
        <div className="event-one__content">
          <h3 className="event-one__title">
            <Link to="/events">
              {event.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < event.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </Link>
          </h3>
          <p className="event-one__text">
            By {event.author}
            <span>{event.date}</span>
          </p>
          <div className="event-one__btn-box">
            <Link to="/events" className="event-one__btn">
              <i className="icon-right-arrow"></i>
              <span>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
