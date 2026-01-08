import { Link } from 'react-router';
import ProgressBarOne from './ProgressBarOne';

function CourseCardOne({ course }) {
  return (
    <div className="item">
      <div className="courses-one__single">
        <div className="courses-one__img-box">
          <div className="courses-one__img">
            <img src={course.image} alt="" />
          </div>
          <div className="courses-one__tag">
            <span>{course.tag}</span>
          </div>
        </div>
        <div className="courses-one__content">
          <h3 className="courses-one__title">
            <Link to="/courses-details">{course.title}</Link>
          </h3>
          <p className="courses-one__text">{course.text}</p>
          <div className="courses-one__rised-and-goals">
            <div className="courses-one__raised">
              <h4>
                {course.raised}
                <span>Raised</span>
              </h4>
            </div>
            <div className="courses-one__goals">
              <h4>
                {course.goal}
                <span>Goal</span>
              </h4>
            </div>
          </div>
          <ProgressBarOne progress={course.progress} />
          <div className="courses-one__btn-box">
            <Link to="/courses-details" className="courses-one__btn thm-btn">
              <span>Donate Now</span>
              <i className="icon-arrow-up"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCardOne;
