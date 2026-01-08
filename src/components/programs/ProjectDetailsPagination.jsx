import { Link } from 'react-router';

function ProjectDetailsPagination() {
  return (
    <div className="project-details__pagination">
      <ul className="pg-pagination list-unstyled">
        <li className="prev">
          <Link to="#" aria-label="prev">
            <i className="icon-right-arrow"></i>Previous
          </Link>
        </li>
        <li className="next">
          <Link to="#" aria-label="Next">
            Next<i className="icon-right-arrow"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProjectDetailsPagination;
