import { Link } from 'react-router';
import ProgressBar from './ProgressBar';

function CourseCard({ course }) {
  return (
    <div className="item">
      <div className="courses-three__single">
        <div className="courses-three__img-box">
          <div className="courses-three__img">
            <img src={course.image} alt="" />
            <div className="courses-three__tag">
              <span>{course.tag}</span>
            </div>
          </div>
        </div>
        <div className="courses-three__content">
          <h3 className="courses-three__title">
            <Link to="/courses-details">{course.title}</Link>
          </h3>
          <p className="courses-three__text">{course.text}</p>
          <div className="courses-three__rised-and-goals">
            <div className="courses-three__raised">
              <h4>
                {course.raised}
                <span>Raised</span>
              </h4>
            </div>
            <div className="courses-three__goals">
              <h4>
                {course.goal}
                <span>Goal</span>
              </h4>
            </div>
          </div>
          <ProgressBar progress={course.progress} />
          <div className="courses-three__btn-and-view">
            <div className="courses-three__view">
              <Link to="/courses-details">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
